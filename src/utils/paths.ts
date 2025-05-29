export const getImagePath = (path: string) => {
  const isProduction = import.meta.env.MODE === 'production';
  return path.startsWith('/') ? path.slice(1) : path;
};
