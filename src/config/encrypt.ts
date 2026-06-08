import CryptoJS from "crypto-js";

const SECRET = "DonBoscoAdmission2026";

export const encryptPayload = (data: unknown) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET
  ).toString();
};