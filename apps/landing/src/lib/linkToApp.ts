export const linkToApp = (path = "") => {
  const appBaseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;
  if (!appBaseUrl) {
    return path;
  }
  const url = new URL(path, appBaseUrl);
  return url.href;
};
