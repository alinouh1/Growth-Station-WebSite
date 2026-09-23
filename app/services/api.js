/**
 * API Service for Growth Station
 * Centralized API calls for the application
 */
const BASE_URL = import.meta.env.VITE_API_URL || "https://api.growthstationco.com";

// ── helpers ──────────────────────────────────────────────
const parseBody = async (res) => {
  const text = await res.text();
  if (!text) return null;
  try { return JSON.parse(text); } catch { return text; }
};

// ── Brief ─────────────────────────────────────────────────
export const submitBrief = async (briefData) => {
  const response = await fetch(`${BASE_URL}/brief`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...briefData, submittedAt: new Date().toISOString() }),
  });
  const data = await parseBody(response);
  if (!response.ok) {
    const error = new Error(data?.message || data?.error || `HTTP ${response.status}`);
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
};

// ── Contact ───────────────────────────────────────────────
export const submitContact = async (contactData) => {
  const response = await fetch(`${BASE_URL}/contact/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...contactData, submittedAt: new Date().toISOString() }),
  });
  const data = await parseBody(response);
  if (!response.ok) throw { response: { data } };
  return data;
};

// ── Jobs / Announcements ──────────────────────────────────
// ✅ الـ endpoint الصح هو /announcement — بيرجع كل الإعلانات وبنفلتر publish === true
export const getJobPostings = async () => {
  const response = await fetch(`${BASE_URL}/announcement`);
  const data = await parseBody(response);
  if (!response.ok) throw { response: { data } };
  const jobs = Array.isArray(data) ? data : data?.data || [];
  return jobs.filter((job) => job.publish === true);
};

// ── Job Application ───────────────────────────────────────
// ✅ الـ endpoint الصح هو /application/ — بيقبل FormData
export const submitJobApplication = async (formData) => {
  const body = new FormData();
  body.append("fullName", formData.fullName);
  body.append("email", formData.email);
  body.append("position", formData.position || "Open Application");
  if (formData.cv)               body.append("resume", formData.cv);
  if (formData.phone)            body.append("phone", formData.phone);
  if (formData.portfolio)        body.append("portfolio", formData.portfolio);
  if (formData.whyGrowthStation) body.append("message", formData.whyGrowthStation);

  const response = await fetch(`${BASE_URL}/application/`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
  });
  const data = await parseBody(response);
  if (!response.ok) throw new Error(data?.message || "Failed to submit application");
  return data;
};

// ── Portfolio ─────────────────────────────────────────────
export const fetchPortfolio = async (category = null) => {
  const url = category
    ? `${BASE_URL}/portfolio?category=${encodeURIComponent(category)}`
    : `${BASE_URL}/portfolio`;
  const response = await fetch(url);
  const data = await parseBody(response);
  if (!response.ok) throw { response: { data } };
  return data;
};

// ── Default export ────────────────────────────────────────
export default {
  submitBrief,
  submitContact,
  getJobPostings,
  submitJobApplication,
  fetchPortfolio,
};