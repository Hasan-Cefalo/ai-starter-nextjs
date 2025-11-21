export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme-preference';

export const themeColors = {
  light: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
  },
  dark: {
    primary: {
      50: '#1e3a8a',
      100: '#1e40af',
      200: '#1d4ed8',
      300: '#2563eb',
      400: '#3b82f6',
      500: '#60a5fa',
      600: '#93c5fd',
      700: '#bfdbfe',
      800: '#dbeafe',
      900: '#eff6ff',
    },
    background: {
      primary: '#111827',
      secondary: '#1f2937',
    },
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
    },
  },
} as const;

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return null;
}

export function setStoredTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function applyTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;

  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
}
