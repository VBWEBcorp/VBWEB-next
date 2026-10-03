/*
 * Pixel OpenAI Ads (pub ChatGPT). Le script de base est posé dans le <head> de
 * layout.tsx ; ici, ce qui l'appelle depuis les composants. Si le script n'est
 * pas encore chargé, la file oaiq garde l'appel et le rejoue au chargement.
 */
export const OPENAI_PIXEL_ID = 'G2vxjESFCSreSn3EURdjLC'

type Oaiq = (...args: unknown[]) => void

function oaiq(...args: unknown[]) {
  const fn = (window as unknown as { oaiq?: Oaiq }).oaiq
  if (typeof fn === 'function') fn(...args)
}

// Conversion de la campagne : une demande de rappel envoyée avec succès.
export function trackRappelDemande() {
  oaiq('measure', 'appointment_scheduled', { type: 'customer_action' })
}

export function setPixelConsent(granted: boolean) {
  oaiq('consent', granted)
}

// Script de base, consent à false d'emblée si le visiteur a déjà refusé.
export const OPENAI_PIXEL_SNIPPET = `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");try{if(localStorage.getItem("cookie-consent")==="refused")oaiq("consent",false)}catch(e){}oaiq("init",{pixelId:"${OPENAI_PIXEL_ID}",debug:location.hostname!=="vbweb.fr"});`
