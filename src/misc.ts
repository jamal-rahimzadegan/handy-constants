const isDevelopment = process.env.NODE_ENV === 'development';

const isSSR = typeof document === 'undefined';

export { isSSR, isDevelopment };
