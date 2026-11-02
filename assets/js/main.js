/* YTR AGENCY · scripts du site (données à personnaliser en haut du fichier) */
/* =========================================================
   DONNÉES À PERSONNALISER
   ========================================================= */

/* Bandeau de confiance : noms ou logos de vos clients */
const CLIENTS = ['Garage de Staël', 'Action Scooters', 'Number One', 'Le Vélo sur la Piste', 'Dragon Bleu Paris'];

/* Secteurs : besoins, ce que je mets en place, réalisation liée (id du projet ou null) */
const SECTORS = [
  { id:'resto', label:'Restaurants',
    needs:['Une carte lisible sur téléphone','Horaires et accès visibles tout de suite','Des photos qui donnent faim'],
    setup:['Réservation en ligne','Carte facile à mettre à jour','Lien vers la commande et la livraison','Fiche Google optimisée'],
    project:null },
  { id:'immo', label:'Immobilier',
    needs:['Mettre en valeur les biens','Rassurer les vendeurs','Capter des mandats'],
    setup:['Estimation en ligne','Fiches biens avec galerie','Prise de rendez-vous','Formulaire vendeur'],
    project:null },
  { id:'velo', query:'réparation vélo électrique Paris 19', label:'Vélos',
    needs:['Montrer le catalogue et les marques','Remplir l\'atelier','Être trouvé dans le quartier'],
    setup:['Prise de rendez-vous atelier','Catalogue ou boutique en ligne','Page location','Fiche Google et avis'],
    project:'velo' },
  { id:'asso', label:'Associations',
    needs:['Présenter le projet et l\'équipe','Recruter des adhérents et bénévoles','Annoncer les événements'],
    setup:['Adhésion et paiement en ligne','Planning des cours','Page actualités','Cours d\'essai'],
    project:'number1' },
  { id:'auto', label:'Auto et moto',
    needs:['Inspirer confiance avant de confier son véhicule','Présenter l\'atelier et le stock','Être trouvé dans la ville'],
    setup:['Demande de devis','Pages par prestation','Stock et occasions en avant','Fiche Google et avis'],
    project:'garage' },
  { id:'nettoyage', label:'Nettoyage',
    needs:['Montrer le sérieux et les références','Détailler les prestations','Indiquer la zone couverte'],
    setup:['Demande de devis rapide','Pages par prestation','Carte de la zone d\'intervention','Avis clients'],
    project:null },
  { id:'securite', label:'Sécurité',
    needs:['Afficher agréments et certifications','Présenter les services','Inspirer confiance aux entreprises'],
    setup:['Demande de devis','Pages surveillance, gardiennage, chantiers','Contact d\'urgence visible','Références clients'],
    project:null }
];

/* Réalisations : nom, secteur, ce qui a été fait, lien, contexte, statut.
   Pour de vraies captures : shots: ['capture1.webp','capture2.webp'] */
const PROJECTS = [
  { id:'garage', query:'carrossier Clichy', name:'Garage de Staël', sector:'Carrosserie et peinture', city:'Clichy', style:'garage',
    url:'https://garagedestael.fr/', host:'garagedestael.fr',
    headline:'Carrosserie et peinture automobile à Clichy', cta:'Demander un devis',
    done:'Site vitrine, prestations et devis',
    context:'Garage de carrosserie et de peinture installé à Clichy depuis 1963. Le site présente les prestations, de la réparation de carrosserie à la restauration de véhicules anciens, et l\'accompagnement des clients dans leurs démarches d\'assurance.',
    images:['assets/img/captures/garage-accueil.jpg','assets/img/captures/garage-galerie.jpg'] },
  { id:'scooters', query:'scooter MP3 occasion Clichy', name:'Action Scooters', sector:'Scooters neufs et d\'occasion', city:'Clichy', style:'scooter',
    url:'https://www.actionscooters.fr/', host:'actionscooters.fr',
    headline:'Le spécialiste des scooters MP3 d\'occasion', cta:'Voir les scooters',
    done:'Site vitrine, atelier et rachat',
    context:'Concession multi-marques ouverte à Clichy depuis 1997. Le site met en avant les scooters MP3 d\'occasion garantis, l\'atelier de réparation, les accessoires et le rachat de scooters, avec un lien vers la boutique en ligne.',
    images:['assets/img/captures/scooters-accueil.jpg','assets/img/captures/scooters-galerie.jpg'] },
  { id:'number1', query:'cours afro danse Clichy', name:'Number One', sector:'Association de danse', city:'Clichy', style:'dance',
    url:'https://number-1.org/', host:'number-1.org',
    headline:'Là où le rythme rencontre la passion', cta:'S\'inscrire',
    done:'Site avec adhésion et paiement en ligne',
    context:'Association de culture urbaine fondée en 2010 à Clichy. Le site présente les cours de hip-hop et d\'afro fusion par âge et par niveau, le cours d\'essai, et permet de s\'inscrire et de payer en ligne, en plusieurs fois si besoin.',
    images:['assets/img/captures/number1-accueil.jpg','assets/img/captures/number1-cours.jpg'] },
  { id:'velo', name:'Le Vélo sur la Piste', sector:'Magasin de vélos électriques', city:'Paris 19e', style:'velo',
    url:'https://levelosurlapiste.com/', host:'levelosurlapiste.com',
    headline:'Trouver votre vélo ou redonner vie à votre vélo', cta:'Nos services',
    done:'Site vitrine, atelier et accessoires',
    context:'Atelier de réparation et magasin de vélos neufs assemblés en France, Porte de Brunet. Le site présente l\'entretien des vélos classiques et électriques, la location, les pièces et les accessoires.',
    images:['assets/img/captures/velo-accueil.jpg','assets/img/captures/velo-gammes.jpg','assets/img/captures/velo-modeles.jpg'] },
  { id:'etdb', query:'taekwondo enfant Paris 15', name:'Dragon Bleu Paris', sector:'Association de taekwondo', city:'Paris 15e', style:'dojo',
    url:'https://etdbparis.fr/', host:'etdbparis.fr',
    headline:'Un art martial, un esprit, une vie.', cta:'Cours d\'essai',
    done:'Site vitrine et inscription en ligne',
    context:'École de taekwondo du 15e arrondissement, avec trois salles près de Pasteur, Volontaires, Cambronne et Convention. Le site détaille les cours dès 4 ans, le cours réservé aux femmes, les passages de grade et l\'inscription pour la saison.',
    images:['assets/img/captures/etdb-accueil.jpg','assets/img/captures/etdb-club.jpg'] }
];
/* Captures : déposez vos fichiers à côté du site et renseignez images, par exemple
   images:['assets/img/captures/garage-desktop.jpg','assets/img/captures/garage-mobile.jpg']
   La 1re image sert pour l'ordinateur et les cartes, la 2e dans la fenêtre plein écran.
   Capture mobile (écran du téléphone) : ajoutez mobile:'assets/img/captures/xxx-mobile.jpg' au projet. */

/* =========================================================
   OUTILS
   ========================================================= */
const $ = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const cursor = $('.cursor'), fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
const CHECK = '<svg class="check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 10.5l4 4 8-9"/></svg>';
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function shotHTML(p, label, k=0){
  const img = k === 'mobile' ? p.mobile : (p.images && (p.images[k] || p.images[0]));
  if (img) return `<img class="shot-img" src="${esc(img)}" alt="Capture du site ${esc(p.name)}, ${esc(label)}" loading="lazy">`;
  return `<div class="shot shot--${p.style}"><div class="s-nav"><span>${esc(p.name)}</span><i></i></div>
    <div class="s-hero"><b>${esc(p.headline)}</b><span class="s-btn">${esc(p.cta)}</span></div>
    <div class="s-row"><span></span><span></span><span></span></div>
    <span class="s-label">Capture : ${esc(label)} du site ${esc(p.name)}</span></div>`;
}
function browserHTML(p, label, k=0){
  return `<div class="browser"><div class="browser-bar"><i></i><i></i><i></i><span>${esc(p.host)}</span></div>${shotHTML(p,label,k)}</div>`;
}
/* ========== Hero : champ de points (vague, halo souris, onde au clic) ========== */
(function(){
  const hero = document.getElementById('hero'), title = document.getElementById('hero-title');
  /* découpe du titre en mots pour la révélation */
  (function wrapWords(node){
    [...node.childNodes].forEach(n=>{
      if (n.nodeType === 3){
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part=>{
          if (!part) return;
          if (/^\s+$/.test(part)) frag.append(part);
          else { const s=document.createElement('span'); s.className='w'; s.textContent=part; frag.append(s); }
        });
        n.replaceWith(frag);
      } else wrapWords(n);
    });
  })(title);
  title.querySelectorAll('.w').forEach((w,i)=>w.style.transitionDelay=(.15+i*.07)+'s');
  hero.querySelectorAll('.fade').forEach((el,i)=>el.style.transitionDelay=(.7+i*.12)+'s');
  if (matchMedia('(pointer:coarse)').matches) document.getElementById('hint-text').textContent = 'Touchez l\'écran';

  const c = document.getElementById('field'), ctx = c.getContext('2d');
  let W, H, dpr, mx = -999, my = -999, t0 = performance.now();
  const GAP = 24, ripples = [];
  function size(){ dpr = Math.min(devicePixelRatio||1, 2); W = hero.clientWidth; H = hero.clientHeight; c.width = W*dpr; c.height = H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
  size(); addEventListener('resize', size);
  hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
  hero.addEventListener('pointerleave', () => { mx = my = -999; });
  hero.addEventListener('pointerdown', e => {
    if (e.target.closest('a,button')) return;
    const r = hero.getBoundingClientRect(); ripples.push({x:e.clientX-r.left, y:e.clientY-r.top, t:performance.now()});
  });
  if (!reduce) setInterval(()=>{ if (!document.hidden) ripples.push({x:W*(.15+Math.random()*.7), y:H*(.15+Math.random()*.7), t:performance.now()}); }, 3600);
  let visible = true;
  if ('IntersectionObserver' in window) new IntersectionObserver(es=>{ visible = es[0].isIntersecting; if (visible && !reduce) requestAnimationFrame(draw); }).observe(hero);
  function draw(now){
    ctx.clearRect(0,0,W,H);
    while (ripples.length && now - ripples[0].t > 2800) ripples.shift();
    const time = (now - t0) / 1000;
    const wave = ((time * 260) % (W + 700)) - 350;
    for (let y = GAP/2; y < H; y += GAP){
      const bend = Math.sin(y * .011 + time * .6) * 90;
      for (let x = GAP/2; x < W; x += GAP){
        let k = Math.max(0, 1 - Math.abs(x - wave - bend) / 180) * .75;
        for (const r of ripples){
          const age = (now - r.t) / 1000, d = Math.hypot(x - r.x, y - r.y);
          k = Math.max(k, Math.max(0, 1 - Math.abs(d - age * 480) / 60) * Math.max(0, 1 - age / 2.8));
        }
        if (mx > -900) k = Math.max(k, Math.max(0, 1 - Math.hypot(x - mx, y - my) / 170) * .9);
        if (k > .04){
          const green = k > .85 && ((x * 7 + y * 3) % 13 < 1);
          ctx.fillStyle = green ? `rgba(34,176,125,${.5 + k * .5})` : `rgba(143,166,255,${.14 + k * .82})`;
        } else ctx.fillStyle = 'rgba(255,255,255,.075)';
        ctx.beginPath(); ctx.arc(x, y, 1.1 + k * 2.3, 0, 6.283); ctx.fill();
      }
    }
    if (!reduce && visible) requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

/* ========== Bandeau ========== */
(function(){
  const star = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M10 2v16M2 10h16M4.3 4.3l11.4 11.4M15.7 4.3 4.3 15.7"/></svg>';
  const items = CLIENTS.map(c => `<span class="marquee-item">${star}${esc(c)}</span>`).join('');
  $('#marquee').innerHTML = items + items.replace(/class="marquee-item"/g,'class="marquee-item" aria-hidden="true"');
})();

/* ========== Secteurs (onglets) ========== */
(function(){
  const list = $('#tablist'), panel = $('#sector-panel');
  list.innerHTML = SECTORS.map((s,i)=>`<button class="tab" role="tab" id="tab-${s.id}" aria-controls="sector-panel" aria-selected="${i===0}" tabindex="${i===0?0:-1}">${s.label}</button>`).join('');
  function render(s){
    const p = PROJECTS.find(x => x.id === s.project);
    const work = p
      ? `<span class="eyebrow">Réalisation liée</span><h3>${esc(p.name)}</h3><p>${esc(p.done)}</p><button class="btn magnetic" data-open="${p.id}" data-cursor="voir">Voir le projet</button>`
      : `<span class="eyebrow">Votre projet</span><h3>Le premier de votre secteur ici ?</h3><p>Je prépare une maquette adaptée à votre activité avant tout engagement.</p><a class="btn magnetic" href="#contact">Demander une maquette</a>`;
    panel.setAttribute('aria-labelledby','tab-'+s.id);
    panel.innerHTML = `
      <div class="panel-col"><span class="eyebrow">Ce dont vous avez besoin</span><ul>${s.needs.map(n=>`<li>${CHECK}${esc(n)}</li>`).join('')}</ul></div>
      <div class="panel-col"><span class="eyebrow">Ce que je mets en place</span><ul>${s.setup.map(n=>`<li>${CHECK}${esc(n)}</li>`).join('')}</ul></div>
      <div class="panel-col panel-col--work">${work}</div>`;
    bindDynamic(panel);
  }
  function select(btn){
    const idx = $$('.tab',list).indexOf(btn);
    $$('.tab',list).forEach(t=>{const on=t===btn;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;});
    if (hasGsap && !reduce){
      gsap.to(panel.children,{opacity:0,y:10,duration:.2,stagger:.03,ease:'power2.in',onComplete:()=>{
        render(SECTORS[idx]);
        gsap.from(panel.children,{opacity:0,y:16,duration:.5,stagger:.07,ease:'power3.out'});
      }});
    } else render(SECTORS[idx]);
  }
  list.addEventListener('click',e=>{const b=e.target.closest('.tab'); if(b && b.getAttribute('aria-selected')!=='true') select(b);});
  list.addEventListener('keydown',e=>{
    const tabs=$$('.tab',list), i=tabs.indexOf(document.activeElement);
    if(i<0) return;
    let n=null;
    if(e.key==='ArrowRight') n=(i+1)%tabs.length;
    if(e.key==='ArrowLeft') n=(i-1+tabs.length)%tabs.length;
    if(e.key==='Home') n=0; if(e.key==='End') n=tabs.length-1;
    if(n!==null){e.preventDefault();tabs[n].focus();select(tabs[n]);}
  });
  render(SECTORS[0]);
})();

/* ========== Réalisations ========== */
(function(){
  const track = $('#work-track');
  track.innerHTML = PROJECTS.map(p=>`
    <div class="project" role="button" tabindex="0" data-open="${p.id}" data-cursor="voir" aria-label="Voir le projet ${esc(p.name)}">
      ${browserHTML(p,'page d\'accueil')}
      <span class="project-meta"><span><h3>${esc(p.name)}</h3><p>${esc(p.sector)}, ${esc(p.city)}</p></span>
      <span class="badge"><span class="dot"></span>En ligne</span></span>
    </div>`).join('') + `
    <a class="project project--cta" href="#contact" data-cursor="hover">
      <span class="browser"><span class="cta-inner"><span class="tag" style="background:transparent;color:var(--navy-soft);border-color:rgba(255,255,255,.2)"><span class="dot"></span>Votre projet</span><b>Votre site pourrait être le prochain.</b><span class="btn btn-primary">Demander un devis</span></span></span>
      <span class="project-meta"><span><h3>Et vous ?</h3><p>Devis gratuit, sans engagement</p></span></span>
    </a>`;
})();

/* ========== Fenêtre projet ========== */
const modal = $('#modal');
function openProject(id){
  const p = PROJECTS.find(x=>x.id===id); if(!p) return;
  $('#modal-shots').innerHTML = (p.images && p.images.length ? p.images : [null]).map((_,k)=>browserHTML(p, k===0?'page d\'accueil':'page intérieure', k)).join('');
  $('#modal-sector').innerHTML = '<span class="dot"></span>'+esc(p.sector);
  $('#modal-title').textContent = p.name;
  $('#modal-context').textContent = p.context;
  $('#modal-dl').innerHTML = `<dt>Ville</dt><dd>${esc(p.city)}</dd><dt>Réalisé</dt><dd>${esc(p.done)}</dd><dt>Adresse</dt><dd>${esc(p.host)}</dd>`;
  const link = $('#modal-link');
  if (p.url.startsWith('http')) { link.href = p.url; link.hidden = false; } else { link.hidden = true; }
  if (window.lenis) lenis.stop();
  modal.showModal();
  if (hasGsap && !reduce) gsap.from('.modal-inner > *',{opacity:0,y:24,duration:.6,stagger:.08,ease:'power3.out'});
}
modal.addEventListener('close',()=>{ if(window.lenis) lenis.start(); });
$('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{ if(e.target===modal) modal.close(); });

function bindDynamic(root){
  $$('[data-open]',root).forEach(el=>el.addEventListener('click',()=>openProject(el.dataset.open)));
  bindCursorTargets(root); bindMagnetic(root);
}

/* ========== FAQ ========== */
$$('.faq-q').forEach(q=>q.addEventListener('click',()=>{
  const open = q.getAttribute('aria-expanded')==='true';
  $$('.faq-q').forEach(o=>o.setAttribute('aria-expanded','false'));
  q.setAttribute('aria-expanded', String(!open));
}));

/* ========== Formulaire en 3 étapes ========== */
(function(){
  const form=$('#quote-form'), steps=$$('fieldset',form), names=['Type de projet','Secteur et budget','Coordonnées'];
  const next=$('#next'), prev=$('#prev'), err=$('#form-error');
  let cur=0;
  function show(i){
    steps.forEach((s,k)=>s.hidden=k!==i);
    $('#step-label').textContent=`Étape ${i+1} sur 3`;
    $('#step-name').textContent=names[i];
    $('#progress-fill').style.width=((i+1)/3*100)+'%';
    prev.hidden=i===0;
    next.firstChild.textContent = i===2 ? 'Envoyer ma demande ' : 'Continuer ';
    err.textContent='';
    if(hasGsap && !reduce) gsap.from(steps[i],{opacity:0,x:24,duration:.45,ease:'power3.out'});
  }
  function valid(i){
    const s=steps[i];
    for(const name of new Set($$('input[type=radio][required]',s).map(r=>r.name))){
      if(!$(`input[name="${name}"]:checked`,s)){ err.textContent='Choisissez une option pour continuer.'; return false; }
    }
    for(const el of $$('select[required],input[required]:not([type=radio])',s)){
      if(el.type==='checkbox' && !el.checked){ err.textContent='Merci de cocher la case de consentement.'; el.focus(); return false; }
      if(el.type!=='checkbox' && !el.checkValidity()){ err.textContent = el.type==='email' ? 'Vérifiez votre adresse e-mail.' : 'Merci de remplir les champs obligatoires.'; el.focus(); return false; }
    }
    return true;
  }
  next.addEventListener('click',()=>{
    if(!valid(cur)) return;
    if(cur<2){cur++;show(cur);return;}
    form.requestSubmit();
  });
  prev.addEventListener('click',()=>{cur--;show(cur);});
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!valid(2)) return;
    /* À brancher : envoi vers votre outil (WordPress, Formspree, e-mail…) */
    steps.forEach(s=>s.hidden=true);
    $('#form-nav').hidden=true; err.textContent='';
    $('#progress-fill').style.width='100%';
    $('#step-label').textContent='Terminé'; $('#step-name').textContent='';
    $('#form-success').hidden=false;
  });
})();

/* ========== Header, menu mobile, horloge ========== */
const header=$('.site-header');
const onScroll=()=>header.classList.toggle('scrolled', window.scrollY>40);
addEventListener('scroll',onScroll,{passive:true}); onScroll();

const burger=$('.burger'), menu=$('#mobile-menu');
function setMenu(open){
  burger.setAttribute('aria-expanded',open); burger.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
  menu.classList.toggle('open',open);
  if(window.lenis) open?lenis.stop():lenis.start();
}
burger.addEventListener('click',()=>setMenu(burger.getAttribute('aria-expanded')!=='true'));
$$('a',menu).forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{ if(e.key==='Escape' && menu.classList.contains('open')) setMenu(false); });

(function tick(){
  try{ $('#clock').textContent=new Intl.DateTimeFormat('fr-FR',{hour:'2-digit',minute:'2-digit',timeZone:'Europe/Paris'}).format(new Date()); }catch(e){}
  $('#year').textContent=new Date().getFullYear();
  setTimeout(tick,30000);
})();

/* ========== Curseur personnalisé ========== */
function bindCursorTargets(root=document){
  if(!fine) return;
  $$('a,button,[data-cursor],input,select,textarea,label',root).forEach(el=>{
    if(el.dataset.cb) return; el.dataset.cb='1';
    el.addEventListener('mouseenter',()=>cursor.classList.add(el.closest('[data-cursor="voir"]')?'view':'hover'));
    el.addEventListener('mouseleave',()=>cursor.classList.remove('view','hover'));
  });
}
if(fine && !reduce){
  let x=innerWidth/2,y=innerHeight/2,cx=x,cy=y;
  addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;cursor.classList.add('on');});
  document.addEventListener('mouseleave',()=>cursor.classList.remove('on'));
  (function loop(){cx+=(x-cx)*.22;cy+=(y-cy)*.22;cursor.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(loop);})();
  bindCursorTargets();
}

/* ========== Boutons magnétiques ========== */
function bindMagnetic(root=document){
  if(!fine || reduce) return;
  $$('.magnetic',root).forEach(el=>{
    if(el.dataset.mg) return; el.dataset.mg='1';
    el.addEventListener('mousemove',e=>{
      const r=el.getBoundingClientRect();
      const dx=(e.clientX-r.left-r.width/2)*.22, dy=(e.clientY-r.top-r.height/2)*.3;
      el.style.transform=`translate(${dx}px,${dy}px)`;
    });
    el.addEventListener('mouseleave',()=>{el.style.transition='transform .5s cubic-bezier(.22,1,.36,1)';el.style.transform='';setTimeout(()=>el.style.transition='',500);});
  });
}
bindMagnetic();
$$('[data-open]').forEach(el=>{
  el.addEventListener('click',()=>openProject(el.dataset.open));
  if(el.getAttribute('role')==='button') el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();openProject(el.dataset.open);} });
});

/* ========== Défilement doux + liens d'ancre ========== */
if(!reduce && typeof window.Lenis!=='undefined'){
  window.lenis=new Lenis({duration:1.1,smoothWheel:true});
  if(hasGsap){ lenis.on('scroll',ScrollTrigger.update); gsap.ticker.add(t=>lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0); }
  else { (function raf(t){lenis.raf(t);requestAnimationFrame(raf);})(performance.now()); }
}
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="#"]'); if(!a) return;
  const id=a.getAttribute('href'); if(id.length<2) { if(id==='#'){e.preventDefault();} return; }
  const t=document.querySelector(id); if(!t) return;
  e.preventDefault();
  if(window.lenis) lenis.scrollTo(t,{offset:id==='#top'?0:-90}); else t.scrollIntoView({behavior:reduce?'auto':'smooth'});
});

/* =========================================================
   ANIMATIONS GSAP
   ========================================================= */
function heroIn(){
  /* révélation du titre, du texte et des boutons (CSS) */
  document.getElementById('hero-title').classList.add('in');
  document.querySelectorAll('#hero .fade').forEach(el=>el.classList.add('in'));
}

if(hasGsap && !reduce){
  gsap.registerPlugin(ScrollTrigger);

  /* Intro : lettre par lettre, 1,2 s maximum */
  if(document.documentElement.classList.contains('js-intro')){
    try{ sessionStorage.setItem('ytr-intro','1'); }catch(e){}
    const tl=gsap.timeline({onComplete:()=>{document.documentElement.classList.remove('js-intro');ScrollTrigger.refresh();}});
    tl.from('#intro .word span',{yPercent:110,duration:.5,stagger:.035,ease:'power3.out'})
      .to('#intro .word',{opacity:0,y:-20,duration:.25,ease:'power2.in'},'+=.1')
      .to('#intro',{yPercent:-100,duration:.45,ease:'power3.inOut'},'-=.05')
      .add(heroIn,'-=.35');
  } else heroIn();

  /* Apparitions au scroll, en cascade */
  gsap.set('[data-reveal]',{opacity:0,y:32});
  ScrollTrigger.batch('[data-reveal]',{
    start:'top 90%', once:true,
    onEnter:els=>gsap.fromTo(els,{opacity:0,y:32},{opacity:1,y:0,duration:.9,stagger:.09,ease:'power3.out',overwrite:true})
  });
  /* Les éléments déjà visibles au chargement apparaissent tout de suite */
  ScrollTrigger.refresh();

  /* Lignes bleues qui se dessinent (frise et méthode) */
  ['#method-steps'].forEach(sel=>{
    gsap.fromTo(sel+' .draw-line',{scaleY:0},{scaleY:1,ease:'none',scrollTrigger:{trigger:sel,start:'top 75%',end:'bottom 60%',scrub:true}});
  });

  /* Réalisations : défilement horizontal épinglé sur desktop */
  const mm=gsap.matchMedia();
  mm.add('(min-width: 900px)',()=>{
    const sec=$('#realisations'), track=$('#work-track'), vp=$('.work-viewport');
    sec.classList.add('is-pinned');
    const dist=()=>Math.max(0, track.scrollWidth + parseFloat(getComputedStyle(vp).paddingLeft) - innerWidth + 40);
    const tw=gsap.to(track,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:sec,start:'top top',end:()=>'+='+dist(),pin:true,scrub:.8,invalidateOnRefresh:true}});
    return ()=>{ sec.classList.remove('is-pinned'); tw.scrollTrigger && tw.scrollTrigger.kill(); gsap.set(track,{x:0}); };
  });

  /* Grand logotype du pied de page */
  gsap.from('.wordmark',{yPercent:30,opacity:0,duration:1.2,ease:'power3.out',scrollTrigger:{trigger:'.wordmark',start:'top 95%'}});

  addEventListener('load',()=>ScrollTrigger.refresh());
} else {
  document.documentElement.classList.remove('js-intro');
  heroIn();
}
