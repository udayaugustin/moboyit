declare global {
  interface Window {
    appConfig: {
      baseUrl: string;
    };
  }
}

export const getBaseUrl = () => {
  // Use runtime config if available, fallback to environment variable
  return window.appConfig?.baseUrl || import.meta.env.VITE_BASE_URL || '/';
};
