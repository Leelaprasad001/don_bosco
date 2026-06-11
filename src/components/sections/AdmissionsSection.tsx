import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { APPLY_API_URL } from '../../config/apiUrls';
import { encryptPayload } from "./../../config/encrypt";

type ApplyForm = {
  studentName: string;
  parentName: string;
  classApplyingFor: string;
  phoneNumber: string;
  emailAddress: string;
  city: string;
  message: string;
};

const initialForm: ApplyForm = {
  studentName: '',
  parentName: '',
  classApplyingFor: '',
  phoneNumber: '',
  emailAddress: '',
  city: '',
  message: '',
};

export function AdmissionsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState<ApplyForm>(initialForm);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };

    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [modalOpen]);

  const onChange = (key: keyof ApplyForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const payload = {
        ...form,
        source: 'don_bosco_website',
      };
      const encrypted = encryptPayload(payload);
      const res = await fetch(APPLY_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payload: encrypted,
        }),
      });

      if (!res.ok) {
        throw new Error('Apply request failed');
      }

      setSuccessMsg('Application submitted successfully. We will contact you soon.');
      setForm(initialForm);
      setTimeout(() => {
        setModalOpen(false);
      }, 900);
    } catch {
      setErrorMsg('Unable to submit right now. Please try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="cta-banner" id="admissions">
      <div className="container">
        <span className="cta-pill">Admissions Open for 2026-27</span>
        <h2>
          Give Your Child the Gift
          <br />
          of Quality Education
        </h2>
        <p>Join thousands of families who have trusted Don Bosco's English Medium School for their children's educational journey. Limited seats available.</p>
        {/* <p className="cta-note">Applications close on March 31, 2026. Early applications receive priority.</p> */}
        <div className="cta-actions">
          <button type="button" className="btn btn--white" onClick={() => setModalOpen(true)}>
            Apply Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <a href="#contact" className="btn btn--ghost-light">
            Contact Us
          </a>
        </div>
      </div>

      <div className={`apply-modal-wrap ${modalOpen ? 'open' : ''}`} aria-hidden={!modalOpen} onClick={(e) => e.currentTarget === e.target && setModalOpen(false)}>
        <div className="apply-modal" role="dialog" aria-modal="true" aria-label="Admissions Application Form">
          <button type="button" className="apply-close" aria-label="Close form" onClick={() => setModalOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <h3 className="">Apply for Admission</h3>
          <p className="apply-sub">Fill in the details and we will reach out with the next steps.</p>

          <form className="apply-form" onSubmit={onSubmit}>
            <label>
              Student Name
              <input required value={form.studentName} onChange={(e) => onChange('studentName', e.target.value)} />
            </label>
            <label>
              Parent Name
              <input required value={form.parentName} onChange={(e) => onChange('parentName', e.target.value)} />
            </label>
            <label>
              Class Applying For
              <input required value={form.classApplyingFor} onChange={(e) => onChange('classApplyingFor', e.target.value)} />
            </label>
            <label>
              Phone Number
              <input required value={form.phoneNumber} onChange={(e) => onChange('phoneNumber', e.target.value)} />
            </label>
            <label>
              Email Address
              <input type="email" required value={form.emailAddress} onChange={(e) => onChange('emailAddress', e.target.value)} />
            </label>
            <label>
              City
              <input required value={form.city} onChange={(e) => onChange('city', e.target.value)} />
            </label>
            <label className="apply-full">
              Message
              <textarea rows={4} value={form.message} onChange={(e) => onChange('message', e.target.value)} />
            </label>

            {errorMsg && <p className="apply-feedback err apply-full">{errorMsg}</p>}
            {successMsg && <p className="apply-feedback ok apply-full">{successMsg}</p>}

            <div className="apply-actions apply-full">
              <button type="button" className="btn btn--outline" onClick={() => setModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="btn btn--primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
