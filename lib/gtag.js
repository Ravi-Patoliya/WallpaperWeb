export const GA_TRACKING_ID = 'G-HC80H6Y2CP';

const safeGtag = (method, ...args) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(method, ...args);
  } else {
  }
};

// Track page views
export const pageview = (url) => {
  safeGtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track events
export const GaEvent = ({ action, category, label = "", value = "" }) => {
  safeGtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
