export const HIDE_FEATURES = (): boolean => process.env.REACT_APP_HIDE_FEATURES === 'true';
export const SESSION_KEY = (key: string): string => `@hackerlog/${key}`;