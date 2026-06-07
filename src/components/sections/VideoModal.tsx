type VideoModalProps = {
  show: boolean;
  onClose: () => void;
};

export function VideoModal({
  show,
  onClose,
}: VideoModalProps) {
  if (!show) return null;

  return (
    <div className="video-modal" onClick={onClose}>
      <div
        className="video-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="video-close"
          onClick={onClose}
        >
          ×
        </button>

        <video
          controls
          autoPlay
          playsInline
          width="100%"
        >
          <source
            src="/assests/videos/campus-tour.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}