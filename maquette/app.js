// Maquette vibeZZ : écrans statiques + navigation simple (pas l'appli réelle).
(function () {
  const P = new URLSearchParams(location.search);
  const S = {
    theme: P.get("t") || localStorage.getItem("vz-maq-theme") || "light",
    screen: P.get("s") || "accueil",
    favs: new Set(["undercover", "loup-garou", "action-verite", "dessine"]),
    tone: "classique", mood: "baisse", openRules: "freeze", toast: null,
  };
  const shot = P.has("shot");
  document.body.className = shot ? "shot" : "framed";

  const I = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    games: '<rect x="2" y="6" width="20" height="12" rx="6"/><path d="M6.5 12h4M8.5 10v4"/><circle cx="15.5" cy="10.8" r="1.1" fill="currentColor"/><circle cx="17.8" cy="13.4" r="1.1" fill="currentColor"/>',
    mic: '<rect x="9" y="2.5" width="6" height="11.5" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
    heart: '<path d="M12 20.5s-8-5-8-11a4.6 4.6 0 0 1 8-3.1 4.6 4.6 0 0 1 8 3.1c0 6-8 11-8 11z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
    sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', minus: '<path d="M5 12h14"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    play: '<path d="M7 4.8v14.4c0 .8.9 1.3 1.6.8l11-7.2a1 1 0 0 0 0-1.6l-11-7.2C7.9 3.5 7 4 7 4.8z" fill="currentColor" stroke="none"/>',
    pause: '<rect x="6" y="5" width="4" height="14" rx="1.2" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1.2" fill="currentColor" stroke="none"/>',
    left: '<path d="m15 18-6-6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>', down: '<path d="m6 9 6 6 6-6"/>',
    prev: '<path d="M18 6v12L9 12z" fill="currentColor" stroke="none"/><path d="M6 6v12"/>', next: '<path d="M6 6v12l9-6z" fill="currentColor" stroke="none"/><path d="M18 6v12"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6 6 0 0 1 3.5 5.8"/>',
    bag: '<path d="M5 8h14l-1.2 12H6.2z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    crown: '<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z" fill="currentColor" stroke-linejoin="round"/>',
    copy: '<rect x="8" y="8" width="13" height="13" rx="3"/><path d="M16 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20.5 13.2A8.5 8.5 0 1 1 10.8 3.5a6.6 6.6 0 0 0 9.7 9.7z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>',
    more: '<circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5M12 8h.01"/>',
    pencil: '<path d="M16.5 3.5a2.6 2.6 0 0 1 3.7 3.7L7.5 19.9 3 21l1.1-4.5z"/>',
    up: '<path d="M12 19V5M5.5 11.5 12 5l6.5 6.5"/>', dn: '<path d="M12 5v14M5.5 12.5 12 19l6.5-6.5"/>',
    refresh: '<path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1L20.5 8.5"/><path d="M20.5 3.5v5h-5"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    cal: '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    party: '<path d="M4 20l5-14 9 9z"/><path d="M14 4v2M19 9h2M17 6l1.5-1.5"/>',
    tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.4" fill="currentColor"/>',
    wand: '<path d="M4 20 15 9M14 4v3M19 9h-3M18 5.5l-2 2M17.5 13.5v2M12 4.5h-2"/>',
    restart: '<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5"/><path d="M3.5 3.5v5h5"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
    snow: '<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/>', trend_dn: '<path d="M3 7l7 7 4-4 7 7M21 12v5h-5"/>', flat: '<path d="M3 12h18M17 8l4 4-4 4"/>', fire: '<path d="M12 21.5c4 0 7-2.8 7-6.8 0-3.6-2.6-5.6-3.8-8.7-1 1.8-2 2.8-3.7 2.9.2-2.4-.3-4.6-2.5-6.4-.6 4.2-6 6.9-6 12.2 0 4 3 6.8 9 6.8z"/>',
  };
  const ic = (n, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extra}>${I[n]}</svg>`;
  const G = Object.fromEntries(window.GAMES.map((g) => [g.id, g]));
  const EVENT_LABEL = { soiree: "Soirée", piquenique: "Pique-nique", rencontre: "Rencontre entre jeunes", pyjama: "Pyjama", anniversaire: "Anniversaire" };
  const forEvent = (k) => window.GAMES.filter((g) => g.events.includes(k) || ((k === "pyjama" || k === "anniversaire") && g.events.includes("soiree")));
  const nSoiree = forEvent("soiree").length;

  const KIND = { accueil: ["Accueil", "#0FA898", "rgba(24,200,181,.14)"], jeu: ["Jeu", "#C20F97", "rgba(255,43,214,.13)"], musique: ["Musique", "#6A2FE0", "rgba(123,47,247,.13)"], repas: ["Repas", "#D9661A", "rgba(255,138,61,.15)"], discours: ["Paroles", "#2F5FE0", "rgba(77,124,255,.14)"], danse: ["Piste", "#E0335C", "rgba(255,94,126,.15)"], gateau: ["Moment fort", "#B07800", "rgba(255,201,60,.2)"] };
  const kindTag = (k) => { const [l, c, b] = KIND[k]; return `<span class="kind" style="color:${S.theme === "dark" ? "#fff" : c};background:${b}"><i style="background:${c}"></i>${l}</span>`; };
  const PLAN = [
    { t: "Accueil", k: "accueil", m: 15, at: "20:00" }, { t: "Ouverture", k: "musique", m: 20, at: "20:15" },
    { t: "Gauche ou droite ?", k: "jeu", m: 20, at: "20:35", g: "gauche-ou-droite" }, { t: "Undercover", k: "jeu", m: 15, at: "20:55", g: "undercover" },
    { t: "Repas", k: "repas", m: 40, at: "21:10" }, { t: "Tu ris, tu perds", k: "jeu", m: 15, at: "21:50", g: "tu-ris-tu-perds" },
    { t: "Dancefloor", k: "danse", m: 70, at: "22:05" }, { t: "Moment fort", k: "gateau", m: 15, at: "23:15" },
  ];
  const CUR = 3;

  const status = (onDark) => `<div class="status ${onDark ? "on-dark" : ""}"><span>20:41</span><span class="icons">
    <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>
    <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor"><path d="M8 2.5c2.3 0 4.4.9 6 2.4l1.3-1.4A10.4 10.4 0 0 0 8 .6 10.4 10.4 0 0 0 .7 3.5L2 4.9a8.5 8.5 0 0 1 6-2.4zm0 3.8c1.3 0 2.5.5 3.4 1.3l1.3-1.4A6.8 6.8 0 0 0 8 4.4c-1.8 0-3.4.7-4.7 1.8l1.3 1.4C5.5 6.8 6.7 6.3 8 6.3zm0 3.7 2-2.1a3 3 0 0 0-4 0z"/></svg>
    <svg width="27" height="13" viewBox="0 0 27 13"><rect x=".5" y=".5" width="23" height="12" rx="3.5" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="16" height="9" rx="2" fill="currentColor"/><rect x="24.5" y="4.5" width="1.8" height="4" rx=".9" fill="currentColor" opacity=".4"/></svg></span></div>`;

  const logo = () => `<img class="logo logo-l" src="logo-light.png" alt="vibeZZ"><img class="logo logo-d" src="logo-dark.png" alt="vibeZZ">`;
  const topbar = () => `<div class="topbar">${logo()}<div class="tb-actions">
    <button class="icon-btn press" data-act="theme" aria-label="Thème">${ic(S.theme === "dark" ? "sun" : "moon")}</button>
    <button class="pass-pill press" data-act="go:pass">${ic("crown")}PASS</button>
    <button class="icon-btn press" data-act="go:reglages" aria-label="Réglages">${ic("gear")}</button></div></div>`;
  const tabs = (on) => `<nav class="tabbar">${[["accueil", "home", "Accueil"], ["jeux", "games", "Jeux"], ["ceremonie", "mic", "Cérémonie"], ["musique", "music", "Musique"], ["ambiance", "spark", "Ambiance"]].map(([id, i, l]) => `<button class="tab ${on === id ? "on" : ""}" data-act="go:${id}">${ic(i, on === id ? 'stroke-width="2.4"' : "")}${l}</button>`).join("")}</nav>`;
  const mini = () => `<button class="mini press" data-act="go:musique"><span class="disc">${coverFor({ id: "devine-chanson" })}</span><span class="t"><span>Son en cours</span><b>Présent, mais discret</b></span><span class="eq"><i></i><i></i><i></i><i></i></span></button>`;

  const gcard = (g) => `<div class="gcard press" data-act="game:${g.id}"><div class="img">${coverFor(g)}
    ${g.premium ? `<span class="badge-pass">${ic("crown")}PASS</span>` : ""}
    <button class="heart ${S.favs.has(g.id) ? "on" : ""}" data-act="fav:${g.id}" aria-label="Favori">${ic("heart")}</button></div>
    <h4>${g.name}</h4><div class="gm"><span>${ic("users")}${g.players.replace(", en 2 équipes", "")}</span><span>${ic("clock")}${g.dur} min</span></div></div>`;

  // ---------- écrans ----------
  function accueil() {
    const cur = PLAN[CUR];
    return `<div class="view">${topbar()}
      <div class="eyebrow">Ce soir</div>
      <h1 class="large-title">Soirée entre nous</h1>
      <div class="meta-row"><button class="chip press" data-act="sheet:format"><span class="dot"></span>Soirée${ic("down")}</button><span class="chip">${ic("clock")}20:00 → 23:30</span></div>
      <section class="hero">
        <div class="hero-top"><span class="live"><i></i>MAINTENANT · ${CUR + 1}/${PLAN.length}</span><span class="glass-tag">9 min restantes</span></div>
        <div class="hero-main"><span class="thumb">${coverFor(G[cur.g])}</span><div><h3>${cur.t}</h3><div class="sub">Jeu · ${cur.m} min · 4–12 joueurs</div></div></div>
        <div class="progress"><i></i></div>
        <div class="hero-actions"><button class="btn-ghost-w press" aria-label="Précédent">${ic("prev")}</button><button class="btn btn-white" data-act="game:undercover">${ic("play")}Jouer</button><button class="btn-ghost-w press" aria-label="Pause">${ic("pause")}</button><button class="btn-ghost-w press" aria-label="Suivant">${ic("next")}</button></div>
      </section>
      <div class="card suggest"><span class="ic">${ic("wand")}</span><p><b>VIBEZZ PROPOSE</b>Ensuite : Repas à 21:10. Baisse le son pour qu'on s'entende.</p>${ic("right", 'style="width:20px;height:20px;color:var(--text3)"')}</div>
      <div class="sec"><h2 class="h2">Tes favoris</h2><button class="link" data-act="go:jeux">Tout voir${ic("right")}</button></div>
      <div class="hscroll">${["undercover", "loup-garou", "action-verite", "dessine"].map((id) => gcard(G[id])).join("")}</div>
      <div class="sec" style="margin-top:14px"><h2 class="h2">Le déroulé</h2><button class="link" data-act="go:ceremonie">Modifier${ic("right")}</button></div>
      <div class="timeline-h">${PLAN.map((p, i) => `<div class="mom ${i === CUR ? "cur" : i < CUR ? "done" : ""}"><time>${p.at}</time><b>${p.t}</b>${i === CUR ? '<span class="kind" style="background:rgba(255,43,214,.2);color:inherit"><i style="background:#FF2BD6"></i>En cours</span>' : kindTag(p.k)}</div>`).join("")}</div>
      <div class="card energy" style="margin-top:14px"><div class="energy-top"><div><div class="eyebrow" style="color:var(--text3)">Énergie de la salle</div><div class="val">48 %</div></div><button class="pill-btn solid press" data-act="go:ambiance">${ic("refresh")}Relancer</button></div>
        <div class="gauge"><i style="width:48%"></i></div><div class="small muted" style="font-weight:600">Ça baisse un peu. Un jeu qui bouge relancerait la salle.</div></div>
      <div class="promo"><span class="crown">${ic("crown")}</span><p><b>Pass Soirée · 1 500 FCFA</b>Les 40 jeux pendant 24 h. S'arrête tout seul.</p><button class="pill-btn press" style="background:#fff;color:#2A1580" data-act="go:pass">Voir</button></div>
    </div>${mini()}${tabs("accueil")}`;
  }

  function jeux() {
    const order = ["undercover", "action-verite", "loup-garou", "times-up", "tu-ris-tu-perds", "tueur", "mime-chaine", "dessine", "chaises-musicales", "deviner-photo", "susceptible", "jamais"];
    const list = order.map((id) => G[id]).concat(forEvent("soiree").filter((g) => !order.includes(g.id)));
    return `<div class="view">${topbar()}
      <div class="title-row"><h1 class="large-title">Jeux</h1><button class="pill-btn press" data-act="sheet:create">${ic("plus")}Jeu maison</button></div>
      <div class="search">${ic("search")}<span>Chercher un jeu</span><button class="flt press" data-act="sheet:filters" aria-label="Filtres">${ic("sliders")}<i></i></button></div>
      <div class="seg"><button class="on">${ic("party", 'style="width:17px;height:17px"')}Pour ma soirée <span class="n">${nSoiree}</span></button><button>Tous les jeux <span class="n">${window.GAMES.length}</span></button></div>
      <div class="chips"><button class="chip fav-on press">${ic("heart")}Favoris · ${S.favs.size}</button><button class="chip on">Tout</button>${["Fou rire", "Groupe", "Deviner", "Défis", "Musique", "Mime", "Adresse"].map((c) => `<button class="chip press">${c}</button>`).join("")}</div>
      <div class="grid">${list.map(gcard).join("")}</div>
    </div>${tabs("jeux")}`;
  }

  function fiche(id = "undercover") {
    const g = G[id];
    return `<div class="scrim" data-act="close"></div><div class="sheet"><span class="grabber"></span><div class="sbody">
      <div class="cover-xl">${coverFor(g)}<div class="cover-btns"><button class="glass-btn press" data-act="close" aria-label="Fermer">${ic("x")}</button><button class="glass-btn press ${S.favs.has(g.id) ? "on" : ""}" data-act="fav:${g.id}" aria-label="Favori">${ic("heart")}</button></div></div>
      <div class="tags" style="margin-top:-6px;position:relative;z-index:2">${g.premium ? `<span class="tag acc">${ic("crown")}Pass</span>` : `<span class="tag free">${ic("check")}Gratuit</span>`}<span class="tag">${g.cat}</span></div>
      <h2 style="font-size:30px;font-weight:800;letter-spacing:-.02em;margin:10px 0 6px">${g.name}</h2>
      <p class="subtitle">${g.blurb}</p>
      <div class="stats"><div class="stat">${ic("users")}<b>${g.players.replace(", en 2 équipes", "")}</b><span>joueurs</span></div><div class="stat">${ic("clock")}<b>${g.dur} min</b><span>durée</span></div><div class="stat">${ic("bag")}<b>1 tél.</b><span>matériel</span></div><div class="stat">${ic("bolt")}<div class="edots">${[1, 2, 3].map((n) => `<i class="${n <= g.energy ? "on" : ""}"></i>`).join("")}</div><span>énergie</span></div></div>
      <div class="sec" style="margin-top:20px"><h3 class="h2" style="font-size:19px">Pour quels formats</h3></div>
      <div class="tags">${g.events.map((e) => `<span class="tag">${EVENT_LABEL[e]}</span>`).join("")}<span class="tag">Pyjama</span><span class="tag">Anniversaire</span></div>
      <div class="sec" style="margin-top:22px"><h3 class="h2" style="font-size:19px">Comment jouer</h3><span class="small muted" style="font-weight:700">${g.rules.length} étapes</span></div>
      <ol class="rules">${g.rules.slice(0, 4).map((r) => `<li>${r}</li>`).join("")}</ol>
      <button class="link" style="margin-top:12px">Voir les ${g.rules.length} étapes${ic("down")}</button>
    </div><div class="sticky-cta"><button class="btn btn-soft press">${ic("plus")}À la soirée</button><button class="btn btn-primary press">${ic("play")}Jouer</button></div></div>`;
  }

  function ceremonie(menu) {
    return `<div class="view">${topbar()}
      <div class="eyebrow">Maître de cérémonie</div><h1 class="large-title">Cérémonie</h1>
      <p class="subtitle">Le déroulé t'appartient : déplace, allonge, coupe.</p>
      <div class="card sum"><div><b>20:00</b><span>Début</span></div><div><b>23:30</b><span>Fin</span></div><div><b>${PLAN.length}</b><span>Moments</span></div><div><b>3 h 30</b><span>Durée</span></div></div>
      <div class="row-btns"><button class="btn btn-primary press" style="flex:1.4">${ic("plus")}Ajouter</button><button class="btn btn-soft press" style="flex:1">${ic("copy")}WhatsApp</button></div>
      <div class="tl">${PLAN.slice(2, 7).map((p, j) => { const i = j + 2; const cur = i === CUR; return `<div class="tl-item ${cur ? "cur" : i < CUR ? "done" : ""}"><time>${p.at}</time><div class="card tl-card">
        <div class="r1">${cur ? '<span class="now-pill">EN COURS</span>' : kindTag(p.k)}<span style="flex:1"></span>${cur ? `<button class="pill-btn solid press">${ic("play")}Lancer</button>` : ""}<button class="more press" data-act="sheet:moment" aria-label="Plus">${ic("more")}</button></div>
        <h4>${p.t}</h4><div class="d">${p.m} min${p.g ? " · " + G[p.g].cat : ""}</div>
        ${cur ? `<div class="edit-row"><button class="mini-btn press" aria-label="Monter">${ic("up")}</button><button class="mini-btn press" aria-label="Descendre">${ic("dn")}</button><div class="stepper"><button>${ic("minus")}</button><b>15 min</b><button>${ic("plus")}</button></div></div>` : ""}
      </div></div>`; }).join("")}</div>
      <button class="link" style="margin-left:60px">Changer l'heure de début${ic("right")}</button>
    </div>${tabs("ceremonie")}${menu ? momentMenu() : ""}`;
  }
  const momentMenu = () => `<div class="scrim" data-act="close"></div><div class="action-sheet"><div class="as-group"><div class="as-title">Repas · 21:10 · 40 min</div>
    <button class="as-item">${ic("target")}Passer ici maintenant</button><button class="as-item">${ic("up")}Monter</button><button class="as-item">${ic("dn")}Descendre</button><button class="as-item">${ic("clock")}Durée : −5 / +5 min</button><button class="as-item red">${ic("trash")}Retirer du déroulé</button></div>
    <button class="as-cancel" data-act="close">Annuler</button></div>`;

  function musique() {
    const cues = [["Ouvrir la piste", "Piste · Coupé-décalé, afrobeat, amapiano", "chaises-musicales"], ["Sous la conversation", "Repas · Instrumental, zouk calme", "anecdote"], ["Couper le beat", "Paroles · Piano ou silence", "silence"], ["Redescendre", "Fin · Slows, rumba, tempo lent", "pyjama"], ["On peut encore parler", "Accueil · Rumba douce, afro chill", "deux-verites"]];
    return `<div class="view">${topbar()}
      <h1 class="large-title">Musique</h1><p class="subtitle">vibeZZ ne lance pas les morceaux : il te dit quoi passer, au bon moment.</p>
      <section class="np"><div class="np-top"><span class="vin">${coverFor({ id: "devine-chanson" })}</span><div><div class="lbl">MAINTENANT · JEU</div><h3>Présent, mais discret</h3></div></div>
        <p>Assez de rythme pour tenir l'énergie, assez bas pour entendre la règle.</p>
        <div class="search-tip">${ic("search")}Tempo moyen, sans paroles trop présentes</div>
        <button class="btn btn-white" style="width:100%">${ic("check")}C'est ce qui passe</button></section>
      <div class="sec"><h2 class="h2">Chaque moment, son ambiance</h2></div>
      ${cues.map(([t, d, a], i) => `<div class="card cue"><span class="sq">${a === "pyjama" ? eventArt("pyjama") : coverFor({ id: a })}</span><div class="t"><b>${t}</b><span class="ell">${d}</span></div><button class="pill-btn press">Mettre ça</button></div>`).join("")}
      <div class="card soon"><span class="sq">${coverFor({ id: "devine-chanson" })}</span><p><b>Bientôt</b>Tes playlists et la lecture directe depuis vibeZZ.</p></div>
    </div>${tabs("musique")}`;
  }

  function ambiance() {
    const moods = [["casse", "Ça casse", "Plus personne ne suit", "snow", "linear-gradient(135deg,#4D7CFF,#18C8B5)"], ["baisse", "Ça baisse", "Ça décroche un peu", "trend_dn", "linear-gradient(135deg,#7B2FF7,#4D7CFF)"], ["tient", "Ça tient", "Ambiance correcte", "flat", "linear-gradient(135deg,#FFC93C,#FF8A3D)"], ["monte", "Ça monte", "La salle est chaude", "fire", "linear-gradient(135deg,#FF5E7E,#FF2BD6)"]];
    const props = ["freeze", "chaises-musicales", "tu-ris-tu-perds"];
    return `<div class="view">${topbar()}
      <h1 class="large-title">Ambiance</h1><p class="subtitle">Dis comment est la salle, vibeZZ te propose de quoi la relancer.</p>
      <div class="sec"><h2 class="h2">Comment est la salle ?</h2></div>
      <div class="moods">${moods.map(([id, l, d, i, bg]) => `<button class="mood ${S.mood === id ? "on" : ""}" data-act="mood:${id}"><span class="mi" style="background:${bg}">${ic(i)}</span><b>${l}</b><span>${d}</span>${S.mood === id ? `<span class="ck">${ic("check", 'stroke-width="3"')}</span>` : ""}</button>`).join("")}</div>
      <div class="sec"><h2 class="h2">Lance un de ces jeux</h2><span class="small muted" style="font-weight:700">Énergie 35 %</span></div>
      ${props.map((id) => { const g = G[id]; const open = S.openRules === id; return `<div class="card prop"><div class="r"><span class="sq">${coverFor(g)}</span><div class="t"><b>${g.name}</b><span class="ell">${g.dur} min · ${g.cat}</span></div><button class="info-btn ${open ? "on" : ""}" data-act="rules:${id}" aria-label="Règles">${ic("info")}</button><button class="pill-btn solid press">${ic(g.premium ? "crown" : "play")}Jouer</button></div>${open ? `<ul class="rules-box">${g.rules.slice(0, 2).map((r) => `<li>${r}</li>`).join("")}</ul>` : ""}</div>`; }).join("")}
    </div>${tabs("ambiance")}`;
  }

  function reglages() {
    const tones = [["soft", "Soft", "Ados, famille, petits groupes"], ["foi", "Foi", "Groupe d'église : rien de gênant"], ["classique", "Classique", "Pour tout le monde, sans gêne"], ["hot", "18+", "Entre adultes, plus osé"]];
    return `<div class="scrim" data-act="close"></div><div class="sheet"><span class="grabber dk"></span>
      <div class="sheet-head"><h2>Réglages</h2><button class="icon-btn press" data-act="close" aria-label="Fermer">${ic("x")}</button></div>
      <div class="sbody">
      <div class="group-l">Apparence</div>
      <div class="list"><div class="theme-seg">${[["light", "Clair", "l"], ["dark", "Sombre", "d"], ["auto", "Auto", "a"]].map(([id, l, c]) => `<button class="theme-opt ${S.theme === id ? "on" : ""}" data-act="settheme:${id}"><div class="pv ${c}"><i></i><i></i><i></i></div>${l}</button>`).join("")}</div></div>
      <div class="group-l">Ton du contenu</div>
      <div class="list"><div class="tones">${tones.map(([id, l, d]) => `<button class="tone ${S.tone === id ? "on" : ""}" data-act="tone:${id}"><b>${l}${id === "hot" ? ' <span class="lk">Confirmation</span>' : ""}</b><span>${d}</span></button>`).join("")}</div></div>
      <div class="group-l">Pass</div>
      <div class="list"><button class="li" data-act="go:pass" style="width:100%;text-align:left"><span class="lic" style="background:linear-gradient(135deg,#FFD86B,#FFA94D);color:#4A2A00">${ic("crown")}</span><span class="lt">vibeZZ Pass<small>Gratuit · 10 jeux sur 40</small></span><span class="lv">Voir${ic("right")}</span></button></div>
      <div class="group-l">Ta soirée</div>
      <div class="list">
        <div class="li"><span class="lic" style="background:linear-gradient(135deg,#FF2BD6,#A532FF)">${ic("pencil")}</span><span class="lt">Nom</span><span class="lv">Soirée entre nous${ic("right")}</span></div>
        <div class="li"><span class="lic" style="background:linear-gradient(135deg,#FF8A3D,#FF5E7E)">${ic("party")}</span><span class="lt">Format</span><span class="lv">Soirée${ic("right")}</span></div>
        <div class="li"><span class="lic" style="background:linear-gradient(135deg,#4D7CFF,#7B2FF7)">${ic("clock")}</span><span class="lt">Heure de début</span><span class="lv">20:00${ic("right")}</span></div>
        <div class="li"><span class="lic" style="background:linear-gradient(135deg,#18C8B5,#4D7CFF)">${ic("wand")}</span><span class="lt">Pilote automatique<small>Propose la suite et une relance quand ça baisse</small></span><span class="switch on"></span></div>
      </div>
      <div class="group-l">Plus</div>
      <div class="list">
        <div class="li"><span class="lic" style="background:linear-gradient(135deg,#7B2FF7,#FF2BD6)">${ic("plus")}</span><span class="lt">Créer un jeu maison</span><span class="lv">${ic("right")}</span></div>
        <div class="li"><span class="lic" style="background:linear-gradient(135deg,#1A1464,#4D7CFF)">${ic("grid")}</span><span class="lt">Revoir l'écran de départ</span><span class="lv">${ic("right")}</span></div>
        <div class="li red"><span class="lic" style="background:#E5254F">${ic("restart")}</span><span class="lt">Nouvelle soirée, calée sur maintenant</span></div>
      </div>
      <p class="fine">vibeZZ · prototype · los φυλαδος</p>
    </div></div>`;
  }

  function pass() {
    const plans = [["Pass Soirée", "Une nuit, ça s'arrête tout seul", "1 500 FCFA", "24 h"], ["Classique", "Préparer et tenir un événement", "3 000 FCFA", "7 jours"], ["Max", "Un mois, sans reconduction", "5 000 FCFA", "30 jours"], ["Élite", "Pour animateurs et DJ", "15 000 FCFA", "30 jours"]];
    return `<div class="scrim" data-act="close"></div><div class="sheet"><div class="sbody">
      <div class="pass-head"><button class="close" data-act="close" aria-label="Fermer">${ic("x")}</button><div class="crown-big">${ic("crown")}</div><h2>vibeZZ Pass</h2><p>Les 40 jeux, sans limite.<br>Paiement Mobile Money, sans abonnement.</p></div>
      <div class="cmp"><div class="card"><h5>Gratuit</h5><ul>${["10 jeux", "Un déroulé", "La musique", "Une relance"].map((t) => `<li>${ic("check")}${t}</li>`).join("")}</ul></div>
        <div class="pro"><h5>${ic("crown", 'style="color:#FFA94D"')}Avec le Pass</h5><ul>${["Les 40 jeux", "Réorganiser", "Relances illimitées", "Tout le gratuit"].map((t) => `<li>${ic("check")}${t}</li>`).join("")}</ul></div></div>
      <div class="sec"><h2 class="h2" style="font-size:19px">1 · Choisis ta formule</h2></div>
      ${plans.map(([n, d, p, l], i) => `<div class="card plan ${i === 0 ? "on" : ""}">${i === 0 ? '<span class="best">LE PLUS PRIS</span>' : ""}<span class="radio"></span><div class="pt"><b>${n}</b><span>${d}</span></div><div class="pp"><b>${p}</b><span>${l}</span></div></div>`).join("")}
      <div class="sec"><h2 class="h2" style="font-size:19px">2 · Ton numéro Mobile Money</h2></div>
      <div class="phone-in"><span class="cc">+237</span><span class="ph">6 77 12 34 56</span></div>
      <div class="sec"><h2 class="h2" style="font-size:19px">3 · Paie 1 500 FCFA</h2></div>
      <div class="pay"><button class="mtn press"><i>MTN</i>MoMo</button><button class="om press"><i>OM</i>Orange Money</button></div>
      <p class="fine">Paiement simulé dans le prototype. Rien n'est débité.</p>
    </div></div>`;
  }

  function ouverture() {
    const ev = [["soiree", "Soirée", "Chez quelqu'un ou en salle"], ["piquenique", "Pique-nique", "Au parc ou à la plage"], ["rencontre", "Rencontre entre jeunes", "Pour faire connaissance"]];
    return `<div class="open-bg"></div><div class="open">${logo()}
      <h1>Tu organises quoi ?</h1><p class="subtitle" style="margin-top:8px">Choisis : vibeZZ prépare les jeux et le déroulé.</p>
      ${ev.map(([k, l, d]) => `<button class="ev" data-act="go:accueil">${eventArt(k)}<span class="scr"></span><span class="txt"><span><h3>${l}</h3><p><b>${forEvent(k).length} jeux</b> · ${d}</p></span><span class="cnt">${ic("right")}</span></span></button>`).join("")}
      <div class="sec" style="margin:20px 2px 0"><h2 class="h2" style="font-size:17px;color:var(--text2)">Autres formats</h2></div>
      <div class="others">${[["pyjama", "Pyjama"], ["anniversaire", "Anniversaire"]].map(([k, l]) => `<button class="oth press" data-act="go:accueil"><span class="sq">${eventArt(k)}</span><span><b>${l}</b><span>${forEvent(k).length} jeux</span></span></button>`).join("")}</div>
    </div>`;
  }

  function render() {
    document.documentElement.className = S.theme === "dark" ? "dark" : "light";
    const s = S.screen; let html = "";
    if (s === "ouverture") html = status() + ouverture();
    else if (s === "fiche") html = status(true) + jeux().replace('class="view"', 'class="view behind"') + fiche(S.game);
    else if (s === "reglages" || s === "reglages-suite") html = status() + accueil().replace('class="view"', 'class="view behind"') + reglages();
    else if (s === "pass") html = status(true) + accueil().replace('class="view"', 'class="view behind"') + pass();
    else if (s === "ceremonie-menu") html = status() + ceremonie(true);
    else html = status() + ({ accueil, jeux, ceremonie, musique, ambiance })[s]();
    if (S.toast) html += `<div class="toast">${ic("heart", 'fill="currentColor"')}${S.toast}</div>`;
    html += '<div class="homebar"></div>';
    document.getElementById("phone").innerHTML = html;
    if (s === "reglages-suite") document.querySelector(".sheet .sbody").scrollTop = 9999;
    const sy = +P.get("sy"); if (sy && document.querySelector(".sheet .sbody")) document.querySelector(".sheet .sbody").scrollTop = sy;
    const y = +P.get("y"); if (y) document.querySelector(".view").scrollTop = y;
  }

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]"); if (!el) return;
    e.stopPropagation();
    const [a, v] = el.dataset.act.split(":");
    if (a === "theme") S.theme = S.theme === "dark" ? "light" : "dark";
    if (a === "settheme") S.theme = v === "auto" ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : v;
    if (a === "go") S.screen = v;
    if (a === "game") { S.screen = "fiche"; S.game = v; }
    if (a === "close") S.screen = S.screen === "fiche" ? "jeux" : S.screen === "ceremonie-menu" ? "ceremonie" : "accueil";
    if (a === "fav") { S.favs.has(v) ? S.favs.delete(v) : S.favs.add(v); S.toast = S.favs.has(v) ? "Ajouté aux favoris" : "Retiré des favoris"; setTimeout(() => { S.toast = null; render(); }, 1400); }
    if (a === "mood") S.mood = v;
    if (a === "rules") S.openRules = S.openRules === v ? null : v;
    if (a === "tone") S.tone = v;
    if (a === "sheet" && v === "moment") S.screen = "ceremonie-menu";
    localStorage.setItem("vz-maq-theme", S.theme);
    render();
  });
  if (P.get("g")) S.game = P.get("g");
  render();
})();
