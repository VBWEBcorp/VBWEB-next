export function ThemeScript() {
  const script = `(function(){var t=localStorage.getItem('mymag-theme');if(t==='light')return;document.documentElement.classList.add('dark')})();`
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
