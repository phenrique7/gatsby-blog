export function getThemeColor() {
  const theme = typeof window !== 'undefined' && window.__theme;
  return theme === 'dark' ? '#16202c' : '#fff';
}
