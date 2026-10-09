// Fabrique le PDF du guide à partir de points.json (la même source que la page du
// site), puis l'imprime avec Chrome. Lancer : node guide-ia/construire-pdf.mjs
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const RACINE = path.resolve(path.dirname(decodeURIComponent(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1')), '..');
const guide = JSON.parse(fs.readFileSync(path.join(RACINE, 'src/app/guide-ia/points.json'), 'utf8'));
const b64 = (p, type) => `data:${type};base64,${fs.readFileSync(path.join(RACINE, p)).toString('base64')}`;
const LOGO = b64('public/logo-vbweb.png', 'image/png');
const PHOTO = b64('public/victor-beasse.jpg', 'image/jpeg');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const SORTIE_HTML = path.join(RACINE, 'guide-ia/guide-chatgpt-12-points.html');
const SORTIE_PDF = path.join(RACINE, 'public/Guide-VBWEB-12-points-ChatGPT.pdf');

const echappe = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const point = (p) => `
  <div class="point">
    <div class="tete"><span class="n">${p.n}</span><h3>${echappe(p.titre)}</h3></div>
    <p>${echappe(p.pourquoi)}</p>
    <div class="verif"><b>Vérifier :</b> ${echappe(p.verifier)}</div>
    <p class="vu">Ce que je vois le plus souvent : ${echappe(p.vu)}</p>
  </div>`;

const pagePoints = (titre, liste) => `
<section class="page">
  <h2>${titre}</h2>
  ${liste.map(point).join('')}
  <div class="pied-page"><img src="${LOGO}" alt="" /><span>vbweb.fr</span></div>
</section>`;

const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8" />
<title>${echappe(guide.titre)}</title>
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  :root { --nuit:#1B2D46; --bleu:#3FA9F5; --encre:#16202E; --gris:#5C6B7E; --trait:#E3E9F0; --fond:#F5F8FC; }
  body { margin:0; font-family:'Segoe UI', Inter, Arial, sans-serif; color:var(--encre); font-size:11pt; line-height:1.5; }
  .page { width:210mm; height:297mm; padding:18mm 18mm 20mm; position:relative; page-break-after:always; overflow:hidden; }
  .page:last-child { page-break-after:auto; }
  .couv { background:var(--nuit); color:#fff; padding:24mm 18mm; }
  .couv .logo { height:13mm; filter:brightness(0) invert(1); }
  .couv .surtitre { margin-top:24mm; font-size:10.5pt; letter-spacing:.22em; text-transform:uppercase; color:var(--bleu); font-weight:600; }
  .couv h1 { font-size:30pt; line-height:1.12; margin:6mm 0 0; font-weight:700; letter-spacing:-.5px; }
  .couv .chapeau { margin-top:8mm; font-size:12pt; color:#C9D6E5; max-width:150mm; }
  .couv .barre { width:26mm; height:3px; background:var(--bleu); margin:10mm 0; border-radius:2px; }
  .couv .auteur { position:absolute; left:18mm; bottom:22mm; display:flex; align-items:center; gap:6mm; }
  .couv .auteur img { width:22mm; height:22mm; border-radius:50%; object-fit:cover; border:2px solid rgba(255,255,255,.25); }
  .couv .auteur strong { display:block; font-size:12.5pt; }
  .couv .auteur span { color:#9FB3C8; font-size:10.5pt; }
  .couv .pied { position:absolute; right:18mm; bottom:22mm; text-align:right; color:#9FB3C8; font-size:10pt; }
  .couv .pied b { color:#fff; display:block; font-size:11.5pt; }
  h2 { font-size:18pt; margin:0 0 5mm; letter-spacing:-.3px; }
  .intro p { color:var(--gris); margin:0 0 4mm; }
  .prompts { margin:6mm 0; }
  .prompt { background:var(--fond); border:1px solid var(--trait); border-radius:3mm; padding:3.5mm 4mm; margin-bottom:2.5mm; font-family:Consolas, 'Courier New', monospace; font-size:10pt; color:var(--nuit); }
  .cles { display:flex; gap:4mm; margin:7mm 0; }
  .cle { flex:1; background:var(--fond); border:1px solid var(--trait); border-radius:4mm; padding:4.5mm; }
  .cle b { display:block; font-size:18pt; color:var(--nuit); line-height:1; }
  .cle span { font-size:9pt; color:var(--gris); display:block; margin-top:2mm; }
  .point { border:1px solid var(--trait); border-radius:4mm; padding:4.5mm; margin-bottom:3.5mm; background:#fff; }
  .point .tete { display:flex; align-items:baseline; gap:3mm; }
  .point .n { font-weight:700; color:#fff; background:var(--nuit); width:7mm; height:7mm; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; flex:0 0 7mm; font-size:9.5pt; }
  .point h3 { margin:0; font-size:12pt; line-height:1.3; }
  .point p { margin:2.5mm 0 0 10mm; color:var(--gris); font-size:10pt; }
  .point .verif { margin:3mm 0 0 10mm; padding:2.5mm 3.5mm; background:var(--fond); border-left:2.5px solid var(--bleu); border-radius:0 2mm 2mm 0; font-size:9.5pt; }
  .point .verif b { color:var(--nuit); }
  .point .vu { font-style:italic; font-size:9pt; color:#8292A6; }
  .bandeau { background:var(--nuit); color:#fff; border-radius:5mm; padding:8mm; }
  .bandeau h2 { color:#fff; }
  .bandeau p { color:#C9D6E5; }
  .bandeau .lien { display:inline-block; margin-top:5mm; background:var(--bleu); color:#06243A; font-weight:700; padding:3.5mm 7mm; border-radius:30mm; text-decoration:none; font-size:11.5pt; }
  .pied-page { position:absolute; left:18mm; right:18mm; bottom:12mm; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--trait); padding-top:3mm; color:#90A0B3; font-size:9pt; }
  .pied-page img { height:5mm; opacity:.85; }
  .signature { margin-top:6mm; color:var(--gris); font-size:10.5pt; }
  .signature b { color:var(--encre); }
  a { color:var(--bleu); text-decoration:none; }
</style></head>
<body>

<section class="page couv">
  <img class="logo" src="${LOGO}" alt="VBWEB" />
  <p class="surtitre">Guide gratuit</p>
  <h1>${echappe(guide.titre)}</h1>
  <div class="barre"></div>
  <p class="chapeau">${echappe(guide.sousTitre)}</p>
  <div class="auteur">
    <img src="${PHOTO}" alt="" />
    <div><strong>Victor Béasse</strong><span>VBWEB, Rennes. 150 entreprises accompagnées en 5 ans.</span></div>
  </div>
  <div class="pied"><b>vbweb.fr</b>contact@vbweb.fr</div>
</section>

<section class="page intro">
  <h2>Commencez par le test. Deux minutes.</h2>
  <p>Avant de lire les douze points, faites ce que je fais devant chaque nouveau client. Ouvrez ChatGPT,
     la version gratuite suffit, et posez ces questions comme votre client les poserait.</p>
  <div class="prompts">
    ${guide.testPrompts.map((p) => `<div class="prompt">${echappe(p)}</div>`).join('')}
  </div>
  <p>Cliquez ensuite sur les sources affichées sous la réponse. Vous saurez trois choses : quels concurrents
     l'IA recommande à votre place, où elle va chercher ses informations, et ce qui vous manque pour apparaître.</p>
  <div class="cles">
    <div class="cle"><b>12</b><span>points à vérifier, dans l'ordre</span></div>
    <div class="cle"><b>1 min</b><span>pour contrôler chacun vous-même</span></div>
    <div class="cle"><b>0 €</b><span>aucun outil payant</span></div>
  </div>
  <p>Prenez les points dans l'ordre. Chacun tient en trois lignes : ce que l'IA regarde, comment le vérifier,
     et ce que je constate le plus souvent sur le terrain. Cochez ce qui est en place, notez ce qui manque.</p>
  <div class="pied-page"><img src="${LOGO}" alt="" /><span>vbweb.fr</span></div>
</section>

${pagePoints('Les points 1 à 4', guide.points.slice(0, 4))}
${pagePoints('Les points 5 à 8', guide.points.slice(4, 8))}
${pagePoints('Les points 9 à 12', guide.points.slice(8, 12))}

<section class="page">
  <h2>${echappe(guide.fin.titre)}</h2>
  <p style="color:var(--gris)">${echappe(guide.fin.texte)}</p>
  <p style="color:var(--gris)">${echappe(guide.fin.pourquoiCeGuide)}</p>
  <div class="bandeau">
    <h2 style="font-size:16pt">Vous voulez savoir où vous en êtes ?</h2>
    <p>Je regarde votre site, votre fiche Google et ce que les IA disent de vous, puis je vous envoie une vidéo
       de cinq minutes avec ce que je ferais à votre place. C'est gratuit et sans engagement.</p>
    <a class="lien" href="https://vbweb.fr/audit-seo-gratuit">Demander mon audit sur vbweb.fr</a>
  </div>
  <p class="signature">
    <b>Victor Béasse</b><br />VBWEB, Rennes<br />
    contact@vbweb.fr &nbsp;·&nbsp; 06 27 30 17 88<br />
    <a href="https://vbweb.fr">vbweb.fr</a> &nbsp;·&nbsp; <a href="https://vbweb.fr/guide-ia">vbweb.fr/guide-ia</a>
  </p>
  <p style="margin-top:7mm; font-size:9pt; color:#90A0B3">Guide à jour en octobre 2026. Les IA changent vite :
     si vous le lisez beaucoup plus tard, écrivez-moi, je vous dirai ce qui a bougé.</p>
  <div class="pied-page"><img src="${LOGO}" alt="" /><span>vbweb.fr</span></div>
</section>

</body></html>`;

fs.writeFileSync(SORTIE_HTML, html, 'utf8');
console.log('HTML écrit :', SORTIE_HTML);

const url = 'file:///' + SORTIE_HTML.replace(/\\/g, '/').replace(/ /g, '%20');
execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer',
  `--user-data-dir=${path.join(RACINE, 'guide-ia/.chrome')}`, `--print-to-pdf=${SORTIE_PDF}`, url], { stdio: 'inherit' });
console.log('PDF écrit :', SORTIE_PDF, (fs.statSync(SORTIE_PDF).size / 1024).toFixed(0) + ' Ko');
