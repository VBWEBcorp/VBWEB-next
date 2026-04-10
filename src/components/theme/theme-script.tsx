export function ThemeScript() {
  const script = `(function(){document.documentElement.classList.add('dark')})();`
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
