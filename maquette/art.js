// Illustrations vectorielles de la maquette vibeZZ (aucune personne réelle).
(function () {
  let uid = 0;
  const C = { mag: "#FF2BD6", vio: "#7B2FF7", navy: "#1A1464", ink: "#0E0B33", coral: "#FF5E7E", orange: "#FF8A3D", sun: "#FFC93C", teal: "#18C8B5", sky: "#4D7CFF", cream: "#FFF4E0", white: "#FFFFFF" };

  // Motif "wax" discret + lumière + confettis : même cadre pour toutes les couvertures.
  function frame(c1, c2, inner, opt = {}) {
    const id = "a" + (uid++);
    const w = opt.w || 200, h = opt.h || 150;
    const conf = opt.noConfetti ? "" : `
      <g opacity=".9">
        <rect x="${w * .08}" y="${h * .16}" width="7" height="3" rx="1.5" fill="${opt.c3 || C.sun}" transform="rotate(30 ${w * .08} ${h * .16})"/>
        <circle cx="${w * .9}" cy="${h * .2}" r="2.6" fill="#fff" opacity=".8"/>
        <rect x="${w * .86}" y="${h * .82}" width="7" height="3" rx="1.5" fill="#fff" opacity=".7" transform="rotate(-25 ${w * .86} ${h * .82})"/>
        <circle cx="${w * .12}" cy="${h * .84}" r="2" fill="${opt.c3 || C.sun}"/>
        <path d="M${w * .2} ${h * .1}l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z" fill="#fff" opacity=".85"/>
      </g>`;
    return `<svg class="art" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
        <radialGradient id="l${id}" cx=".25" cy=".1" r=".9"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></radialGradient>
        <pattern id="p${id}" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
          <circle cx="6" cy="6" r="2.4" fill="#fff"/><path d="M19 13l6 6-6 6-6-6z" fill="none" stroke="#fff" stroke-width="1.4"/><circle cx="19" cy="19" r="1.2" fill="#fff"/>
        </pattern>
        <filter id="s${id}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#14093f" flood-opacity=".32"/></filter>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#g${id})"/>
      <rect width="${w}" height="${h}" fill="url(#p${id})" opacity="${opt.pat ?? .1}"/>
      <circle cx="${w * .85}" cy="${h * .95}" r="${h * .55}" fill="#fff" opacity=".08"/>
      <circle cx="${w * .05}" cy="${h * .05}" r="${h * .45}" fill="#fff" opacity=".06"/>
      <rect width="${w}" height="${h}" fill="url(#l${id})"/>
      ${conf}
      <g filter="url(#s${id})">${inner}</g>
    </svg>`;
  }

  const note = (x, y, s = 1, f = C.sun) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="7" ry="5.5" transform="rotate(-20)" fill="${f}"/><rect x="5" y="-30" width="3.4" height="30" rx="1.5" fill="${f}"/><path d="M8 -30c8 2 12 8 10 16-2-5-6-7-10-7z" fill="${f}"/></g>`;
  const star4 = (x, y, r, f) => `<path d="M${x} ${y - r}C${x + r * .18} ${y - r * .18} ${x + r * .18} ${y - r * .18} ${x + r} ${y}C${x + r * .18} ${y + r * .18} ${x + r * .18} ${y + r * .18} ${x} ${y + r}C${x - r * .18} ${y + r * .18} ${x - r * .18} ${y + r * .18} ${x - r} ${y}C${x - r * .18} ${y - r * .18} ${x - r * .18} ${y - r * .18} ${x} ${y - r}Z" fill="${f}"/>`;
  const card = (x, y, rot, fill, glyph, gcol, w = 40, h = 54, fs = 34) => `<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="8" fill="${fill}"/><text y="${fs * .36}" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="${fs}" fill="${gcol}">${glyph}</text></g>`;

  const COVERS = {
    "action-verite": [C.coral, C.mag, `
      <path d="M52 118A52 18 0 0 0 152 112" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="1 9" stroke-linecap="round" opacity=".8"/>
      ${card(44, 62, -14, "#fff", "?", C.mag)}
      ${card(158, 60, 12, C.navy, "!", C.sun)}
      <g transform="translate(101 84) rotate(-38)">
        <rect x="-13" y="-30" width="26" height="54" rx="11" fill="${C.teal}"/>
        <rect x="-6.5" y="-50" width="13" height="24" rx="4" fill="${C.teal}"/>
        <rect x="-7.5" y="-55" width="15" height="8" rx="2.5" fill="${C.sun}"/>
        <rect x="-13" y="-6" width="26" height="16" fill="#fff" opacity=".92"/>
        <rect x="-8" y="-26" width="4.5" height="44" rx="2" fill="#fff" opacity=".35"/>
      </g>`],
    "undercover": [C.vio, C.navy, `
      <path d="M100 0L58 150H142Z" fill="#fff" opacity=".08"/>
      <ellipse cx="100" cy="66" rx="54" ry="11" fill="#F4F2FF"/>
      <path d="M70 66C69 40 77 27 100 27S131 40 130 66Z" fill="#F4F2FF"/>
      <path d="M86 30Q100 41 114 30" stroke="#d9d4f5" stroke-width="3" fill="none"/>
      <rect x="70.5" y="54" width="59" height="9" fill="${C.mag}"/>
      <rect x="64" y="84" width="32" height="21" rx="9" fill="${C.ink}"/>
      <rect x="104" y="84" width="32" height="21" rx="9" fill="${C.ink}"/>
      <path d="M96 91Q100 86 104 91" stroke="${C.ink}" stroke-width="3.5" fill="none"/>
      <path d="M70 89l8-2M110 89l8-2" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".55"/>
      <circle cx="160" cy="112" r="13" fill="#fff" fill-opacity=".18" stroke="${C.sun}" stroke-width="5"/>
      <path d="M169 121l11 11" stroke="${C.sun}" stroke-width="6" stroke-linecap="round"/>`],
    "loup-garou": ["#130F52", C.vio, `
      ${[[20, 20], [60, 14], [86, 34], [170, 18], [40, 46], [182, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fff" opacity=".85"/>`).join("")}
      <circle cx="138" cy="48" r="30" fill="#FFE7A3"/>
      <circle cx="128" cy="40" r="5" fill="#F5D27A"/><circle cx="148" cy="58" r="7" fill="#F5D27A"/><circle cx="146" cy="36" r="3" fill="#F5D27A"/>
      <path d="M0 112C40 94 70 100 100 106S170 96 200 104V150H0Z" fill="#0B0838"/>
      <g fill="#1D1760"><rect x="132" y="92" width="22" height="16" rx="2"/><path d="M128 94L143 76L158 94Z" fill="#2A2280"/><rect x="160" y="96" width="18" height="13" rx="2"/><path d="M157 98L169 84L181 98Z" fill="#2A2280"/></g>
      <rect x="140" y="98" width="6" height="7" rx="1" fill="${C.orange}"/><rect x="166" y="100" width="5" height="6" rx="1" fill="${C.orange}"/>
      <path d="M8 130C10 108 30 100 48 106C56 92 84 92 92 108C108 104 118 118 112 132Z" fill="#06042a"/>
      <path d="M38 116q7-6 14 0q-7 5-14 0z" fill="${C.sun}"/><path d="M62 116q7-6 14 0q-7 5-14 0z" fill="${C.sun}"/>
      <circle cx="45" cy="116" r="1.8" fill="#06042a"/><circle cx="69" cy="116" r="1.8" fill="#06042a"/>`, { noConfetti: true }],
    "times-up": [C.sun, C.orange, `
      ${card(42, 70, -18, "#fff", "", C.mag, 36, 48)}<path d="M33 62l16-5M35 70l14-4" transform="rotate(-18 42 70)" stroke="${C.mag}" stroke-width="3" stroke-linecap="round"/>
      ${card(160, 74, 16, C.navy, "", C.mag, 36, 48)}<path d="M150 66l16 4M150 74l12 3" transform="rotate(16 160 74)" stroke="${C.sun}" stroke-width="3" stroke-linecap="round"/>
      <path d="M79 36H121C121 60 105 70 103 78C105 86 121 96 121 120H79C79 96 95 86 97 78C95 70 79 60 79 36Z" fill="#fff" opacity=".9"/>
      <path d="M85 50H115C113 62 104 70 100 74C96 70 87 62 85 50Z" fill="${C.mag}"/>
      <rect x="99" y="73" width="2.4" height="32" fill="${C.mag}"/>
      <path d="M83 120C85 108 94 101 100 100C106 101 115 108 117 120Z" fill="${C.mag}"/>
      <rect x="70" y="26" width="60" height="11" rx="5.5" fill="${C.navy}"/><rect x="70" y="119" width="60" height="11" rx="5.5" fill="${C.navy}"/>
      <rect x="73" y="36" width="5" height="84" rx="2" fill="${C.navy}"/><rect x="122" y="36" width="5" height="84" rx="2" fill="${C.navy}"/>`],
    "mime-chaine": [C.sky, C.vio, `
      ${[0, 1, 2, 3].map((i) => `<rect x="0" y="${104 + i * 13}" width="200" height="6.5" fill="#fff" opacity=".22"/>`).join("")}
      <path d="M100 42C124 42 134 60 132 82C130 104 116 120 100 120S70 104 68 82C66 60 76 42 100 42Z" fill="#fff"/>
      <path d="M79 76Q86 69 93 76M107 76Q114 69 121 76" stroke="${C.navy}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="M86 81l3 8-3 8-3-8zM114 81l3 8-3 8-3-8z" fill="${C.navy}"/>
      <path d="M90 101Q100 95 110 101Q100 108 90 101Z" fill="${C.mag}"/>
      <circle cx="78" cy="94" r="5" fill="${C.coral}" opacity=".35"/><circle cx="122" cy="94" r="5" fill="${C.coral}" opacity=".35"/>
      <path d="M64 50C66 30 134 30 136 50C124 44 76 44 64 50Z" fill="${C.ink}"/><rect x="97" y="25" width="6" height="8" rx="3" fill="${C.ink}"/>
      ${star4(156, 54, 10, C.sun)}${star4(44, 100, 7, "#fff")}`],
    "tueur": [C.navy, C.mag, `
      <path d="M30 82Q63 48 96 82Q63 112 30 82Z" fill="#fff"/>
      <circle cx="63" cy="82" r="15" fill="${C.vio}"/><circle cx="63" cy="82" r="7" fill="${C.ink}"/><circle cx="58" cy="77" r="3.4" fill="#fff"/>
      <path d="M32 62Q62 42 92 58" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M108 84Q140 62 172 84" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M116 92l-5 8M130 96l-2 9M146 96l2 9M160 92l5 8" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      <path d="M110 58Q140 46 170 62" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>
      ${star4(178, 40, 12, C.sun)}${star4(160, 30, 6, "#fff")}`],
    "dessine": [C.teal, C.sky, `
      <g transform="rotate(-7 95 80)"><rect x="46" y="30" width="96" height="94" rx="9" fill="#fff"/>
        <circle cx="72" cy="56" r="10" fill="none" stroke="${C.orange}" stroke-width="3.5"/>
        <path d="M72 38v-4M72 78v-4M54 56h-4M94 56h-4" stroke="${C.orange}" stroke-width="3" stroke-linecap="round"/>
        <path d="M86 108V84l18-14 18 14v24Z" fill="none" stroke="${C.mag}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M58 112c6-8 10 4 16-4s10 4 14-2" fill="none" stroke="${C.vio}" stroke-width="3" stroke-linecap="round"/></g>
      <g transform="translate(150 92) rotate(-42)">
        <rect x="-8" y="-46" width="16" height="64" fill="${C.sun}"/><rect x="-2.5" y="-46" width="5" height="64" fill="#FFB020"/>
        <path d="M-8 18H8L0 36Z" fill="#F7D9A8"/><path d="M-3 28H3L0 36Z" fill="${C.ink}"/>
        <rect x="-8" y="-54" width="16" height="9" fill="#cfd3e6"/><rect x="-8" y="-66" width="16" height="13" rx="4" fill="${C.coral}"/></g>`],
    "ninja": [C.orange, C.mag, `
      <path d="M14 46h40M8 62h30M20 108h36M150 40h40M160 118h30" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".55"/>
      <g transform="translate(100 78) rotate(18)">
        <path d="M0 -42L10 -10L42 0L10 10L0 42L-10 10L-42 0L-10 -10Z" fill="${C.ink}"/>
        <path d="M0 -42L10 -10L42 0L0 0Z M0 42L-10 10L-42 0L0 0Z" fill="#3a3290"/>
        <circle r="8" fill="none" stroke="#fff" stroke-width="4"/></g>
      <g transform="translate(46 104) rotate(-12) scale(.45)"><path d="M0 -42L10 -10L42 0L10 10L0 42L-10 10L-42 0L-10 -10Z" fill="#fff"/><circle r="8" fill="${C.mag}"/></g>
      <g transform="translate(160 54) rotate(30) scale(.38)"><path d="M0 -42L10 -10L42 0L10 10L0 42L-10 10L-42 0L-10 -10Z" fill="${C.sun}"/><circle r="8" fill="${C.orange}"/></g>
      <path d="M126 22c14 6 22 2 34-6-4 12-12 18-28 16z" fill="${C.ink}"/>`],
    "chaises-musicales": [C.mag, C.vio, `
      ${[[40, 92, "#fff"], [86, 100, C.sun], [132, 92, C.teal]].map(([x, y, f]) => `<g><rect x="${x}" y="${y - 38}" width="7" height="42" rx="3" fill="${f}"/><rect x="${x}" y="${y}" width="34" height="8" rx="3" fill="${f}"/><rect x="${x + 2}" y="${y + 6}" width="5" height="26" rx="2" fill="${f}"/><rect x="${x + 27}" y="${y + 6}" width="5" height="26" rx="2" fill="${f}"/><rect x="${x}" y="${y - 38}" width="20" height="7" rx="3" fill="${f}"/></g>`).join("")}
      ${note(70, 50, .9)}${note(150, 38, 1.1, "#fff")}${note(110, 30, .7, C.sun)}`],
    "deviner-photo": [C.orange, C.sun, `
      <g transform="rotate(-8 92 78)"><rect x="44" y="24" width="96" height="108" rx="7" fill="#fff"/>
        <g>${(() => { const cols = [C.sky, C.teal, C.vio, C.sky, C.mag, C.teal, C.coral, C.sun, C.vio, C.mag, C.orange, C.teal, C.coral, C.mag, C.sun, C.vio]; let s = ""; for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) s += `<rect x="${52 + j * 20}" y="${32 + i * 20}" width="20" height="20" fill="${cols[i * 4 + j]}" opacity="${(i + j) % 3 ? .95 : .7}"/>`; return s; })()}</g>
        <rect x="52" y="32" width="80" height="80" fill="none" stroke="#fff" stroke-width="1.5" opacity=".5"/></g>
      <circle cx="148" cy="92" r="22" fill="#fff" fill-opacity=".9" stroke="${C.navy}" stroke-width="6"/>
      <text x="148" y="102" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="28" fill="${C.mag}">?</text>
      <path d="M163 108l16 16" stroke="${C.navy}" stroke-width="8" stroke-linecap="round"/>`],
    "qui-a-vecu-ca": [C.vio, C.coral, `
      <g><rect x="34" y="34" width="78" height="44" rx="20" fill="#fff"/><path d="M50 74l-6 16 20-12z" fill="#fff"/>
        <circle cx="58" cy="56" r="5" fill="${C.mag}"/><circle cx="73" cy="56" r="5" fill="${C.vio}"/><circle cx="88" cy="56" r="5" fill="${C.coral}"/></g>
      <g><rect x="96" y="70" width="74" height="44" rx="20" fill="${C.sun}"/><path d="M150 110l8 16-22-12z" fill="${C.sun}"/>
        <text x="133" y="102" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="30" fill="${C.navy}">!?</text></g>
      ${star4(160, 40, 10, "#fff")}${star4(40, 112, 7, C.sun)}`],
    "tu-ris-tu-perds": [C.sun, C.coral, `
      <path d="M44 80C60 54 84 60 100 68C116 60 140 54 156 80C140 106 116 112 100 104C84 112 60 106 44 80Z" fill="${C.mag}"/>
      <path d="M44 80C60 72 84 74 100 78C116 74 140 72 156 80" fill="none" stroke="#b5129a" stroke-width="3"/>
      <path d="M52 80H150" stroke="${C.navy}" stroke-width="5" stroke-dasharray="3 3"/>
      <rect x="146" y="74" width="12" height="20" rx="4" fill="${C.navy}"/><circle cx="152" cy="88" r="2.5" fill="${C.sun}"/>
      <path d="M30 60q-5 10 0 14q5-4 0-14z" fill="${C.teal}"/><path d="M172 98q-5 10 0 14q5-4 0-14z" fill="${C.teal}"/>
      <text x="40" y="44" font-family="Plus Jakarta Sans" font-weight="800" font-size="18" fill="#fff" transform="rotate(-12 40 44)">HA</text>
      <text x="150" y="44" font-family="Plus Jakarta Sans" font-weight="800" font-size="14" fill="${C.navy}" transform="rotate(10 150 44)">HA</text>`],
    "gauche-ou-droite": [C.teal, C.vio, `
      <ellipse cx="100" cy="132" rx="56" ry="9" fill="#0B0838" opacity=".25"/>
      <rect x="95" y="28" width="10" height="104" rx="4" fill="${C.cream}"/>
      <path d="M96 44H48L34 56L48 68H96Z" fill="${C.sun}"/><path d="M104 74H152L166 86L152 98H104Z" fill="${C.mag}"/>
      <path d="M58 56h26M114 86h28" stroke="${C.navy}" stroke-width="4" stroke-linecap="round" opacity=".5"/>`],
    "speed-quiz": [C.sky, C.mag, `
      <path d="M40 36L28 60h12L32 82l24-30H44l8-16z" fill="${C.sun}"/><path d="M164 30l-10 20h10l-6 18 20-24h-10l6-14z" fill="#fff"/>
      <ellipse cx="100" cy="116" rx="50" ry="12" fill="${C.ink}"/><rect x="50" y="100" width="100" height="16" fill="${C.ink}"/><ellipse cx="100" cy="100" rx="50" ry="12" fill="#2A2280"/>
      <path d="M64 100C64 66 80 52 100 52S136 66 136 100Z" fill="${C.coral}"/><ellipse cx="100" cy="100" rx="36" ry="8" fill="#e0436b"/>
      <path d="M78 76C80 66 88 60 96 58" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none" opacity=".6"/>`],
    "devine-le-mot": [C.teal, C.sky, `
      ${card(70, 84, -10, C.navy, "", "#fff", 56, 72)}${card(92, 80, 4, "#fff", "???", C.vio, 56, 72, 20)}
      <g transform="translate(146 54)"><circle r="20" fill="${C.sun}"/><rect x="-8" y="16" width="16" height="12" rx="3" fill="#cfd3e6"/>
      <path d="M-26 -18l-6-6M26 -18l6-6M0 -28v-8" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><path d="M-6 6q6-10 12 0" stroke="#FFB020" stroke-width="3" fill="none"/></g>`],
    "susceptible": [C.coral, C.vio, `
      <path d="M100 0L56 124H144Z" fill="#fff" opacity=".18"/>
      <ellipse cx="100" cy="124" rx="56" ry="11" fill="${C.navy}"/><rect x="44" y="114" width="112" height="10" fill="${C.navy}"/><ellipse cx="100" cy="114" rx="56" ry="11" fill="#2A2280"/>
      <g transform="translate(100 74)"><path d="M-30 14L-34 -16L-14 0L0 -24L14 0L34 -16L30 14Z" fill="${C.sun}"/><rect x="-30" y="12" width="60" height="10" rx="3" fill="#FFB020"/>
      <circle cy="-26" r="5" fill="${C.mag}"/><circle cx="-34" cy="-18" r="4" fill="#fff"/><circle cx="34" cy="-18" r="4" fill="#fff"/></g>
      ${[[40, 40, -30], [160, 40, 30], [30, 90, -60], [170, 92, 60]].map(([x, y, r]) => `<path d="M${x} ${y}h18" transform="rotate(${r} ${x} ${y})" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`).join("")}`],
    "deux-verites": [C.vio, C.sky, `
      ${card(52, 80, -10, "#fff", "✓", C.teal, 44, 58, 30)}${card(100, 74, 0, "#fff", "✓", C.teal, 44, 58, 30)}${card(148, 80, 10, C.mag, "✗", "#fff", 44, 58, 30)}`],
    "tu-preferes": [C.mag, C.orange, `
      <circle cx="62" cy="78" r="34" fill="#fff"/><circle cx="138" cy="78" r="34" fill="${C.navy}"/>
      <text x="62" y="90" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="34" fill="${C.mag}">A</text>
      <text x="138" y="90" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="34" fill="${C.sun}">B</text>
      <rect x="82" y="64" width="36" height="28" rx="14" fill="${C.sun}"/><text x="100" y="84" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="15" fill="${C.navy}">OU</text>`],
    "petit-bac": [C.sun, C.teal, `
      ${[["A", 44, 66, -10, "#fff", C.mag], ["B", 82, 58, 6, C.navy, C.sun], ["C", 120, 70, -4, C.mag, "#fff"], ["?", 158, 60, 12, "#fff", C.vio]].map(([t, x, y, r, f, c]) => `<g transform="translate(${x} ${y + 12}) rotate(${r})"><rect x="-17" y="-17" width="34" height="34" rx="8" fill="${f}"/><text y="10" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="24" fill="${c}">${t}</text></g>`).join("")}`],
    "gobelets": [C.coral, C.sun, cups()],
    "cup-game": [C.sky, C.teal, cups(true)],
    "freeze": [C.sky, C.vio, `
      <g transform="translate(100 78)" stroke="#fff" stroke-width="6" stroke-linecap="round">${[0, 60, 120].map((r) => `<g transform="rotate(${r})"><path d="M0 -40V40"/><path d="M-10 -30L0 -20L10 -30M-10 30L0 20L10 30"/></g>`).join("")}</g>
      <circle cx="100" cy="78" r="9" fill="${C.mag}"/>${note(44, 64, .8, C.sun)}${note(162, 112, .7, "#fff")}`],
    "devine-chanson": [C.vio, C.mag, vinyl()],
    "roue": [C.orange, C.mag, `
      <g transform="translate(100 80)">${[C.sun, C.teal, C.navy, "#fff", C.sky, C.coral].map((c, i) => { const a1 = i * 60 * Math.PI / 180, a2 = (i + 1) * 60 * Math.PI / 180; return `<path d="M0 0L${46 * Math.cos(a1)} ${46 * Math.sin(a1)}A46 46 0 0 1 ${46 * Math.cos(a2)} ${46 * Math.sin(a2)}Z" fill="${c}"/>`; }).join("")}
      <circle r="46" fill="none" stroke="#fff" stroke-width="5"/><circle r="8" fill="#fff"/></g><path d="M92 26h16l-8 14z" fill="#fff"/>`],
    "bombe": [C.coral, C.navy, `
      <circle cx="94" cy="88" r="36" fill="${C.ink}"/><path d="M76 72a20 20 0 0 1 16-10" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".45" fill="none"/>
      <rect x="104" y="48" width="18" height="14" rx="3" transform="rotate(35 113 55)" fill="#2A2280"/>
      <path d="M120 46q10-14 22-8" stroke="${C.cream}" stroke-width="3.5" fill="none" stroke-linecap="round"/>${star4(146, 34, 13, C.sun)}${star4(146, 34, 6, "#fff")}`],

    "debat": [C.sky, C.coral, `
      <g><rect x="28" y="40" width="70" height="42" rx="18" fill="#fff"/><path d="M44 78l-6 14 18-10z" fill="#fff"/><path d="M44 56h38M44 66h26" stroke="${C.sky}" stroke-width="5" stroke-linecap="round"/></g>
      <g><rect x="104" y="64" width="70" height="42" rx="18" fill="${C.navy}"/><path d="M158 102l6 14-18-10z" fill="${C.navy}"/><path d="M118 80h38M118 90h24" stroke="${C.sun}" stroke-width="5" stroke-linecap="round"/></g>
      <text x="100" y="40" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="18" fill="#fff">VS</text>`],
    "defi-30": [C.orange, C.coral, `
      <circle cx="100" cy="84" r="40" fill="#fff"/><rect x="92" y="30" width="16" height="10" rx="3" fill="${C.navy}"/><rect x="132" y="44" width="10" height="10" rx="3" transform="rotate(45 137 49)" fill="${C.navy}"/>
      <path d="M100 84V58A26 26 0 0 1 124 76Z" fill="${C.coral}"/><circle cx="100" cy="84" r="5" fill="${C.navy}"/>
      <text x="100" y="114" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="16" fill="${C.navy}">30s</text>`],
    "defi-equipes": [C.teal, C.orange, `
      <rect x="56" y="30" width="6" height="96" rx="3" fill="${C.cream}"/><path d="M62 32h44l-10 16 10 16H62Z" fill="${C.mag}"/>
      <rect x="138" y="30" width="6" height="96" rx="3" fill="${C.cream}"/><path d="M138 32H94l10 16-10 16h34Z" fill="${C.navy}" transform="translate(0 30)"/>
      <ellipse cx="100" cy="128" rx="60" ry="7" fill="#0B0838" opacity=".2"/>`],
    "jamais": [C.mag, C.navy, `
      <circle cx="100" cy="78" r="40" fill="none" stroke="#fff" stroke-width="9"/><path d="M72 106L128 50" stroke="#fff" stroke-width="9" stroke-linecap="round"/>
      ${star4(100, 78, 16, C.sun)}`],
    "mot-interdit": [C.coral, C.vio, `
      <rect x="44" y="40" width="112" height="56" rx="22" fill="#fff"/><path d="M70 92l-8 18 24-14z" fill="#fff"/>
      <text x="100" y="76" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="22" fill="${C.navy}">MOT</text>
      <path d="M58 68H142" stroke="${C.mag}" stroke-width="7" stroke-linecap="round"/>`],
    "mystere": [C.navy, C.sky, `
      <circle cx="100" cy="66" r="26" fill="${C.sun}"/><path d="M90 84h20l8 40H82Z" fill="${C.sun}"/><circle cx="100" cy="66" r="10" fill="${C.navy}"/><path d="M96 70h8l3 34h-14Z" fill="${C.navy}"/>
      ${star4(150, 40, 9, "#fff")}${star4(52, 110, 7, C.sun)}`, { noConfetti: false }],
    "portrait": [C.sun, C.mag, `
      <rect x="54" y="28" width="92" height="100" rx="8" fill="#C9853F"/><rect x="62" y="36" width="76" height="84" rx="4" fill="${C.cream}"/>
      <circle cx="100" cy="70" r="16" fill="${C.vio}"/><path d="M72 120c4-22 52-22 56 0Z" fill="${C.vio}"/>
      <text x="100" y="77" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="20" fill="#fff">?</text>`],
    "pyramide": [C.vio, C.orange, `
      ${[[100, 40], [80, 72], [120, 72], [60, 104], [100, 104], [140, 104]].map(([x, y], i) => `<rect x="${x - 15}" y="${y - 14}" width="30" height="38" rx="5" fill="${i % 2 ? C.navy : "#fff"}"/><circle cx="${x}" cy="${y + 5}" r="5" fill="${i % 2 ? C.sun : C.mag}"/>`).join("")}`],
    "passe-ball": [C.sky, C.mag, `
      <path d="M30 104q40-60 90-40" stroke="#fff" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round" fill="none"/>
      <circle cx="136" cy="70" r="30" fill="${C.sun}"/><path d="M110 58q26 10 52 0M110 82q26-10 52 0M136 40v60" stroke="${C.orange}" stroke-width="4" fill="none"/>`],
    "silence": [C.navy, C.teal, `
      <path d="M58 64h22l26-22v72L80 92H58Z" fill="#fff"/><path d="M126 60l28 28M154 60l-28 28" stroke="${C.mag}" stroke-width="8" stroke-linecap="round"/>`],
    "qui-suis-je": [C.teal, C.mag, `
      <g transform="rotate(-8 100 78)"><rect x="60" y="38" width="80" height="80" rx="6" fill="${C.sun}"/><path d="M60 38h80v14H60Z" fill="#FFB020"/>
      <text x="100" y="104" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="44" fill="${C.navy}">?</text></g>`],
    "arabe": [C.orange, C.vio, `
      <path d="M58 46c-10 10-6 34 14 54s44 24 54 14l-14-16-12 8c-8-4-22-18-26-26l8-12Z" fill="#fff"/>
      <path d="M128 46a24 24 0 0 1 22 22M128 30a40 40 0 0 1 38 38" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none"/>`],
    "oui-non": [C.coral, C.sky, `
      <rect x="34" y="52" width="60" height="44" rx="22" fill="#fff"/><text x="64" y="81" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="18" fill="${C.teal}">OUI</text>
      <rect x="106" y="52" width="60" height="44" rx="22" fill="${C.navy}"/><text x="136" y="81" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="18" fill="${C.coral}">NON</text>
      <path d="M28 112L172 36" stroke="${C.sun}" stroke-width="7" stroke-linecap="round"/>`],
    "anecdote": [C.vio, C.sun, `
      <path d="M100 52C84 42 62 42 46 48V116C62 110 84 110 100 120Z" fill="#fff"/><path d="M100 52C116 42 138 42 154 48V116C138 110 116 110 100 120Z" fill="${C.cream}"/>
      <path d="M58 64h30M58 76h30M58 88h22M112 64h30M112 76h30" stroke="${C.vio}" stroke-width="3" stroke-linecap="round" opacity=".6"/>`],
    "trois-pierres": [C.teal, C.sun, `
      <ellipse cx="66" cy="108" rx="24" ry="16" fill="#8E8AB8"/><ellipse cx="108" cy="104" rx="20" ry="14" fill="#B5B1D8"/><ellipse cx="144" cy="110" rx="18" ry="12" fill="#6E6A9E"/>
      <path d="M60 100a10 6 0 0 1 12-4" stroke="#fff" stroke-width="3" opacity=".5" fill="none"/><path d="M60 70q40-50 84 10" stroke="#fff" stroke-width="3" stroke-dasharray="2 8" fill="none" stroke-linecap="round"/>`],
  };

  function cups(cyan) {
    const f = cyan ? ["#fff", C.mag, C.sun] : [C.mag, C.sky, "#fff"];
    const cup = (x, y, c) => `<path d="M${x - 15} ${y - 24}H${x + 15}L${x + 11} ${y + 12}H${x - 11}Z" fill="${c}"/><rect x="${x - 17}" y="${y - 28}" width="34" height="6" rx="3" fill="${c}"/><path d="M${x - 8} ${y - 18}L${x - 6} ${y + 6}" stroke="#fff" stroke-width="3" opacity=".4" stroke-linecap="round"/>`;
    return `${cup(66, 122, f[0])}${cup(100, 122, f[1])}${cup(134, 122, f[0])}${cup(83, 84, f[2])}${cup(117, 84, f[1])}${cup(100, 46, f[0])}`;
  }
  function vinyl() {
    return `<circle cx="96" cy="80" r="46" fill="${C.ink}"/>${[38, 30, 22].map((r) => `<circle cx="96" cy="80" r="${r}" fill="none" stroke="#3a3290" stroke-width="1.5"/>`).join("")}
      <circle cx="96" cy="80" r="14" fill="${C.sun}"/><circle cx="96" cy="80" r="3" fill="${C.ink}"/><path d="M70 56a36 36 0 0 1 20-10" stroke="#fff" stroke-width="4" opacity=".35" fill="none" stroke-linecap="round"/>
      ${note(158, 64, 1, "#fff")}${note(40, 46, .7, C.sun)}`;
  }

  // Couverture générique par famille (pour les jeux moins visibles).
  const FAMILY = {
    "Défis": [C.orange, C.coral, `<path d="M108 24L74 86h26l-12 44 46-64h-28l14-42z" fill="${C.sun}"/>`],
    "Musique": [C.vio, C.mag, vinyl()],
    "Adresse": [C.coral, C.sun, cups()],
    "Groupe": [C.vio, C.coral, [0, 1, 2, 3, 4, 5].map((i) => { const a = i * Math.PI / 3; return `<circle cx="${100 + 36 * Math.cos(a)}" cy="${78 + 36 * Math.sin(a)}" r="12" fill="${[C.sun, "#fff", C.teal, "#fff", C.mag, "#fff"][i]}"/>`; }).join("") + `<circle cx="100" cy="78" r="10" fill="${C.navy}"/>`],
    "Deviner": [C.teal, C.sky, `<circle cx="100" cy="76" r="40" fill="#fff"/><text x="100" y="94" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="52" fill="${C.vio}">?</text>`],
    "Fou rire": [C.sun, C.coral, `<text x="100" y="96" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="52" fill="#fff">HA!</text>`],
    "Quiz": [C.sky, C.vio, `<rect x="56" y="40" width="88" height="70" rx="16" fill="#fff"/><text x="100" y="90" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="44" fill="${C.mag}">Q</text>`],
    "Brise-glace": [C.sky, C.teal, `<g transform="rotate(-12 100 78)"><rect x="66" y="44" width="68" height="68" rx="14" fill="#fff" opacity=".9"/><path d="M80 56l20 20M110 60l-8 14" stroke="${C.sky}" stroke-width="4" stroke-linecap="round"/></g>`],
    "Ambiance": [C.mag, C.vio, star4(100, 78, 36, C.sun)],
    "Mime": [C.sky, C.vio, `<circle cx="100" cy="78" r="36" fill="#fff"/>`],
    "Dessin": [C.teal, C.sky, `<rect x="60" y="40" width="80" height="76" rx="10" fill="#fff"/>`],
  };

  window.coverFor = function (game) {
    const spec = COVERS[game.id] || FAMILY[game.cat] || FAMILY["Groupe"];
    return frame(spec[0], spec[1], spec[2], spec[3] || {});
  };
  window.hasArt = (id) => !!COVERS[id];

  // Illustrations des formats (écran d'ouverture).
  const EVENTS = {
    soiree: () => frame("#130F52", C.vio, `
      <path d="M0 26Q85 64 170 20T340 30" stroke="#fff" stroke-width="1.5" fill="none" opacity=".6"/>
      ${[[24, 32, C.sun], [56, 42, C.mag], [90, 46, C.teal], [124, 42, C.sun], [158, 32, C.coral], [200, 30, C.teal], [236, 36, C.sun], [272, 36, C.mag], [306, 30, C.sun]].map(([x, y, c]) => `<circle cx="${x}" cy="${y + 4}" r="5" fill="${c}"/><circle cx="${x}" cy="${y + 4}" r="11" fill="${c}" opacity=".18"/>`).join("")}
      <path d="M0 150V112h20v-14h18v22h16V90h24v30h14v-18h20v48Z" fill="#0B0838" opacity=".9"/>
      <path d="M200 150v-40h18V92h22v26h12V80h26v40h16v-22h20v52Z" fill="#0B0838" opacity=".9"/>
      <line x1="250" y1="0" x2="250" y2="64" stroke="#cfd3e6" stroke-width="2"/>
      <circle cx="250" cy="86" r="24" fill="#c9cbe6"/>${(() => { let s = ""; for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) if (i * i + j * j <= 5) s += `<rect x="${244 + i * 9}" y="${80 + j * 9}" width="8" height="8" rx="1.5" fill="${["#fff", "#a9acd6", C.mag, "#e9eaff", C.teal][(i * 3 + j * 7 + 20) % 5]}" opacity=".9"/>`; return s; })()}
      <path d="M232 110L196 150M268 110L304 150" stroke="${C.mag}" stroke-width="10" opacity=".22"/>
      ${note(140, 104, .9, C.mag)}${note(176, 84, .7, "#fff")}`, { w: 340, h: 150 }),
    piquenique: () => frame("#5FD4E8", C.sun, `
      <circle cx="270" cy="40" r="24" fill="#FFF1B8"/><circle cx="270" cy="40" r="34" fill="#FFF1B8" opacity=".35"/>
      <path d="M0 108Q170 86 340 108V150H0Z" fill="#2FBF8F"/>
      <path d="M60 116L40 34" stroke="#8A5A2B" stroke-width="7" stroke-linecap="round"/>
      ${[[-70, 26], [-30, 28], [10, 30], [60, 26], [110, 22], [160, 26]].map(([r, l]) => `<path d="M40 34q${l * .6} -12 ${l} 6" transform="rotate(${r} 40 34)" stroke="#1E9E6E" stroke-width="9" fill="none" stroke-linecap="round"/>`).join("")}
      <path d="M110 140L150 104H300L320 140Z" fill="${C.mag}"/>
      ${(() => { let s = ""; for (let i = 0; i < 6; i++) s += `<path d="M${135 + i * 30} 122l9-9 9 9-9 9z" fill="${C.sun}"/><circle cx="${150 + i * 30}" cy="${112 + (i % 2) * 18}" r="3" fill="#fff"/>`; return s; })()}
      <path d="M196 100h52l-6 26h-40Z" fill="#C9853F"/><path d="M200 100q22-26 44 0" stroke="#8A5A2B" stroke-width="4" fill="none"/>
      <circle cx="270" cy="114" r="10" fill="${C.coral}"/><circle cx="286" cy="118" r="8" fill="${C.orange}"/>`, { w: 340, h: 150, c3: "#fff" }),
    rencontre: () => frame(C.coral, C.mag, `
      <g><rect x="22" y="14" width="112" height="42" rx="21" fill="#fff"/><path d="M44 52l-6 14 22-10z" fill="#fff"/>
      <text x="78" y="42" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="20" fill="${C.mag}">Mbolo !</text></g>
      <g><rect x="146" y="34" width="84" height="36" rx="18" fill="${C.sun}"/><text x="188" y="58" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="17" fill="${C.navy}">Hey !</text></g>
      <g><rect x="238" y="8" width="92" height="38" rx="19" fill="${C.navy}"/><path d="M308 42l8 14-22-10z" fill="${C.navy}"/>
      <text x="284" y="33" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="17" fill="${C.sun}">Salut !</text></g>
      ${star4(140, 22, 7, "#fff")}${star4(250, 70, 6, C.sun)}`, { w: 340, h: 150 }),
    pyjama: () => frame(C.navy, C.vio, `<path d="M118 34a30 30 0 1 0 30 44a24 24 0 1 1-30-44z" fill="#FFE7A3"/><rect x="34" y="88" width="80" height="40" rx="18" fill="#fff"/><path d="M44 100q30 10 60 0" stroke="${C.sky}" stroke-width="3" fill="none"/>${star4(60, 40, 8, "#fff")}`, { w: 180, h: 150 }),
    anniversaire: () => frame(C.mag, C.orange, `<rect x="44" y="84" width="92" height="44" rx="10" fill="#fff"/><rect x="44" y="84" width="92" height="14" rx="7" fill="${C.coral}"/><rect x="56" y="64" width="68" height="24" rx="8" fill="${C.sun}"/>${[72, 90, 108].map((x) => `<rect x="${x - 2}" y="44" width="4" height="20" rx="2" fill="#fff"/><path d="M${x} 32q5 7 0 11q-5-4 0-11z" fill="${C.sun}"/>`).join("")}`, { w: 180, h: 150 }),
  };
  window.eventArt = (k) => EVENTS[k]();
  window.ART_COLORS = C;
})();
