// ── DATA ──────────────────────────────────────────────────────────────────────

const TOOLS = [
  // ── Voor cliënten: eenvoudige taal ──
  { title:"De Roze Pagina", org:"çavaria", thema:"Seksualiteit & Identiteit", doelgroep:"Cliënten", beschrijving:"Toegankelijke website in eenvoudige taal voor holebi, transgender en intersekse personen met een verstandelijke beperking en hun omgeving. Met info over coming-out, verliefdheid, relaties en seksualiteit, en doorverwijzing naar de regionale ontmoetingsgroepen.", url:"https://www.cavaria.be/derozepagina" },
  { title:"Meer weten over transgender zijn", org:"çavaria", thema:"Gender & Trans", doelgroep:"Cliënten", beschrijving:"Gids in begrijpelijke taal die uitlegt wat transgender zijn is, hoe het kan voelen, wat je kan meemaken en wie kan helpen. Geschikt om samen met een cliënt door te nemen.", url:"https://cavaria.be/tools-lgbti-handicap" },
  { title:"allesoverseks.be", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Cliënten", beschrijving:"Publiekswebsite in toegankelijke taal (B1-niveau) over lichaam, relaties, gender, soa's en consent. Bekroond met de Wablieft-prijs voor heldere taal.", url:"https://www.allesoverseks.be" },
  { title:"Zanzu", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Cliënten", beschrijving:"Meertalige website (A1-niveau) met afbeeldingen en voorleesfunctie over seksuele gezondheid in veertien talen. Breed toegankelijk, ook voor laaggeletterde cliënten.", url:"https://www.zanzu.be/nl" },
  // ── Voor begeleiders: methodieken ──
  { title:"Sensoa Vlaggensysteem", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Begeleiders", beschrijving:"De Vlaamse basismethodiek om (grensoverschrijdend) seksueel gedrag in te schatten via zes criteria en gepast te reageren met een kleurensysteem. Maakt grenzen en seksualiteit bespreekbaar.", url:"https://www.sensoa.be/vlaggensysteem-hoe-reageren-op-seksueel-grensoverschrijdend-gedrag" },
  { title:"Sensoa Vlaggensysteem voor Volwassenen", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Begeleiders", beschrijving:"Variant van het Vlaggensysteem specifiek voor professionals in voorzieningen voor personen met een beperking, woonzorg en geestelijke gezondheidszorg.", url:"https://www.sensoa.be/materiaal/sensoa-vlaggensysteem-voor-volwassenen-boek" },
  { title:"Buiten de lijnen", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Begeleiders", beschrijving:"Aanvulling op het Vlaggensysteem voor mensen met een disharmonisch ontwikkelingsprofiel (beperking, trauma, gender). Ook bruikbaar bij volwassenen met een verstandelijke beperking via hun ontwikkelingsniveau.", url:"https://www.sensoa.be/materiaal/buiten-de-lijnen-methodiek" },
  { title:"Vlaggensysteem op een bordje", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Cliënten & Begeleiders", beschrijving:"Visueel spelmateriaal in makkelijke taal waarmee ook kwetsbare volwassenen zelf kunnen deelnemen aan het gesprek over seksualiteit en grenzen.", url:"https://www.sensoa.be/materiaal/vlaggensysteem-op-een-bordje-methodiek" },
  { title:"Op het kruispunt: toolset LGBTI+ & beperking", org:"çavaria en partners", thema:"Beleid & Organisatie", doelgroep:"Begeleiders", beschrijving:"Vier downloadbare tools om je organisatie inclusiever te maken: een gids inclusieve communicatie, tips voor inclusief vergaderen, een inclusiescan en de gids 'Meer weten over transgender zijn'.", url:"https://cavaria.be/tools-lgbti-handicap" },
  { title:"Zonder Stempel: instrumentenbox", org:"COC Nederland, LFB & Vilans", thema:"Beleid & Organisatie", doelgroep:"Begeleiders", beschrijving:"Instrumentenbox met werkvormen, een training en een handleiding voor ontmoetingsgroepen om seksuele en genderdiversiteit bespreekbaar te maken in de zorg voor mensen met een (licht) verstandelijke beperking.", url:"https://zonderstempel.nl" },
  { title:"LHBTI's met een verstandelijke beperking willen zichtbaar zijn!", org:"Movisie", thema:"Beleid & Organisatie", doelgroep:"Begeleiders", beschrijving:"Handreiking met knelpunten en een concrete aanpak om deze groep te ondersteunen en zichtbaarder te maken in de zorg.", url:"https://www.movisie.nl/publicatie/lhbtis-verstandelijke-beperking-willen-zichtbaar-zijn" },
  { title:"Roze Loper: scan & toolkit", org:"Roze 50+/COC, Movisie & Vilans", thema:"Beleid & Organisatie", doelgroep:"Organisaties", beschrijving:"Certificeringstraject met scan en toolkit voor LHBT-vriendelijkheid in zorginstellingen, ook toegepast bij organisaties voor mensen met een verstandelijke beperking.", url:"https://www.rozezorg.nl" },
  { title:"Toolbox Seksuele Diversiteit", org:"Kennisplein Gehandicaptensector", thema:"Seksualiteit & Identiteit", doelgroep:"Begeleiders", beschrijving:"Instrumenten voor het bespreken en begeleiden van LHBTI-seksualiteit bij cliënten met een verstandelijke beperking. Inclusief inspiratiekaarten en een LHBT-quiz.", url:"https://www.kennispleingehandicaptensector.nl/tips-tools/tools/toolbox-seksuele-diversiteit" },
  { title:"TransToegankelijk", org:"COC / Transgender Netwerk NL", thema:"Gender & Trans", doelgroep:"Begeleiders", beschrijving:"Platform voor begeleiders van transgender personen met een verstandelijke beperking. Filmpjes, oefeningen en spellen om het thema bespreekbaar te maken.", url:"https://www.transtoegankelijk.nl" },
  { title:"Transgendergids voor verstandelijke beperking", org:"Transvisie, COC Zonder Stempel & Transgender Netwerk Nederland", thema:"Gender & Trans", doelgroep:"Cliënten & Begeleiders", beschrijving:"Gids om over transgendergevoelens te praten en over een eventuele transitie. Specifiek toegankelijk gemaakt voor mensen met een verstandelijke beperking.", url:"https://www.transgendernetwerk.nl/kennis/publicatie/transgender-gids-in-toegankelijke-taal/" },
];

const ORGS = [
  // ── Kern: kruispunt zorg, beperking & seksualiteit ──
  { naam:"Aditi vzw", regio:"Heel Vlaanderen", type:"Begeleiding & Advies", beschrijving:"Advies- en informatiecentrum rond relaties, intimiteit en seksualiteit voor personen met een beperking of psychische kwetsbaarheid en hun netwerk. Erkend door het VAPH; biedt teamondersteuning, vorming en individuele begeleiding.", url:"https://aditivzw.be", telefoon:null },
  { naam:"Sensoa", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Vlaams expertisecentrum voor seksuele gezondheid. Ontwikkelt methodieken zoals het Vlaggensysteem en toegankelijke websites om seksualiteit en grenzen bespreekbaar te maken.", url:"https://www.sensoa.be", telefoon:null },
  // ── Koepel & algemeen LGBTI+ ──
  { naam:"çavaria", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Vlaamse belangenverdediger en koepel voor LGBTI+ personen en verenigingen. Beheert De Roze Pagina, het project 'Op het kruispunt' en een woordenlijst. Sinds de fusie met KliQ (2025) biedt çavaria zelf vorming en advies aan via çavaria vorming.", url:"https://www.cavaria.be", telefoon:null },
  { naam:"Lumi", regio:"Heel Vlaanderen", type:"Anonieme steun", beschrijving:"De gratis en anonieme onthaal- en infolijn van çavaria voor alle vragen over gender, geslacht en seksuele oriëntatie, via telefoon, chat en mail. Ook voor naasten en begeleiders.", url:"https://www.lumi.be", telefoon:"0800 99 533" },
  { naam:"Transgender Infopunt (TIP)", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Vlaams onthaal- en expertisecentrum voor transgenderthema's, ingebed in UZ Gent. Gratis en anoniem, met een zorgkaart van gespecialiseerde hulpverleners.", url:"https://www.transgenderinfo.be", telefoon:"0800 96 316" },
  { naam:"çavaria vorming (voorheen KliQ)", regio:"Heel Vlaanderen", type:"Begeleiding & Advies", beschrijving:"Het vormings- en adviesaanbod van çavaria. KliQ vzw is in 2025 opgegaan in çavaria; de vormingen en trajectbegeleiding voor sectoren zoals woonzorg en hulpverlening die inclusiever willen werken, lopen nu onder de naam çavaria vorming.", url:"https://vorming.cavaria.be", telefoon:null },
  { naam:"GRIP vzw", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Mensenrechtenorganisatie van en voor personen met een beperking. Heeft een eigen pagina in eenvoudige taal en denkt mee over het kruispunt beperking en LGBTI+.", url:"https://www.gripvzw.be", telefoon:null },
  { naam:"Intersekse Vlaanderen", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Eerste en enige Vlaamse belangenvereniging van, voor en door mensen geboren met een intersekse variatie en hun ouders.", url:"https://www.interseksevlaanderen.be", telefoon:null },
  { naam:"Wel Jong vzw", regio:"Heel Vlaanderen", type:"Ontmoeting & Activiteiten", beschrijving:"Jeugdorganisatie voor en door LGBTQ+ jongeren tot 30 jaar, met laagdrempelige activiteiten en deelwerkingen zoals Min19 en T-Jong.", url:"https://www.weljong.be", telefoon:null },
  { naam:"Aut & Out", regio:"Heel Vlaanderen", type:"Ontmoeting & Activiteiten", beschrijving:"Activiteiten en ontmoetingsplekken voor en door LGBTQIA+ volwassenen met autisme. De enige werking in België op dit kruispunt (deelname zonder begeleider).", url:"https://www.autenout.be", telefoon:null },
  { naam:"Dito vzw", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Vereniging van en voor mensen met een handicap of chronische ziekte en hun netwerk, met vrijetijdsaanbod, vrijwilligerswerk en belangenbehartiging. Geen specifieke LGBTI+-werking, wel een aanspreekpunt voor algemene vragen rond vrije tijd en participatie.", url:"https://www.ditovzw.be", telefoon:null },
  // ── Regenbooghuizen per provincie ──
  { naam:"Het Roze Huis", regio:"Antwerpen", type:"Info & Ondersteuning", beschrijving:"Regenbooghuis en koepel voor LGBTQIA+ verenigingen in de provincie Antwerpen. Met ontmoeting, belangenbehartiging en een RegenboogBib.", url:"https://www.hetrozehuis.be", telefoon:null },
  { naam:"Regenbooghuis Gent (RBG)", regio:"Gent (Oost-Vlaanderen)", type:"Info & Ondersteuning", beschrijving:"Ontmoetingshuis voor LGBTQI+ personen in de Kammerstraat in Gent. Sinds mei 2026 opnieuw open met een nieuwe ploeg (voorlopige naam 'Regenbooghuis Gent'), als doorstart na Casa Rosa. Zet in op onthaal en info en is een thuisbasis voor verenigingen. Casa Rosa vzw beheert nog het gebouw; de stad Gent financiert de werking voor 2026-2028.", url:"https://www.casarosa.be", telefoon:null },
  { naam:"UniQue", regio:"Leuven (Vlaams-Brabant)", type:"Info & Ondersteuning", beschrijving:"Vlaams-Brabants regenbooghuis dat verenigingen en vrijwilligers ondersteunt. Nam mee het initiatief voor De Roze Ballon voor holebi's met een verstandelijke beperking.", url:"https://www.unique-rbh.be", telefoon:null },
  { naam:"Genres Pluriels", regio:"Brussel", type:"Begeleiding & Advies", beschrijving:"Franstalige organisatie die de rechten van transgender, genderfluïde en intersekse personen verdedigt. Biedt therapie, permanenties en steungroepen.", url:"https://www.genrespluriels.be", telefoon:null },
  { naam:"Rainbowhouse Brussel", regio:"Brussel", type:"Info & Ondersteuning", beschrijving:"LGBTQIA+ gemeenschapscentrum in Brussel, ook met een meldpunt voor LGBTQI+-fobe incidenten.", url:"https://rainbowhouse.be/nl/", telefoon:null },
  { naam:"Merhaba vzw", regio:"Brussel", type:"Info & Ondersteuning", beschrijving:"Organisatie voor LGBT+ personen met een migratieachtergrond, bereikbaar via telefoon, WhatsApp en mail, met praatgroepen.", url:"https://www.merhaba.be", telefoon:null },
  // ── Regionale ontmoetingsgroepen voor de doelgroep zelf ──
  { naam:"De Roze Ballon", regio:"Leuven (Vlaams-Brabant)", type:"Ontmoeting & Activiteiten", beschrijving:"Vereniging voor holebi's met een verstandelijke beperking. Regelmatige activiteiten zoals bowlen, museumbezoek en uitstappen.", url:"https://www.cavaria.be/derozepagina", telefoon:null },
  { naam:"De Roze Maks", regio:"West-Vlaanderen", type:"Ontmoeting & Activiteiten", beschrijving:"Ontmoetingsgroep voor holebi's en LGBTI+ personen met een verstandelijke beperking in West-Vlaanderen. Let op: staat niet meer in de lijst van actieve verenigingen op De Roze Pagina (oktober 2026). Vraag de actuele status na bij Lumi of çavaria.", url:"https://www.cavaria.be/derozepagina", telefoon:null },
  { naam:"De Roze Joker", regio:"Gent (Oost-Vlaanderen)", type:"Ontmoeting & Activiteiten", beschrijving:"Vereniging voor holebi's met een beperking, maar iedereen is welkom. Zes toegankelijke activiteiten per jaar.", url:"https://www.cavaria.be/derozepagina", telefoon:null },
  { naam:"De Roze Wapper", regio:"Antwerpen", type:"Ontmoeting & Activiteiten", beschrijving:"Ontmoetingsgroep voor holebi's met een verstandelijke beperking in de regio Antwerpen. Let op: staat niet meer in de lijst van actieve verenigingen op De Roze Pagina (oktober 2026). Vraag de actuele status na bij Het Roze Huis of çavaria.", url:"https://www.cavaria.be/derozepagina", telefoon:null },
  { naam:"De Roze Bink", regio:"Limburg", type:"Ontmoeting & Activiteiten", beschrijving:"Voor holebi's en transgender personen met een beperking. Activiteiten zoals een praatcafé, filmavond en bowling.", url:"https://www.cavaria.be/derozepagina", telefoon:null },
];

const BELEID = [
  // ── Rechten & wetgeving ──
  { titel:"VN-Verdrag Rechten Personen met een Handicap (VRPH)", groep:"Rechten & wetgeving", type:"Juridisch kader", beschrijving:"Het VRPH garandeert het recht op volledige inclusie en participatie, inclusief op het vlak van relaties en seksualiteit. Bindend voor België.", url:"https://www.unia.be/nl/discriminatie-handicap" },
  { titel:"Antidiscriminatiewet (2007)", groep:"Rechten & wetgeving", type:"Juridisch kader", beschrijving:"Verbiedt discriminatie op grond van onder meer seksuele geaardheid, beperking en gezondheidstoestand, ook in de zorg. Unia ziet toe op de naleving.", url:"https://www.unia.be" },
  { titel:"Genderwet (2007, uitgebreid 2014/2020)", groep:"Rechten & wetgeving", type:"Juridisch kader", beschrijving:"Verbiedt discriminatie op grond van geslacht. Sinds 2014 vallen daar ook expliciet genderidentiteit en genderexpressie onder, sinds 2020 ook geslachtskenmerken (naast onder meer borstvoeding, adoptie, medisch begeleide voortplanting en meeouderschap). Beschermt trans en intersekse cliënten.", url:"https://igvm-iefh.belgium.be/nl" },
  { titel:"Transgenderwet (2017)", groep:"Rechten & wetgeving", type:"Juridisch kader", beschrijving:"Maakt het mogelijk om de geregistreerde voornaam en het geslacht te wijzigen op eenvoudig verzoek, zonder medische voorwaarde. Relevant bij naam- en registratievragen van trans cliënten.", url:"https://igvm-iefh.belgium.be/nl/themas/transgender" },
  // ── Vlaams zorgbeleid ──
  { titel:"VAPH: bespreekbaarheid seksualiteit & kwaliteit", groep:"Vlaams zorgbeleid", type:"Beleidskader", beschrijving:"Het Vlaams Agentschap voor Personen met een Handicap verwacht dat voorzieningen seksualiteit bespreekbaar maken en een veilig, kwaliteitsvol klimaat bieden. Vergunde aanbieders worden geïnspecteerd door Zorginspectie.", url:"https://www.vaph.be" },
  { titel:"Vlaams Horizontaal Gelijkekansenbeleidsplan 2025-2029", groep:"Vlaams zorgbeleid", type:"Beleidskader", beschrijving:"Geïntegreerd Vlaams actieplan met aandacht voor zowel mensen met een beperking als LGBTI+ personen, inclusief acties rond kruispuntdenken en inclusie.", url:"https://www.vlaanderen.be/cjm/nl/horizontaal-beleid/gelijkekansenbeleid" },
  // ── Wetenschappelijke onderbouwing ──
  { titel:"DSM: schrapping van homoseksualiteit (APA, 1973)", groep:"Wetenschappelijke onderbouwing", type:"Wetenschappelijk kader", beschrijving:"De American Psychiatric Association schrapte in 1973 homoseksualiteit als stoornis uit de DSM. Wetenschappelijk fundament tegen stigma: holebi-zijn is geen ziekte.", url:"https://www.apaf.org/library-archives/galleries/lgbtq-leaders/history-of-dsm-and-homosexuality/" },
  { titel:"WHO/ICD: declassificatie homoseksualiteit (1990)", groep:"Wetenschappelijke onderbouwing", type:"Wetenschappelijk kader", beschrijving:"De Wereldgezondheidsorganisatie schrapte in 1990 homoseksualiteit als stoornis. ICD-11 verving 'transseksualisme' door 'genderincongruentie', niet langer een psychische stoornis. 17 mei is sindsdien IDAHOBIT.", url:"https://www.who.int/europe/news/item/17-05-2019-moving-one-step-closer-to-better-health-and-rights-for-transgender-people" },
  { titel:"FRA: EU LGBTIQ Survey III (2024)", groep:"Wetenschappelijke onderbouwing", type:"Wetenschappelijk kader", beschrijving:"Het EU-Grondrechtenagentschap brengt discriminatie van LGBTIQ-personen in kaart. Analyses tonen verhoogde drempels voor LGBTI+ personen met een beperking, onder meer in de gezondheidszorg.", url:"https://fra.europa.eu" },
  { titel:"Intersectionaliteit & dubbele kwetsbaarheid", groep:"Wetenschappelijke onderbouwing", type:"Wetenschappelijk kader", beschrijving:"Onderzoek toont aan dat LGBTQ+ personen met een verstandelijke beperking een dubbele minderheidsstresspositie innemen. Dit vraagt een intersectionele benadering in beleid en begeleiding.", url:"https://www.cavaria.be/kruispuntdenken-een-solidaire-en-inclusieve-beweging" },
  // ── Praktijk & vorming ──
  { titel:"Seksueel gezondheidsbeleid in zorgvoorzieningen", groep:"Praktijk & vorming", type:"Good Practice", beschrijving:"Richtlijnen voor het ontwikkelen van een expliciete visietekst en beleid rond seksualiteit en genderdiversiteit in residentiële zorgorganisaties.", url:"https://www.sensoa.be/beleid-uitwerken-rond-seksueel-gedrag" },
  { titel:"Affirmatieve zorgbenadering", groep:"Praktijk & vorming", type:"Praktijkkader", beschrijving:"Een affirmatieve aanpak erkent en bevestigt de seksuele en genderidentiteit van cliënten als waardevol en normaal. çavaria's project 'Op het kruispunt' biedt tools en visie specifiek voor LGBTI+ personen met een handicap.", url:"https://www.cavaria.be/op-het-kruispunt-voor-lgbti-personen-met-een-handicap" },
  { titel:"Vorming: LGBTQ+-inclusieve begeleiding", groep:"Praktijk & vorming", type:"Nascholing", beschrijving:"çavaria vorming (voorheen KliQ) biedt vormingen aan voor zorgprofessionals over seksuele en genderdiversiteit, afgestemd op de zorgsector.", url:"https://vorming.cavaria.be/kliq-vorming-en-begeleiding-rond-gender-en-seksuele-diversiteit" },
  { titel:"Handelingsverlegenheid bespreekbaar maken", groep:"Praktijk & vorming", type:"Teamtool", beschrijving:"Door kennis op te doen over LGBTQ+ personen en hun noden ervaren begeleiders minder handelingsverlegenheid. çavaria vorming (voorheen KliQ) voorziet vorming voor de welzijns- en zorgsector die hierop inzet.", url:"https://vorming.cavaria.be" },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────

const THEMA_COLORS = {
  "Seksualiteit & Identiteit": "teal",
  "Gender & Trans": "violet",
  "Beleid & Organisatie": "amber",
  "Netwerk & Ontmoeting": "rose",
};
const TYPE_COLORS = {
  "Begeleiding & Advies": "teal",
  "Ontmoeting & Activiteiten": "violet",
  "Info & Ondersteuning": "amber",
  "Anonieme steun": "rose",
  "Juridisch kader": "teal",
  "Good Practice": "violet",
  "Nascholing": "amber",
  "Wetenschappelijk kader": "slate",
  "Praktijkkader": "rose",
  "Teamtool": "teal",
  "Beleidskader": "amber",
};

function badge(label, color) {
  return `<span class="badge badge-${color || 'slate'}">${label}</span>`;
}

function extLink(url, label, colorClass) {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="ext-link ${colorClass}">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    ${label}
  </a>`;
}

// ── RENDER STATS ──────────────────────────────────────────────────────────────

if (document.getElementById('stats-grid')) {
  document.getElementById('stats-grid').innerHTML = [
    [TOOLS.length, 'Tools &amp; methodieken'],
    [ORGS.length, 'Organisaties in kaart'],
    [BELEID.length, 'Beleids- &amp; vormingskaders'],
  ].map(([n, label]) => `
    <div class="card stat-card">
      <div class="stat-n">${n}</div>
      <div class="stat-label">${label}</div>
    </div>
  `).join('');
}

// ── RENDER TOOLS ──────────────────────────────────────────────────────────────

function renderTools() {
  if (!document.getElementById('tools-list')) return;
  const q  = document.getElementById('tool-search').value.toLowerCase();
  const th = document.getElementById('tool-thema').value;
  const dg = document.getElementById('tool-doelgroep').value;

  const filtered = TOOLS.filter(t =>
    (th === "Alle thema's"      || t.thema     === th) &&
    (dg === "Alle doelgroepen"  || t.doelgroep === dg) &&
    (!q || t.title.toLowerCase().includes(q) || t.beschrijving.toLowerCase().includes(q))
  );

  document.getElementById('tool-count').textContent =
    `${filtered.length} resultaat${filtered.length !== 1 ? 'en' : ''}`;

  document.getElementById('tools-list').innerHTML = filtered.length ? filtered.map(t => `
    <div class="card visible">
      <div class="card-header">
        <div class="card-header-left">
          <div class="card-title">${t.title}</div>
          <div class="card-org">${t.org}</div>
        </div>
        <div class="card-badges">
          ${badge(t.thema, THEMA_COLORS[t.thema] || 'slate')}
          ${badge(t.doelgroep, 'slate')}
        </div>
      </div>
      <p class="card-desc">${t.beschrijving}</p>
      ${extLink(t.url, 'Bekijk tool', 'ext-link-teal')}
    </div>
  `).join('') : '<div class="empty">Geen resultaten gevonden. Pas je filters aan.</div>';
}
// Vooraf ingestelde filters via querystring (bvb. vanuit de Wegwijzer): /tools/?thema=sek&doelgroep=team
if (document.getElementById('tools-list')) {
  const TOOLS_THEMA_MAP = { sek: 'Seksualiteit & Identiteit', gen: 'Gender & Trans', bel: 'Beleid & Organisatie' };
  const TOOLS_DOELGROEP_MAP = { client: 'Cliënten', begeleider: 'Begeleiders', team: 'Organisaties' };
  const qp = new URLSearchParams(location.search);
  const th = TOOLS_THEMA_MAP[qp.get('thema')];
  const dg = TOOLS_DOELGROEP_MAP[qp.get('doelgroep')];
  if (th) document.getElementById('tool-thema').value = th;
  if (dg) document.getElementById('tool-doelgroep').value = dg;
  renderTools();
}

// ── RENDER ORGS ───────────────────────────────────────────────────────────────

function renderOrgs() {
  if (!document.getElementById('orgs-list')) return;
  const q     = document.getElementById('org-search').value.toLowerCase();
  const regio = document.getElementById('org-regio').value;
  const type  = document.getElementById('org-type').value;

  const filtered = ORGS.filter(o =>
    (regio === "Alle regio's" || o.regio === regio) &&
    (type  === "Alle types"   || o.type  === type) &&
    (!q || o.naam.toLowerCase().includes(q) || o.beschrijving.toLowerCase().includes(q))
  );

  document.getElementById('org-count').textContent =
    `${filtered.length} organisatie${filtered.length !== 1 ? 's' : ''}`;

  document.getElementById('orgs-list').innerHTML = filtered.map(o => `
    <div class="card visible">
      <div class="card-header" style="margin-bottom:6px;">
        <div class="card-title" style="font-size:16px;">${o.naam}</div>
        ${badge(o.type, TYPE_COLORS[o.type] || 'slate')}
      </div>
      <div class="org-regio">📍 ${o.regio}</div>
      <p class="card-desc" style="font-size:14px;">${o.beschrijving}</p>
      <div class="org-links">
        ${o.telefoon ? `<a class="org-phone" href="tel:${o.telefoon.replace(/\s/g,'')}" aria-label="Bel ${o.naam} op ${o.telefoon}"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.48 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span class="org-phone-num">${o.telefoon}</span></a>` : ''}
        ${extLink(o.url, 'Bezoek website', 'ext-link-violet')}
      </div>
    </div>
  `).join('') || '<div class="empty">Geen organisaties gevonden. Pas je filters aan.</div>';
}
// Vooraf ingestelde regio via querystring (bvb. vanuit de Wegwijzer): /organisaties/?regio=...
if (document.getElementById('orgs-list')) {
  const qp = new URLSearchParams(location.search);
  const regio = qp.get('regio');
  if (regio) document.getElementById('org-regio').value = regio;
  renderOrgs();
}

// ── RENDER POLICY (gegroepeerd per categorie) ─────────────────────────────────

const BELEID_GROEPEN = [
  { naam:"Praktijk & vorming", intro:"Concrete kaders, good practices en nascholing voor in het team." },
  { naam:"Rechten & wetgeving", intro:"Wat cliënten wettelijk mogen verwachten, en waartegen ze beschermd zijn." },
  { naam:"Vlaams zorgbeleid", intro:"Wat voorzieningen en begeleiders vanuit het zorgkader moeten waarmaken." },
  { naam:"Wetenschappelijke onderbouwing", intro:"De feiten en cijfers achter een affirmatieve, niet-pathologiserende benadering." },
];

if (document.getElementById('policy-list')) {
  document.getElementById('policy-list').innerHTML = BELEID_GROEPEN.map(groep => {
    const items = BELEID.filter(b => b.groep === groep.naam);
    if (!items.length) return '';
    return `
      <div class="policy-group">
        <div class="policy-group-head">
          <h2 class="policy-group-title">${groep.naam}</h2>
          <p class="policy-group-intro">${groep.intro}</p>
        </div>
        ${items.map(item => `
          <div class="card visible">
            <div class="card-header">
              <div class="card-title">${item.titel}</div>
              ${badge(item.type, TYPE_COLORS[item.type] || 'slate')}
            </div>
            <p class="card-desc">${item.beschrijving}</p>
            ${item.url ? extLink(item.url, 'Meer info', 'ext-link-amber') : ''}
          </div>
        `).join('')}
      </div>
    `;
  }).join('');
}

// ── MOBILE NAV TOGGLE ─────────────────────────────────────────────────────────

function toggleNav() {
  const navEl = document.querySelector('nav');
  const open = navEl.classList.toggle('open');
  document.getElementById('nav-toggle').setAttribute('aria-expanded', open ? 'true' : 'false');
}

// ── TOEGANKELIJKE MODUS ───────────────────────────────────────────────────────

const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Bewaar de gekozen modus zodat die behouden blijft bij het navigeren naar een
// andere pagina (elke pagina is een aparte HTML-load). Donker en toegankelijk
// sluiten elkaar uit, dus één sleutel met waarde 'dark', 'a11y' of niets volstaat.
function bewaarModus() {
  try {
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('rg-modus', 'dark');
    } else if (document.body.classList.contains('a11y')) {
      localStorage.setItem('rg-modus', 'a11y');
    } else {
      localStorage.removeItem('rg-modus');
    }
  } catch (e) { /* privémodus of storage uit: modus blijft binnen deze sessie werken */ }
}

function toggleA11y() {
  const on = document.body.classList.toggle('a11y');
  document.getElementById('a11y-fab').setAttribute('aria-pressed', on ? 'true' : 'false');
  // Toegankelijke en donkere modus sluiten elkaar uit
  if (on && document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    document.getElementById('dark-fab').setAttribute('aria-pressed', 'false');
  }
  bewaarModus();
}

function toggleFabs() {
  const stack = document.getElementById('fab-stack');
  const open = stack.classList.toggle('open');
  document.getElementById('fab-trigger').setAttribute('aria-expanded', open ? 'true' : 'false');
}
// Tik buiten de stack: sluit het uitgeklapte menu (enkel relevant op mobiel)
document.addEventListener('click', e => {
  const stack = document.getElementById('fab-stack');
  if (stack.classList.contains('open') && !stack.contains(e.target)) {
    stack.classList.remove('open');
    document.getElementById('fab-trigger').setAttribute('aria-expanded', 'false');
  }
});

function toggleDark() {
  const apply = () => {
    const on = document.body.classList.toggle('dark');
    document.getElementById('dark-fab').setAttribute('aria-pressed', on ? 'true' : 'false');
    if (on && document.body.classList.contains('a11y')) {
      document.body.classList.remove('a11y');
      document.getElementById('a11y-fab').setAttribute('aria-pressed', 'false');
    }
    bewaarModus();
  };
  if (document.startViewTransition && !prefersReduced()) {
    document.startViewTransition(apply);     // vloeiende crossfade van de hele pagina
  } else {
    apply();
  }
}

// Bij het laden van de pagina staat de opgeslagen modus al op de body (gezet door
// het inline script in de layout, vóór render — geen flits). Zet de aria-pressed
// van de fab-knoppen gelijk aan die toestand voor schermlezers en de 'aan'-stijl.
(function syncModusKnoppen() {
  const darkBtn = document.getElementById('dark-fab');
  const a11yBtn = document.getElementById('a11y-fab');
  if (darkBtn) darkBtn.setAttribute('aria-pressed', document.body.classList.contains('dark') ? 'true' : 'false');
  if (a11yBtn) a11yBtn.setAttribute('aria-pressed', document.body.classList.contains('a11y') ? 'true' : 'false');
})();

// ── OVER-LOGO: 3D-kanteling en glow volgen de cursor ──────────────────────────

(function () {
  const stage = document.querySelector('.about-logo-stage');
  const logo  = document.getElementById('aboutLogo');
  if (!stage || !logo) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const MAX = 16;
  let lastX = 0, lastY = 0, queued = false;
  const apply = () => {
    queued = false;
    const r = logo.getBoundingClientRect();
    if (!r.width) return;
    let dx = (lastX - (r.left + r.width / 2)) / (r.width / 2);
    let dy = (lastY - (r.top + r.height / 2)) / (r.height / 2);
    dx = Math.max(-1.6, Math.min(1.6, dx));
    dy = Math.max(-1.6, Math.min(1.6, dy));
    logo.style.setProperty('--rx', (dx * MAX).toFixed(2) + 'deg');
    logo.style.setProperty('--ry', (-dy * MAX).toFixed(2) + 'deg');
    logo.style.setProperty('--mx', ((dx * 0.5 + 0.5) * 100).toFixed(1) + '%');
    logo.style.setProperty('--my', ((dy * 0.5 + 0.5) * 100).toFixed(1) + '%');
    logo.classList.add('is-hover');
  };
  stage.addEventListener('pointermove', (e) => {
    lastX = e.clientX; lastY = e.clientY;
    if (!queued) { queued = true; requestAnimationFrame(apply); }
  });
  stage.addEventListener('pointerleave', () => {
    logo.style.setProperty('--rx', '0deg');
    logo.style.setProperty('--ry', '0deg');
    logo.classList.remove('is-hover');
  });
})();

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────

function revealCards() {
  const cards = document.querySelectorAll('.card:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60); // staggered per card
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  cards.forEach(card => observer.observe(card));
}

// Initial reveal
revealCards();

// ── TOPBAR SCROLL GLASS INTENSIFY ────────────────────────────────────────────

window.addEventListener('scroll', () => {
  const topbar = document.getElementById('topbar');
  if (window.scrollY > 10) {
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
}, { passive: true });

// ══════════════════════════════════════════════════════════════════════════════
//  NIEUWE FUNCTIONALITEIT — Snelle hulp · Wegwijzer · Casuïstiek · Taalgids ·
//  Team-zelfscan · Wetgevingstijdlijn
// ══════════════════════════════════════════════════════════════════════════════

const ICO_EXT  = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';
const ICO_ARROW = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
const ICO_REFRESH = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>';
const ICO_PHONE = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.48 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

function kort(s, n) { n = n || 148; return s.length > n ? s.slice(0, n).replace(/\s+\S*$/, '') + '…' : s; }

// ── Navigatiehelpers die de loop sluiten met de bestaande overzichten ──────────
function gaTools(thKey, dgKey) {
  const params = new URLSearchParams();
  if (thKey) params.set('thema', thKey);
  if (dgKey) params.set('doelgroep', dgKey);
  const qs = params.toString();
  location.href = '/tools/' + (qs ? '?' + qs : '');
}
function gaOrgs(regio) {
  location.href = '/organisaties/' + (regio ? '?regio=' + encodeURIComponent(regio) : '');
}
function gaPraktijk(tab) {
  location.href = '/praktijk/' + (tab ? '?tab=' + encodeURIComponent(tab) : '');
}
function gaContact() {
  location.href = '/over/#contact';
}

// ══════════════ SNELLE HULP ══════════════
const HELP_ICONS = {
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  rainbow: '<path d="M22 17a10 10 0 0 0-20 0"/><path d="M18 17a6 6 0 0 0-12 0"/><path d="M14 17a2 2 0 0 0-4 0"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  star: '<path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21l2.3-7.4-6-4.6h7.6z"/>',
};
const HULPLIJNEN = [
  { naam: 'Zelfmoordlijn 1813', desc: 'Bij gedachten aan zelfdoding — voor jezelf of voor iemand anders. Dag en nacht.', tel: '1813', chat: 'https://www.zelfmoord1813.be/ik-heb-hulp-nodig', kleur: 'rose', icon: 'heart' },
  { naam: 'Tele-Onthaal', desc: 'Een luisterend oor bij elke zorg of crisis, 24 uur op 24.', tel: '106', chat: 'https://www.tele-onthaal.be', kleur: 'teal', icon: 'chat' },
  { naam: 'Lumi', desc: 'De LGBTI+ infolijn van çavaria: gender, geaardheid, coming-out. Ook voor begeleiders en naasten. Telefoon en chat op vaste avonden (uren op lumi.be), mailen kan altijd.', tel: '0800 99 533', chat: 'https://lumi.be', kleur: 'violet', icon: 'rainbow' },
  { naam: '1712', desc: 'Bij geweld, misbruik of grensoverschrijdend gedrag. Gratis en discreet. Telefoon op werkdagen 9-18u; chat ma-do 13-17u en 18-22u, vr 13-17u.', tel: '1712', chat: 'https://www.1712.be', kleur: 'amber', icon: 'shield' },
  { naam: 'Awel', desc: 'Voor kinderen en jongeren met een vraag, verhaal of probleem. Telefoon 16-22u (wo en za vanaf 14u), chat 18-22u; niet op zon- en feestdagen.', tel: '102', chat: 'https://www.awel.be', kleur: 'teal', icon: 'star' },
];
function renderHelp() {
  const C = { rose: ['rgba(255,228,230,0.7)', 'var(--rose)'], teal: ['var(--teal-bg)', 'var(--teal)'], violet: ['var(--violet-bg)', 'var(--violet)'], amber: ['var(--amber-bg)', 'var(--amber)'] };
  document.getElementById('help-list').innerHTML = HULPLIJNEN.map(l => {
    const c = C[l.kleur] || C.teal;
    return `
    <div class="help-line">
      <div class="help-line-ic" style="background:${c[0]};color:${c[1]};">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${HELP_ICONS[l.icon] || HELP_ICONS.heart}</svg>
      </div>
      <div class="help-line-body">
        <div class="help-line-name">${l.naam}</div>
        <div class="help-line-desc">${l.desc}</div>
      </div>
      <div class="help-line-actions">
        ${l.tel ? `<a class="help-call" href="tel:${l.tel.replace(/\s/g, '')}" aria-label="Bel ${l.naam} op ${l.tel}">${ICO_PHONE}${l.tel}</a>` : ''}
        ${l.chat ? `<a class="help-chat" href="${l.chat}" target="_blank" rel="noopener noreferrer">Chat ${ICO_EXT}</a>` : ''}
      </div>
    </div>`;
  }).join('');
}
let helpReturnFocus = null;
function openHelp() {
  const ov = document.getElementById('help-overlay');
  ov.classList.add('open'); ov.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  helpReturnFocus = document.activeElement;
  const btn = ov.querySelector('.help-close'); if (btn) btn.focus();
}
function closeHelp() {
  const ov = document.getElementById('help-overlay');
  ov.classList.remove('open'); ov.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (helpReturnFocus && helpReturnFocus.focus) helpReturnFocus.focus();
}
document.getElementById('help-overlay').addEventListener('click', e => { if (e.target.id === 'help-overlay') closeHelp(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.getElementById('help-overlay').classList.contains('open')) closeHelp(); });

let funReturnFocus = null;
function openFunFact(btn) {
  const woord = btn.getAttribute('data-woord');
  const t = TERMEN.find(x => x.woord === woord);
  if (!t) return;
  document.getElementById('fun-title').textContent = t.woord;
  document.getElementById('fun-body').textContent = t.tip;
  const ov = document.getElementById('fun-overlay');
  ov.classList.add('open'); ov.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  funReturnFocus = document.activeElement;
  const c = ov.querySelector('.help-close'); if (c) c.focus();
}
function closeFunFact() {
  const ov = document.getElementById('fun-overlay');
  ov.classList.remove('open'); ov.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (funReturnFocus && funReturnFocus.focus) funReturnFocus.focus();
}
document.getElementById('fun-overlay').addEventListener('click', e => { if (e.target.id === 'fun-overlay') closeFunFact(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.getElementById('fun-overlay').classList.contains('open')) closeFunFact(); });

let doneerReturnFocus = null;
function openDoneer() {
  const ov = document.getElementById('doneer-overlay');
  ov.classList.add('open'); ov.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  doneerReturnFocus = document.activeElement;
  const c = ov.querySelector('.help-close'); if (c) c.focus();
}
function closeDoneer() {
  const ov = document.getElementById('doneer-overlay');
  ov.classList.remove('open'); ov.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (doneerReturnFocus && doneerReturnFocus.focus) doneerReturnFocus.focus();
}
document.getElementById('doneer-overlay').addEventListener('click', e => { if (e.target.id === 'doneer-overlay') closeDoneer(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.getElementById('doneer-overlay').classList.contains('open')) closeDoneer(); });

// ══════════════ PRAKTIJK: subnavigatie ══════════════
function showPraktijk(tab) {
  ['casus', 'taal', 'scan', 'quiz'].forEach(t => {
    const seg = document.getElementById('seg-' + t);
    const pan = document.getElementById('panel-' + t);
    if (!seg || !pan) return;
    seg.classList.toggle('active', t === tab);
    seg.setAttribute('aria-selected', t === tab ? 'true' : 'false');
    pan.classList.toggle('active', t === tab);
  });
  if (tab === 'quiz') renderQuizStart();
}
// Vooraf ingesteld tabblad via querystring (bvb. vanuit de Wegwijzer): /praktijk/?tab=taal
if (document.getElementById('seg-casus')) {
  const qp = new URLSearchParams(location.search);
  showPraktijk(qp.get('tab') || 'casus');
}

// ══════════════ DE WEGWIJZER ══════════════
const WW_ICONS = {
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  badge: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M14 9h3"/><path d="M14 12h3"/><path d="M7 16h10"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
  gender: '<circle cx="12" cy="9" r="5"/><line x1="12" y1="14" x2="12" y2="22"/><line x1="9" y1="19" x2="15" y2="19"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  spark: '<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
};
const WW_STAPPEN = [
  {
    key: 'wie', vraag: 'Voor wie zoek je iets?', opties: [
      { val: 'client', t: 'Een cliënt', d: 'Iets toegankelijks om samen te bekijken of door te geven.', icon: 'user' },
      { val: 'begeleider', t: 'Mezelf als begeleider', d: 'Methodieken en achtergrond om sterker in mijn schoenen te staan.', icon: 'badge' },
      { val: 'team', t: 'Mijn team of organisatie', d: 'Beleid, vorming en structurele inbedding.', icon: 'users' },
    ]
  },
  {
    key: 'wat', vraag: 'Waar gaat het vooral over?', opties: [
      { val: 'seksualiteit', t: 'Seksualiteit & relaties', d: 'Verliefdheid, intimiteit, grenzen en consent.', icon: 'heart' },
      { val: 'gender', t: 'Gender & transgender', d: 'Genderidentiteit, transitie, de juiste naam.', icon: 'gender' },
      { val: 'taal', t: 'Taal & begrippen', d: 'De juiste woorden vinden om erover te praten.', icon: 'book' },
      { val: 'situatie', t: 'Een concrete situatie', d: 'Ik zit met een specifiek moment in de leefgroep.', icon: 'spark' },
      { val: 'beleid', t: 'Beleid opzetten', d: 'Een visie of kader uitwerken voor de werking.', icon: 'doc' },
      { val: 'doorverwijzen', t: 'Iemand doorverwijzen', d: 'Een organisatie of aanspreekpunt vinden.', icon: 'compass' },
    ]
  },
  {
    key: 'regio', vraag: 'In welke regio?', optioneel: true, opties: [
      { val: 'Heel Vlaanderen', t: 'Maakt niet uit', d: 'Toon ook Vlaanderenbrede werkingen.', icon: 'globe' },
      { val: 'Antwerpen', t: 'Antwerpen', icon: 'pin' },
      { val: 'Gent (Oost-Vlaanderen)', t: 'Oost-Vlaanderen', icon: 'pin' },
      { val: 'Leuven (Vlaams-Brabant)', t: 'Vlaams-Brabant', icon: 'pin' },
      { val: 'West-Vlaanderen', t: 'West-Vlaanderen', icon: 'pin' },
      { val: 'Limburg', t: 'Limburg', icon: 'pin' },
      { val: 'Brussel', t: 'Brussel', icon: 'pin' },
    ]
  },
];
const WW_ORDER = ['wie', 'wat', 'regio'];
const WW_LABELS = {
  wie: { client: 'Een cliënt', begeleider: 'Als begeleider', team: 'Team of organisatie' },
  wat: { seksualiteit: 'Seksualiteit & relaties', gender: 'Gender & transgender', taal: 'Taal & begrippen', situatie: 'Een concrete situatie', beleid: 'Beleid opzetten', doorverwijzen: 'Doorverwijzen' },
  regio: { 'Heel Vlaanderen': 'Heel Vlaanderen', 'Antwerpen': 'Antwerpen', 'Gent (Oost-Vlaanderen)': 'Oost-Vlaanderen', 'Leuven (Vlaams-Brabant)': 'Vlaams-Brabant', 'West-Vlaanderen': 'West-Vlaanderen', 'Limburg': 'Limburg', 'Brussel': 'Brussel' },
};
let wwState = { antw: {}, gestart: false };

function wwFlow() {
  const f = ['wie', 'wat'];
  if (wwState.antw.wat && !['taal', 'situatie'].includes(wwState.antw.wat)) f.push('regio');
  return f;
}
function wwHuidige() {
  for (const k of wwFlow()) if (!wwState.antw[k]) return k;
  return null;
}
function wwStart() { wwState.gestart = true; renderWegwijzer(); }
function wwKies(key, val) {
  wwState.antw[key] = val;
  const i = WW_ORDER.indexOf(key);
  WW_ORDER.slice(i + 1).forEach(k => delete wwState.antw[k]);
  renderWegwijzer();
}
function wwGaNaar(key) {
  // Spring terug naar een eerdere stap (via de keuze-chips): wis die stap en alles erna
  const i = WW_ORDER.indexOf(key);
  WW_ORDER.slice(i).forEach(k => delete wwState.antw[k]);
  renderWegwijzer();
}
function wwTerug() {
  const f = wwFlow();
  const huidige = wwHuidige();
  if (huidige === f[0]) { wwState.gestart = false; renderWegwijzer(); return; }
  for (let i = f.length - 1; i >= 0; i--) { if (wwState.antw[f[i]]) { delete wwState.antw[f[i]]; break; } }
  renderWegwijzer();
}
function wwReset() { wwState = { antw: {}, gestart: true }; renderWegwijzer(); }

// Aantal matches voorspellen voor een mogelijke keuze (live preview op de optieknoppen)
function renderWegwijzer() {
  const shell = document.getElementById('ww-shell');
  if (!shell) return;

  // Intro-scherm vóór de start
  if (!wwState.gestart && !Object.keys(wwState.antw).length) {
    shell.innerHTML = `
      <div class="ww-intro">
        <div class="ww-intro-glow"></div>
        <div class="ww-intro-ic">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
        </div>
        <div class="ww-intro-eyebrow">PERSOONLIJKE KEUZEHULP</div>
        <h2 class="ww-intro-title">Niet zeker waar te beginnen?</h2>
        <p class="ww-intro-sub">Beantwoord drie korte vragen en de wegwijzer stelt een selectie samen op maat van jouw situatie: de meest relevante tools, organisaties en kaders. Klaar in minder dan een minuut.</p>
        <div class="ww-intro-steps">
          <div class="ww-intro-step"><span class="ww-intro-step-n">1</span> Voor wie?</div>
          <span class="ww-intro-arrow">${ICO_ARROW}</span>
          <div class="ww-intro-step"><span class="ww-intro-step-n">2</span> Welk thema?</div>
          <span class="ww-intro-arrow">${ICO_ARROW}</span>
          <div class="ww-intro-step"><span class="ww-intro-step-n">3</span> Welke regio?</div>
        </div>
        <button class="ww-cta ww-cta-primary ww-intro-btn" onclick="wwStart()">Start de wegwijzer ${ICO_ARROW}</button>
      </div>`;
    return;
  }

  const huidige = wwHuidige();
  if (!huidige) { shell.innerHTML = wwResultaatHTML(); wwAnimeerResultaat(); return; }
  const stap = WW_STAPPEN.find(s => s.key === huidige);
  const flow = wwFlow();
  const idx = flow.indexOf(huidige);

  // Stappen-header met genummerde cirkels
  const stepper = flow.map((k, i) => {
    const status = i < idx ? 'done' : i === idx ? 'current' : '';
    const ic = i < idx
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>'
      : (i + 1);
    return `<div class="ww-step ${status}">
        <button class="ww-step-dot" ${i < idx ? `onclick="wwGaNaar('${k}')"` : 'disabled'}>${ic}</button>
        ${i < flow.length - 1 ? `<span class="ww-step-line ${i < idx ? 'done' : ''}"></span>` : ''}
      </div>`;
  }).join('');

  // Reeds gemaakte keuzes als bewerkbare chips
  const chips = flow.filter(k => wwState.antw[k]).map(k =>
    `<button class="ww-chip" onclick="wwGaNaar('${k}')" title="Wijzig deze keuze">
      <span class="ww-chip-k">${k === 'wie' ? 'Wie' : k === 'wat' ? 'Thema' : 'Regio'}</span>
      ${WW_LABELS[k][wwState.antw[k]] || wwState.antw[k]}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
    </button>`).join('');

  shell.innerHTML = `
    <div class="ww-stepper">${stepper}</div>
    ${chips ? `<div class="ww-chips">${chips}</div>` : ''}
    <div class="ww-stage" key="${huidige}">
      <div class="ww-steplabel">STAP ${idx + 1} VAN ${flow.length}${stap.optioneel ? ' · OPTIONEEL' : ''}</div>
      <div class="ww-question">${stap.vraag}</div>
      <div class="ww-options">
        ${stap.opties.map((o, oi) => {
          return `
        <button class="ww-option" style="animation-delay:${oi * 45}ms" onclick="wwKies('${stap.key}','${o.val}')">
          <span class="ww-option-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${WW_ICONS[o.icon] || ''}</svg></span>
          <span class="ww-option-body"><span class="ww-option-t">${o.t}</span>${o.d ? `<span class="ww-option-d">${o.d}</span>` : ''}</span>
          <span class="ww-option-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="9 18 15 12 9 6"/></svg></span>
        </button>`;
        }).join('')}
      </div>
      <button class="ww-back" onclick="wwTerug()"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> ${idx > 0 ? 'Vorige stap' : 'Terug naar start'}</button>
    </div>
  `;
}
function wwTools() {
  const a = wwState.antw;
  let dg;
  if (a.wie === 'client') dg = ['Cliënten', 'Cliënten & Begeleiders'];
  else if (a.wie === 'begeleider') dg = ['Begeleiders', 'Cliënten & Begeleiders'];
  else dg = ['Organisaties', 'Begeleiders', 'Cliënten & Begeleiders'];
  let th = a.wat === 'seksualiteit' ? 'Seksualiteit & Identiteit' : a.wat === 'gender' ? 'Gender & Trans' : a.wat === 'beleid' ? 'Beleid & Organisatie' : null;
  let res = TOOLS.filter(t => dg.includes(t.doelgroep) && (!th || t.thema === th));
  if (!res.length) res = TOOLS.filter(t => !th || t.thema === th);
  return res.slice(0, 4);
}
function wwOrgs() {
  const a = wwState.antw;
  const regio = a.regio;
  let res = (regio && regio !== 'Heel Vlaanderen') ? ORGS.filter(o => o.regio === regio || o.regio === 'Heel Vlaanderen') : ORGS.slice();
  const pref = a.wie === 'client' ? ['Ontmoeting & Activiteiten', 'Anonieme steun'] : ['Begeleiding & Advies', 'Info & Ondersteuning'];
  res.sort((x, y) => (pref.includes(y.type) ? 1 : 0) - (pref.includes(x.type) ? 1 : 0));
  return res.slice(0, 4);
}
function wwBeleid() {
  const a = wwState.antw;
  if (a.wat === 'beleid') return BELEID.filter(b => b.groep === 'Vlaams zorgbeleid' || b.groep === 'Praktijk & vorming').slice(0, 3);
  if (a.wie === 'team') return BELEID.filter(b => b.groep === 'Praktijk & vorming' || b.groep === 'Rechten & wetgeving').slice(0, 3);
  return BELEID.filter(b => b.groep === 'Rechten & wetgeving').slice(0, 2);
}
function wwToolCard(t) {
  return `<div class="ww-mini-card">
    <div class="ww-mini-top"><div><div class="ww-mini-t">${t.title}</div><div class="ww-mini-org">${t.org}</div></div>${badge(t.doelgroep, 'slate')}</div>
    <div class="ww-mini-d">${kort(t.beschrijving)}</div>
    ${extLink(t.url, 'Bekijk tool', 'ext-link-teal')}
  </div>`;
}
function wwOrgCard(o) {
  return `<div class="ww-mini-card">
    <div class="ww-mini-top"><div class="ww-mini-t">${o.naam}</div>${badge(o.type, TYPE_COLORS[o.type] || 'slate')}</div>
    <div class="ww-mini-org">📍 ${o.regio}</div>
    <div class="ww-mini-d">${kort(o.beschrijving)}</div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;">
      ${o.telefoon ? `<a class="org-phone" href="tel:${o.telefoon.replace(/\s/g, '')}">${ICO_PHONE}<span>${o.telefoon}</span></a>` : ''}
      ${extLink(o.url, 'Website', 'ext-link-violet')}
    </div>
  </div>`;
}
function wwBeleidCard(b) {
  return `<div class="ww-mini-card">
    <div class="ww-mini-top"><div class="ww-mini-t">${b.titel}</div>${badge(b.type, TYPE_COLORS[b.type] || 'slate')}</div>
    <div class="ww-mini-d">${kort(b.beschrijving)}</div>
    ${b.url ? extLink(b.url, 'Meer info', 'ext-link-amber') : ''}
  </div>`;
}
function wwResultaatHTML() {
  const a = wwState.antw;
  const WIE = { client: 'een cliënt', begeleider: 'jezelf als begeleider', team: 'je team of organisatie' };
  const WAT = { seksualiteit: 'seksualiteit en relaties', gender: 'gender en transgender', taal: 'taal en begrippen', situatie: 'een concrete situatie', beleid: 'beleid opzetten', doorverwijzen: 'iemand doorverwijzen' };
  const regio = (a.regio && a.regio !== 'Heel Vlaanderen') ? a.regio : '';
  const tools = a.wat !== 'doorverwijzen' ? wwTools() : [];
  const orgs = wwOrgs();
  const beleid = wwBeleid();
  const totaal = tools.length + orgs.length + beleid.length;

  let groups = '';
  if (tools.length) groups += `<div class="ww-result-group"><div class="ww-result-group-t"><span class="ww-rg-ic" style="background:var(--teal-bg);color:var(--teal);"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></span>Aanbevolen tools <span class="ww-rg-count">${tools.length}</span></div><div class="ww-mini">${tools.map(wwToolCard).join('')}</div></div>`;
  if (orgs.length) groups += `<div class="ww-result-group"><div class="ww-result-group-t"><span class="ww-rg-ic" style="background:var(--violet-bg);color:var(--violet);"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>Organisaties${regio ? ` in ${regio}` : ''} <span class="ww-rg-count">${orgs.length}</span></div><div class="ww-mini">${orgs.map(wwOrgCard).join('')}</div></div>`;
  if (beleid.length) groups += `<div class="ww-result-group"><div class="ww-result-group-t"><span class="ww-rg-ic" style="background:var(--amber-bg);color:var(--amber);"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>Beleid &amp; kaders <span class="ww-rg-count">${beleid.length}</span></div><div class="ww-mini">${beleid.map(wwBeleidCard).join('')}</div></div>`;
  if (!groups) groups = `<div class="ww-empty">We vonden geen directe match. Bekijk gerust de volledige overzichten via de knoppen hieronder.</div>`;

  // Samenvatting van de keuzes als chips
  const samenvatting = wwFlow().filter(k => a[k]).map(k =>
    `<span class="ww-sum-chip">${WW_LABELS[k][a[k]] || a[k]}</span>`).join('<span class="ww-sum-sep">·</span>');

  const thKey = a.wat === 'seksualiteit' ? 'sek' : a.wat === 'gender' ? 'gen' : a.wat === 'beleid' ? 'bel' : '';
  let ctas = [];
  if (a.wat === 'taal') ctas.push(`<button class="ww-cta ww-cta-primary" onclick="gaPraktijk('taal')">Open de taalgids ${ICO_ARROW}</button>`);
  if (a.wat === 'situatie') ctas.push(`<button class="ww-cta ww-cta-primary" onclick="gaPraktijk('casus')">Bekijk de casuïstiek ${ICO_ARROW}</button>`);
  ctas.push(`<button class="ww-cta ${ctas.length ? 'ww-cta-ghost' : 'ww-cta-primary'}" onclick="gaTools('${thKey}','${a.wie}')">Alle tools bekijken</button>`);
  ctas.push(`<button class="ww-cta ww-cta-ghost" onclick="gaOrgs('${regio}')">Alle organisaties</button>`);
  if (a.wie === 'team' || a.wat === 'beleid') ctas.push(`<button class="ww-cta ww-cta-ghost" onclick="gaPraktijk('scan')">Doe de team-zelfscan</button>`);

  return `
    <div class="ww-result">
      <div class="ww-result-hero">
        <div class="ww-result-hero-glow"></div>
        <div class="ww-result-badge"><span class="ww-result-check"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>JOUW WEGWIJZER</div>
        <div class="ww-result-title">${totaal} suggesties op maat</div>
        <div class="ww-result-sub">Voor ${WIE[a.wie] || 'jou'}, rond ${WAT[a.wat] || 'dit thema'}${regio ? ` in ${regio}` : ''}. Dit is een vertrekpunt, bekijk gerust ook de volledige overzichten.</div>
        ${samenvatting ? `<div class="ww-sum">${samenvatting}</div>` : ''}
      </div>
      ${groups}
      <div class="ww-cta-row">${ctas.join('')}</div>
      <button class="ww-back" onclick="wwReset()" style="margin-top:24px;">${ICO_REFRESH} Opnieuw beginnen</button>
    </div>
  `;
}

function wwAnimeerResultaat() {
  if (prefersReduced()) return;
  const groups = document.querySelectorAll('#ww-shell .ww-result-group, #ww-shell .ww-cta-row');
  groups.forEach((g, i) => {
    g.style.opacity = '0';
    g.style.transform = 'translateY(14px)';
    g.style.transition = 'opacity .5s ease, transform .5s cubic-bezier(.22,.61,.36,1)';
    setTimeout(() => { g.style.opacity = '1'; g.style.transform = 'none'; }, 180 + i * 130);
  });
}

// ══════════════ CASUÏSTIEK ══════════════
const CASUS_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';
const CASUS = [
  {
    tag: 'Gender & identiteit', titel: 'Een cliënt vertelt je in vertrouwen dat die zich geen jongen voelt.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Een cliënt die dit deelt, zet een grote stap en toont vertrouwen. Het gaat zelden om een impuls: vaak ging er een lang, stil proces aan vooraf. Jouw eerste reactie bepaalt mee of die deur openblijft of voorgoed dichtgaat.' },
      { kop: 'Wat kan je doen?', tekst: 'Luister zonder te sturen of te minimaliseren, en bevestig het vertrouwen ("dank je dat je dit met mij deelt"). Leg niet meteen labels of oplossingen op. Vraag hoe de cliënt zelf aangesproken en benaderd wil worden, bvb. met welke naam of welk voornaamwoord, en respecteer dat. Ga na wat de cliënt nu nodig heeft: gehoord worden, info, of contact met lotgenoten.' },
      { kop: 'Waar let je op?', tekst: 'Respecteer het tempo en de privacy: het is niet aan jou om dit verder te vertellen. Bespreek samen wie wat mag weten. Vermijd aannames over "zekerheid" of over een transitie — dat hoeft nu niet vast te liggen. Schakel bij twijfel een gespecialiseerde dienst in, voor de cliënt én voor jezelf.' },
    ],
    chips: [{ l: 'Transgender Infopunt', url: 'https://www.transgenderinfo.be' }, { l: 'Meer weten over transgender zijn', url: 'https://cavaria.be/tools-lgbti-handicap' }, { l: 'Naar de taalgids', go: 'taal' }],
  },
  {
    tag: 'Seksualiteit & relaties', titel: 'Twee huisgenoten van hetzelfde geslacht worden verliefd op elkaar.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Verliefdheid tussen cliënten is in de eerste plaats iets moois en gewoon. Bij koppels van hetzelfde geslacht ontstaat soms extra terughoudendheid bij begeleiding of familie — terwijl het recht op relaties en intimiteit voor iedereen gelijk is.' },
      { kop: 'Wat kan je doen?', tekst: 'Benader het zoals je elke prille relatie zou benaderen: met ruimte, respect en aandacht voor wederzijdse toestemming. Toets of beide personen het even graag willen en of ze begrijpen wat ze willen. Bied ondersteuning op maat — info over relaties en seksualiteit in toegankelijke taal kan helpen.' },
      { kop: 'Waar let je op?', tekst: 'Behandel het koppel niet strenger dan een man-vrouwkoppel: dat zou een vorm van ongelijke behandeling zijn. Hou rekening met draagkracht en ontwikkelingsniveau, niet met het geslacht van de partner. Het Sensoa Vlaggensysteem helpt om gezond gedrag van grensoverschrijdend gedrag te onderscheiden, zonder te vertrekken vanuit een verbod.' },
    ],
    chips: [{ l: 'Sensoa Vlaggensysteem', url: 'https://www.sensoa.be/vlaggensysteem-hoe-reageren-op-seksueel-grensoverschrijdend-gedrag' }, { l: 'De Roze Pagina', url: 'https://www.cavaria.be/derozepagina' }, { l: 'allesoverseks.be', url: 'https://www.allesoverseks.be' }],
  },
  {
    tag: 'Team & cultuur', titel: "Een collega maakt geregeld grappen over 'holebi's' in de leefgroep.",
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Ook "onschuldig" bedoelde grappen bepalen het klimaat. Voor een cliënt die worstelt met hun identiteit is zo\'n opmerking een signaal: hier kan ik beter zwijgen. Stilte van de rest van het team wordt dan al snel als instemming gelezen.' },
      { kop: 'Wat kan je doen?', tekst: 'Benoem het, liefst rustig en concreet, bvb. "ik merk dat zulke grappen hier vaak vallen — ik denk niet dat ze voor iedereen onschuldig overkomen." Maak het bespreekbaar in team of intervisie in plaats van enkel onder vier ogen, en koppel het aan de visie van de organisatie als die er is.' },
      { kop: 'Waar let je op?', tekst: 'Het gaat niet om iemand wegzetten als "fout", maar om het effect op cliënten centraal te zetten. Handelingsverlegenheid is vaak de echte oorzaak: een gedeelde visie en vorming werken duurzamer dan een terechtwijzing alleen.' },
    ],
    chips: [{ l: 'Doe de team-zelfscan', go: 'scan' }, { l: 'çavaria vorming', url: 'https://vorming.cavaria.be' }, { l: 'Naar beleid & vorming', go: 'beleid' }],
  },
  {
    tag: 'Netwerk & deontologie', titel: "De ouders van een cliënt willen niet dat hun zoon 'zo' is en vragen jou er niet op in te gaan.",
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Hier botsen twee dingen: de bezorgdheid (of het ongemak) van het netwerk en het zelfbeschikkingsrecht van de cliënt. Als begeleider sta je in de eerste plaats naast de cliënt, niet naast de wens om iets weg te duwen.' },
      { kop: 'Wat kan je doen?', tekst: 'Erken de bezorgdheid van de ouders zonder de identiteit van de cliënt te ontkennen. Leg uit dat negeren of verbieden de cliënt niet "verandert", maar wel schaadt en het vertrouwen breekt. Zoek waar mogelijk naar dialoog, geef ouders correcte info en betrek desnoods een neutrale dienst.' },
      { kop: 'Waar let je op?', tekst: 'Je bent gebonden aan het belang en de autonomie van de cliënt, en aan het discriminatieverbod. Je hoeft niet mee te gaan in een vraag die ingaat tegen de rechten van de cliënt. Bewaak tegelijk de relatie met het netwerk: kies voor verbinding, niet voor een loopgravenstrijd.' },
    ],
    chips: [{ l: 'Rechten & wetgeving', go: 'beleid' }, { l: 'Lumi (advies)', url: 'https://lumi.be' }, { l: 'Naar de taalgids', go: 'taal' }],
  },
  {
    tag: 'Gender & respect', titel: 'Een transgender cliënte wil voortaan met een andere naam aangesproken worden.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'De juiste naam en het juiste voornaamwoord gebruiken is een van de meest concrete vormen van respect. Telkens de oude naam gebruiken — deadnaming, ook per ongeluk — doet pijn en ondermijnt het opgebouwde vertrouwen.' },
      { kop: 'Wat kan je doen?', tekst: 'Gebruik vanaf nu de naam en aanspreking die zij wenst, ook onderling in het team en in de dagelijkse omgang. Maak praktische afspraken: hoe gaan we om met het dossier, etiketten, de brievenbus? Maak je een fout? Corrigeer kort, verontschuldig je zonder overdrijven en ga verder.' },
      { kop: 'Waar let je op?', tekst: 'De officiële naamswijziging is wettelijk eenvoudiger geworden, maar respect hangt daar niet van af: je kan de gewenste naam meteen gebruiken. Bewaak de privacy rond de oude naam en bespreek met haar wie wat hoeft te weten.' },
    ],
    chips: [{ l: 'Transgender Infopunt', url: 'https://www.transgenderinfo.be' }, { l: 'Transgenderwet (2017)', go: 'beleid' }, { l: 'Naar de taalgids', go: 'taal' }],
  },
  {
    tag: 'Grenzen & consent', titel: 'Een cliënt stelt seksueel getint gedrag dat je doet twijfelen over de grens.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Seksueel gedrag bij cliënten is normaal — maar niet elk gedrag is oké. Het is niet altijd makkelijk in te schatten of iets gezond, experimenteel of grensoverschrijdend is, zeker bij een verstandelijke beperking. Vertrekken vanuit paniek of een verbod helpt niet.' },
      { kop: 'Wat kan je doen?', tekst: 'Gebruik een gedeeld kader in plaats van je onderbuik. Het Sensoa Vlaggensysteem weegt gedrag op zes criteria (bvb. wederzijdse toestemming, vrijwilligheid en gelijkwaardigheid) en geeft een gepaste reactie via kleuren. Bespreek twijfelgevallen in team zodat je niet alleen oordeelt.' },
      { kop: 'Waar let je op?', tekst: 'Vermijd dat de geaardheid of genderidentiteit van de cliënt je oordeel kleurt: weeg het gedrag, niet de persoon. Reageer proportioneel — een groene of gele vlag vraagt iets anders dan een rode. Leg afspraken en signalen vast in het cliëntdossier of beleid.' },
    ],
    chips: [{ l: 'Sensoa Vlaggensysteem', url: 'https://www.sensoa.be/vlaggensysteem-hoe-reageren-op-seksueel-grensoverschrijdend-gedrag' }, { l: 'Vlaggensysteem voor Volwassenen', url: 'https://www.sensoa.be/materiaal/sensoa-vlaggensysteem-voor-volwassenen-boek' }, { l: 'Naar beleid & vorming', go: 'beleid' }],
  },
  {
    tag: 'Identiteit & lichaam', titel: 'Een intersekse cliënt voelt zich onzeker over het eigen lichaam en weet niet bij wie die terechtkan.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Sommige mensen worden geboren met lichaamskenmerken die niet eenduidig "mannelijk" of "vrouwelijk" zijn: dat noemen we intersekse. Het is geen ziekte en geen keuze, maar een natuurlijke variatie. In de praktijk merk je het vaak niet aan grote vragen, maar aan kleine signalen: een cliënt die zich ongemakkelijk voelt bij lichamelijke zorg, die opvalt of vermijdt in gedeelde doucheruimtes, of die zich afvraagt waarom die "anders" is dan de anderen. Vaak werd er thuis of in eerdere voorzieningen met stilte over omgegaan.' },
      { kop: 'Wat kan je doen?', tekst: 'Zorg eerst voor gewone, praktische veiligheid: privacy bij wassen en aankleden, en respect voor schaamtegevoelens, net zoals bij elke cliënt. Beantwoord vragen eerlijk en in eenvoudige taal en stel gerust dat er niets "mis" is met hun lichaam. Vraag de cliënt hoe die zichzelf ziet en hoe die aangesproken wil worden, en respecteer dat. Maak duidelijk dat die bij jou of een vast aanspreekpunt terechtkan, zodat die er niet alleen mee blijft zitten.' },
      { kop: 'Waar let je op?', tekst: 'Behandel het lichaam van de cliënt niet als een geheim of een probleem dat "opgelost" moet worden, want dat versterkt net de schaamte. Praat er niet over met collega\'s of het netwerk zonder dat het nodig is en zonder afstemming: medische info hierover is strikt vertrouwelijk. Heeft de cliënt medische vragen of klachten? Verwijs dan via de gewone zorgkanalen door naar een arts, en schakel bij twijfel een gespecialiseerde dienst in voor jezelf én voor hen.' },
    ],
    chips: [{ l: 'Lumi (advies)', url: 'https://lumi.be' }, { l: 'çavaria', url: 'https://www.cavaria.be' }, { l: 'Naar de taalgids', go: 'taal' }],
  },
  {
    tag: 'Relaties & autonomie', titel: 'Begeleiding of familie maakt zich zorgen omdat een cliënt nooit een lief lijkt te willen.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Er leeft vaak een stille aanname dat iedereen een relatie en seks hoort te willen. Wie daar geen interesse in heeft, wordt al snel als "een probleem" gezien. Maar weinig of geen romantische of seksuele aantrekking voelen is een geldige variatie: aseksualiteit. Het hoeft niet gerepareerd te worden.' },
      { kop: 'Wat kan je doen?', tekst: 'Onderzoek eerst of er echt een zorg is, of vooral een verwachting van de omgeving. Vraag de cliënt zelf, zonder te sturen, hoe die zich voelt en wat die wil. Geef ruimte voor het antwoord "ik hoef dat niet" en behandel dat als een volwaardige keuze. Onderscheid een vrije keuze van een drempel die wél ondersteuning vraagt, bvb. onzekerheid of een nare ervaring.' },
      { kop: 'Waar let je op?', tekst: 'Duw geen relatie of seksualiteit op als de cliënt daar niet om vraagt: dat is geen goede zorg maar een vorm van druk. Tegelijk: geen interesse tonen mag nooit een excuus zijn om het thema seksualiteit helemaal te vermijden. Blijf beschikbaar voor vragen, op het tempo van de cliënt.' },
    ],
    chips: [{ l: 'De Roze Pagina', url: 'https://www.cavaria.be/derozepagina' }, { l: 'Naar de taalgids', go: 'taal' }, { l: 'Doe de team-zelfscan', go: 'scan' }],
  },
  {
    tag: 'Netwerk & cultuur', titel: 'Een cliënt zit klem tussen het eigen geloof of cultuur en de eigen geaardheid.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Geloof, cultuur en familie zijn voor veel cliënten een bron van houvast en verbondenheid. Wanneer de eigen geaardheid of genderidentiteit daarmee lijkt te botsen, ontstaat een pijnlijk innerlijk conflict: kiezen tussen wie ik ben en waar ik bij hoor. Dat kan zwaar wegen op het welzijn.' },
      { kop: 'Wat kan je doen?', tekst: 'Erken beide kanten zonder partij te kiezen tegen de identiteit of het geloof van de cliënt. Vermijd om geloof of cultuur weg te zetten als "het probleem". Help de cliënt zoeken naar wat voor hen klopt, op hun tempo, en wijs op het bestaan van mensen en groepen die geloof en LGBTQ+-zijn wél samenbrengen. Soms is enkel gehoord en niet veroordeeld worden al veel.' },
      { kop: 'Waar let je op?', tekst: 'Het is niet aan jou om voor de cliënt te beslissen wat die met het eigen geloof of de eigen coming-out doet: bewaak hun autonomie. Wees alert voor signalen van uitsluiting of druk vanuit het netwerk, en schat de veiligheid in. Schakel bij een vastgelopen of onveilige situatie een gespecialiseerde dienst in.' },
    ],
    chips: [{ l: 'Lumi (advies)', url: 'https://lumi.be' }, { l: 'çavaria', url: 'https://www.cavaria.be' }, { l: 'Netwerk & organisaties', go: 'orgs' }],
  },
  {
    tag: 'Zelfaanvaarding & welzijn', titel: 'Een cliënt aanvaardt de eigen geaardheid niet en vindt dat er iets mis is met hen.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Wat een cliënt over zichzelf zegt ("dit is niet natuurlijk", "er is iets mis met mij") is vaak niet hun eigen overtuiging, maar een echo van wat de omgeving hen jarenlang vertelde. Dat heet geïnternaliseerde stigma. Het doet pijn en kan leiden tot schaamte, somberheid of een laag zelfbeeld.' },
      { kop: 'Wat kan je doen?', tekst: 'Spreek de pijn aan, niet de "fout": laat merken dat er niets mis is met de cliënt en dat hun gevoelens normaal zijn. Ga niet mee in het idee dat die moet veranderen. Geef in eenvoudige taal correcte info, toon positieve voorbeelden en wijs op lotgenotencontact. Soms helpt de boodschap dat heel veel mensen zich net zo voelen en dat het beter wordt.' },
      { kop: 'Waar let je op?', tekst: 'Ga nooit mee in een vraag naar "genezing" of conversietherapie: die praktijken werken niet, richten zware psychische schade aan en zijn in België sinds 2023 wettelijk verboden. Wees alert voor signalen van somberheid of zelfbeschadiging en schakel tijdig professionele hulp in. Jij hoeft dit niet alleen te dragen: verwijs gericht door.' },
    ],
    chips: [{ l: 'Verbod conversietherapie', url: 'https://www.transgenderinfo.be/nl/nieuws/regering-verbiedt-conversietherapie-om-lgbti-personen-te-genezen' }, { l: 'Lumi (advies)', url: 'https://lumi.be' }, { l: 'De Roze Pagina', url: 'https://www.cavaria.be/derozepagina' }],
  },
];
let casusOpen = null;
function renderCasusChip(ch) {
  if (ch.url) return `<a class="casus-chip" href="${ch.url}" target="_blank" rel="noopener noreferrer">${ch.l} ${ICO_EXT}</a>`;
  return `<button class="casus-chip" onclick="casusGo('${ch.go}')">${ch.l}</button>`;
}
function renderCasus() {
  if (!document.getElementById('casus-list')) return;
  document.getElementById('casus-list').innerHTML = CASUS.map((c, i) => `
    <div class="casus ${casusOpen === i ? 'open' : ''}">
      <button class="casus-head" onclick="toggleCasus(${i})" aria-expanded="${casusOpen === i ? 'true' : 'false'}">
        <div class="casus-icon">${CASUS_ICON}</div>
        <div class="casus-head-text">
          <div class="casus-tag">${c.tag}</div>
          <div class="casus-title">${c.titel}</div>
        </div>
        <svg class="casus-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="casus-body"><div class="casus-inner">
        <div class="casus-divider"></div>
        ${c.blokken.map((b, bi) => `<div class="casus-sub"><span class="num">${bi + 1}</span>${b.kop}</div><div class="casus-p">${b.tekst}</div>`).join('')}
        ${c.chips && c.chips.length ? `<div class="casus-links">${c.chips.map(renderCasusChip).join('')}</div>` : ''}
      </div></div>
    </div>`).join('');
}
function toggleCasus(i) { casusOpen = (casusOpen === i ? null : i); renderCasus(); }
function casusGo(go) {
  if (go === 'taal' || go === 'scan') gaPraktijk(go);
  else if (go === 'orgs') gaOrgs('');
  else if (go === 'beleid') location.href = '/beleid/';
  else if (go === 'hulp') openHelp();
  else if (go === 'tools-sek') gaTools('sek', '');
  else if (go === 'tools-gen') gaTools('gen', '');
  else if (go === 'tools-bel') gaTools('bel', '');
}

// ══════════════ TAALGIDS ══════════════
const TERM_CAT_COLOR = { 'Algemeen': 'teal', 'Oriëntatie': 'violet', 'Gender': 'amber', 'Liever vermijden': 'rose' };
const TERM_CATS = ['Alle', 'Algemeen', 'Oriëntatie', 'Gender', 'Liever vermijden'];
const TERMEN = [
  { woord: 'LGBTQIA+', cat: 'Algemeen', def: 'Verzamelletterwoord voor lesbisch, gay (homo), biseksueel, transgender, queer, intersekse en aseksueel. De "+" staat voor alle andere seksuele oriëntaties en genderidentiteiten die niet expliciet in de letters genoemd worden, zoals panseksueel, non-binair of demiseksueel.', tip: 'De L staat niet toevallig vooraan. Tijdens de aidscrisis in de jaren 80 sprongen lesbiennes massaal bij — met thuis- en stervensbegeleiding, bloedinzamelingen en activisme — toen de overheid en vaak ook families homomannen lieten vallen. Uit solidariteit schoof de community de L naar voren: van "GLBT" naar "LGBT".', tipType: 'fun' },
  { woord: 'Holebi', cat: 'Oriëntatie', def: 'Vlaamse samentrekking van homo, lesbisch en bi. Verwijst naar wie zich aangetrokken voelt tot hetzelfde geslacht of tot meerdere geslachten.' },
  { woord: 'Lesbisch', cat: 'Oriëntatie', def: 'Een vrouw die zich romantisch en/of seksueel aangetrokken voelt tot vrouwen.' },
  { woord: 'Homo / gay', cat: 'Oriëntatie', def: 'Iemand die zich aangetrokken voelt tot mensen van hetzelfde geslacht. "Gay" wordt breed gebruikt, "homo" vaak voor mannen.' },
  { woord: 'Biseksueel', cat: 'Oriëntatie', def: 'Aangetrokken tot meer dan één geslacht. Dat hoeft niet 50/50 te zijn en verandert niet door wie iemand op dit moment datet.' },
  { woord: 'Panseksueel', cat: 'Oriëntatie', def: 'Aangetrokken tot mensen ongeacht hun geslacht of genderidentiteit — de persoon zelf telt, niet het hokje.' },
  { woord: 'Aseksueel', cat: 'Oriëntatie', def: 'Iemand die weinig tot geen seksuele aantrekking voelt. Dat zegt niets over of die persoon wel of geen relatie of romantiek wil.' },
  { woord: 'Demiseksueel', cat: 'Oriëntatie', def: 'Iemand die pas seksuele aantrekking voelt nadat er een sterke emotionele band is ontstaan. Valt onder de bredere aseksuele koepel.' },
  { woord: 'Hetero', cat: 'Oriëntatie', def: 'Iemand die zich romantisch en/of seksueel aangetrokken voelt tot mensen van het andere geslacht.' },
  { woord: 'Gender', cat: 'Gender', def: 'Het sociale en persoonlijke beleven van man-zijn, vrouw-zijn, beide of geen van beide. Ruimer dan het geslacht dat bij de geboorte werd toegekend.' },
  { woord: 'Genderidentiteit', cat: 'Gender', def: 'Hoe iemand zichzelf vanbinnen ervaart: als man, vrouw, beide, geen van beide, of iets ertussen. Dat kan verschillen van wat anderen zien of verwachten.' },
  { woord: 'Genderexpressie', cat: 'Gender', def: 'Hoe iemand gender naar buiten brengt: kleding, haar, stem, gedrag. Expressie zegt niet automatisch iets over iemands identiteit of geaardheid.' },
  { woord: 'Cisgender', cat: 'Gender', def: 'Iemand wiens genderidentiteit overeenkomt met het geslacht dat bij de geboorte werd toegekend — het "tegenovergestelde" van transgender.' },
  { woord: 'Transgender', cat: 'Gender', def: 'Een paraplubegrip voor iedereen wiens genderidentiteit niet (volledig) overeenkomt met het geboortegeslacht. Transgender zijn is geen psychische stoornis.', tip: 'Gebruik het als bijvoeglijk naamwoord: "een transgender persoon", niet "een transgender".' },
  { woord: 'Non-binair', cat: 'Gender', def: 'Iemand die zich niet (enkel) man of vrouw voelt. Sommige non-binaire mensen gebruiken voornaamwoorden zoals "die/hen".' },
  { woord: 'Genderfluïde', cat: 'Gender', def: 'Iemand bij wie het genderbeleven kan verschuiven in de tijd — soms meer mannelijk, soms meer vrouwelijk, soms ertussenin.' },
  { woord: 'Intersekse', cat: 'Gender', def: 'Paraplubegrip voor mensen die geboren worden met lichaamskenmerken (chromosomen, hormonen, geslachtsorganen) die niet strikt in "man" of "vrouw" passen. Het gaat over het lichaam, niet over geaardheid.' },
  { woord: 'Transitie', cat: 'Gender', def: 'Het proces waarin iemand stappen zet om zich te laten zien zoals die zich voelt. Dat kan sociaal (naam, kleding), juridisch en/of medisch zijn — en is voor iedereen anders.' },
  { woord: 'Voornaamwoorden', cat: 'Gender', def: 'De woorden waarmee iemand benoemd wil worden, bvb. hij/hem, zij/haar of die/hen.', tip: 'Bij twijfel: vraag het gewoon, en gebruik wat de persoon aangeeft.' },
  { woord: 'Queer', cat: 'Algemeen', def: 'Overkoepelende term voor wie zich niet (volledig) hetero of cisgender voelt. Ooit een scheldwoord, nu door velen met trots heropgeëist.', tip: 'Niet iedereen voelt zich er comfortabel bij — gebruik het niet als label voor iemand anders zonder dat te weten.' },
  { woord: 'Coming-out', cat: 'Algemeen', def: 'Het moment of proces waarop iemand zelf vertelt over zijn geaardheid of genderidentiteit. Het is geen eenmalig iets: mensen komen vaak hun leven lang in nieuwe situaties uit de kast.' },
  { woord: 'In de kast', cat: 'Algemeen', def: 'Wanneer iemand zijn geaardheid of genderidentiteit (nog) niet deelt met de omgeving. Dat kan een bewuste, veilige keuze zijn — respecteer dat tempo.' },
  { woord: 'Heteronormativiteit', cat: 'Algemeen', def: 'De onuitgesproken aanname dat iedereen hetero en cisgender is, bvb. automatisch naar "een vriendin" vragen bij een man. Het maakt andere ervaringen onzichtbaar.' },
  { woord: 'Affirmatief', cat: 'Algemeen', def: 'Een houding die de seksuele en genderidentiteit van iemand bevestigt als waardevol en normaal, in plaats van ze te negeren of enkel te "tolereren".' },
  { woord: 'Ally / medestander', cat: 'Algemeen', def: 'Iemand die zelf niet LGBTQ+ is, maar zich wel inzet voor gelijke behandeling en mee opkomt tegen onrecht.' },
  { woord: 'IDAHOBIT', cat: 'Algemeen', def: 'Internationale dag tegen holebifobie, transfobie en bifobie, elk jaar op 17 mei — de dag waarop de WHO homoseksualiteit schrapte als ziekte.' },
  { woord: 'Regenboogvlag', cat: 'Algemeen', def: 'Het bekendste symbool van de LGBTQ+ gemeenschap. Naast de klassieke kleuren bestaan er varianten, bvb. de trans- en de progressieve regenboogvlag.' },
  { woord: 'Deadnaming', cat: 'Liever vermijden', def: 'Iemand (bewust of per ongeluk) aanspreken met de naam van vóór de transitie. Doet pijn en ondermijnt vertrouwen.', tip: 'Gebruik altijd de naam die de persoon zelf aangeeft, ook in dossiers en onderling overleg.', tipType: 'warn' },
  { woord: 'Misgenderen', cat: 'Liever vermijden', def: 'Iemand aanspreken of benoemen met het verkeerde geslacht of voornaamwoord.', tip: 'Maak je een fout? Corrigeer kort, verontschuldig je zonder drama en ga verder.', tipType: 'warn' },
  { woord: '"Geslachtsverandering"', cat: 'Liever vermijden', def: 'Verouderde, te enge term: een transitie gaat over veel meer dan een operatie, en niet iedereen kiest medische stappen.', tip: 'Zeg liever "transitie" of "in transitie zijn".', tipType: 'warn' },
  { woord: '"Levensstijl" of "keuze"', cat: 'Liever vermijden', def: 'Geaardheid en genderidentiteit zijn geen keuze, voorkeur of stijl.', tip: 'Vermijd formuleringen die suggereren dat het om een fase of een beslissing gaat.', tipType: 'warn' },
  { woord: 'Hermafrodiet', cat: 'Liever vermijden', def: 'Verouderde en kwetsende term voor iemand met een intersekse variatie. Het woord komt uit de mythologie en de biologie en hoort niet thuis bij mensen.', tip: 'Zeg "intersekse persoon" of "iemand met een intersekse variatie".', tipType: 'warn' },
  { woord: 'Homofiel', cat: 'Liever vermijden', def: 'Verouderde term voor een homoseksuele persoon. Klinkt voor velen klinisch of afstandelijk en wordt nauwelijks nog gebruikt.', tip: 'Zeg liever "homo", "gay" of "holebi".', tipType: 'warn' },
];
let termCat = 'Alle';
function renderTermChips() {
  if (!document.getElementById('term-chips')) return;
  document.getElementById('term-chips').innerHTML = TERM_CATS.map(c => `<button class="term-chip ${c === termCat ? 'active' : ''}" onclick="setTermCat('${c}')">${c}</button>`).join('');
}
function setTermCat(c) { termCat = c; renderTermChips(); renderTermen(); }
function renderTermen() {
  if (!document.getElementById('term-grid')) return;
  const q = document.getElementById('term-search').value.toLowerCase();
  const res = TERMEN.filter(t => (termCat === 'Alle' || t.cat === termCat) && (!q || t.woord.toLowerCase().includes(q) || t.def.toLowerCase().includes(q)));
  document.getElementById('term-count').textContent = `${res.length} begrip${res.length !== 1 ? 'pen' : ''}`;
  document.getElementById('term-grid').innerHTML = res.length ? res.map(t => `
    <div class="term-card">
      <div class="term-top"><div class="term-word">${t.woord}</div>${badge(t.cat, TERM_CAT_COLOR[t.cat] || 'slate')}</div>
      <div class="term-def">${t.def}</div>
      ${t.tip ? (t.tipType === 'fun'
        ? `<button class="term-funbtn" data-woord="${t.woord.replace(/"/g,'&quot;')}" onclick="openFunFact(this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.7 5.6L19.5 9l-4.4 3.4L16.7 18 12 14.7 7.3 18l1.6-5.6L4.5 9l5.8-1.4z"/></svg>Fun fact</button>`
        : `<div class="term-tip ${t.tipType || ''}"><strong>${t.tipType === 'warn' ? 'Let op: ' : 'Tip: '}</strong>${t.tip}</div>`) : ''}
    </div>`).join('') : '<div class="empty">Geen begrippen gevonden. Probeer een ander woord.</div>';
}

// ══════════════ TEAM-ZELFSCAN ══════════════
const SCAN_VRAGEN = [
  { domein: 'Beleid', t: 'Onze organisatie heeft een expliciete, gedragen visie of beleid rond seksualiteit én genderdiversiteit.' },
  { domein: 'Beleid', t: 'LGBTQ+-inclusie zit verweven in onthaal, kwaliteit en dagelijkse werking — niet enkel ad hoc als er iets gebeurt.' },
  { domein: 'Taal', t: 'We gebruiken bewust inclusieve, niet-veronderstellende taal (bvb. niet automatisch naar "een vriendin" vragen bij een mannelijke cliënt).' },
  { domein: 'Taal', t: 'We vragen cliënten hoe ze aangesproken willen worden (naam, voornaamwoord) en respecteren dat consequent.' },
  { domein: 'Zichtbaarheid', t: 'Er zijn zichtbare signalen dat LGBTQ+ welkom is, bvb. via affiches, een regenboogsymbool of inclusieve formulieren.' },
  { domein: 'Team', t: 'Begeleiders kregen vorming rond LGBTQ+ en kunnen er met cliënten over praten zonder ongemak.' },
  { domein: 'Team', t: 'Stigmatiserende grappen of opmerkingen worden binnen het team benoemd en aangepakt.' },
  { domein: 'Cliënt', t: 'Cliënten weten bij wie ze terechtkunnen met vragen over identiteit, relaties of gender.' },
  { domein: 'Cliënt', t: 'We kennen en gebruiken toegankelijke tools, bvb. De Roze Pagina of het Sensoa Vlaggensysteem.' },
  { domein: 'Cliënt', t: 'Cliënten krijgen ruimte om zelf keuzes te maken over relaties en identiteit, op hun eigen tempo en niveau.' },
  { domein: 'Veiligheid', t: 'Cliënten kunnen grensoverschrijdend gedrag of pesten rond gender of geaardheid veilig melden, en wij volgen dat op.' },
  { domein: 'Veiligheid', t: 'We behandelen een koppel van hetzelfde geslacht niet strenger of anders dan een man-vrouwkoppel.' },
  { domein: 'Netwerk', t: 'We verwijzen actief door naar gespecialiseerde diensten, bvb. Lumi, het Transgender Infopunt of Aditi.' },
  { domein: 'Privacy', t: 'Informatie over iemands geaardheid of genderidentiteit behandelen we vertrouwelijk en respectvol.' },
];
const SCAN_DOMEIN_ADVIES = {
  'Beleid': { t: 'Werk aan een expliciete visie', d: 'Een korte, gedragen visietekst rond seksualiteit én genderdiversiteit geeft begeleiders houvast. Tools zoals de toolset "Op het kruispunt" van çavaria of de Roze Loper-scan helpen je op weg.' },
  'Taal': { t: 'Maak je taal inclusiever', d: 'Kleine aanpassingen — open vragen stellen, niet veronderstellen — maken een groot verschil. De taalgids hiernaast is een handig startpunt voor je team.' },
  'Zichtbaarheid': { t: 'Maak inclusie zichtbaar', d: 'Zichtbare signalen (een regenboog, inclusieve formulieren) laten cliënten weten dat ze welkom zijn. Klein in moeite, groot in effect.' },
  'Team': { t: 'Investeer in vorming', d: 'Veel ongemak is in feite handelingsverlegenheid. Vorming via bvb. çavaria vorming (voorheen KliQ) of Aditi geeft begeleiders woorden en vertrouwen.' },
  'Cliënt': { t: 'Versterk de cliëntondersteuning', d: 'Zorg dat cliënten een aanspreekpunt kennen en gebruik toegankelijke tools zoals De Roze Pagina en het Vlaggensysteem.' },
  'Veiligheid': { t: 'Zorg voor een veilig klimaat', d: 'Cliënten moeten grensoverschrijdend gedrag of pesten veilig kunnen melden. Behandel koppels van hetzelfde geslacht gelijkwaardig — het Sensoa Vlaggensysteem helpt om gedrag in te schatten zonder vooroordeel.' },
  'Netwerk': { t: 'Bouw je doorverwijsnetwerk uit', d: 'Je hoeft niet alles zelf te kunnen. Leer de gespecialiseerde diensten kennen (Lumi, TIP, Aditi) en verwijs gericht door.' },
  'Privacy': { t: 'Bewaak privacy en vertrouwen', d: 'Maak afspraken over wie wat mag weten over iemands geaardheid of genderidentiteit. Vertrouwelijkheid is de basis van een veilig klimaat.' },
};
let scanAntw = {};
function renderScanVragen() {
  if (!document.getElementById('scan-questions')) return;
  document.getElementById('scan-questions').innerHTML = SCAN_VRAGEN.map((q, i) => `
    <div class="scan-q">
      <div class="scan-q-top">
        <div class="scan-q-num">${i + 1}</div>
        <div><div class="scan-q-domain">${q.domein}</div><div class="scan-q-text">${q.t}</div></div>
      </div>
      <div class="scan-opts">
        ${['Niet', 'Deels', 'Goed'].map((lab, v) => `<button class="scan-opt ${scanAntw[i] === v ? 'sel' : ''}" onclick="scanKies(${i},${v})">${lab}</button>`).join('')}
      </div>
    </div>`).join('');
}
function scanKies(i, v) { scanAntw[i] = v; renderScanVragen(); updateScanHint(); }
function updateScanHint() {
  if (!document.getElementById('scan-hint')) return;
  const n = Object.keys(scanAntw).length, tot = SCAN_VRAGEN.length;
  document.getElementById('scan-hint').textContent = n < tot ? `${n}/${tot} beantwoord` : 'Klaar om te berekenen';
}
function berekenScan() {
  const tot = SCAN_VRAGEN.length, beantwoord = Object.keys(scanAntw).length;
  if (beantwoord < tot) { document.getElementById('scan-hint').textContent = `Beantwoord eerst alle vragen (${beantwoord}/${tot}).`; return; }
  const score = Object.values(scanAntw).reduce((a, b) => a + b, 0);
  const maxScore = tot * 2;
  const pct = Math.round((score / maxScore) * 100);
  let band, label, desc;
  if (pct <= 40) { band = 'start'; label = 'Aan de start'; desc = 'Er is een mooie basis om op te bouwen. Door inclusie expliciet te maken — in visie, taal en vorming — zet je grote stappen. Begin klein en concreet.'; }
  else if (pct <= 72) { band = 'mid'; label = 'Op weg'; desc = 'Er gebeurt al heel wat, maar de aanpak is nog niet overal verankerd. Focus op de punten die nog "deels" scoorden om van goodwill naar structureel beleid te gaan.'; }
  else { band = 'strong'; label = 'Stevig verankerd'; desc = 'Inclusie zit stevig in jullie werking. Mooi. Blijf het levend houden via vorming, evaluatie en aandacht voor nieuwe cliënten en medewerkers.'; }

  // Score per domein berekenen (om alert-domeinen en adviezen te bepalen)
  const domMax = {}, domBehaald = {}, domVolgorde = [];
  SCAN_VRAGEN.forEach((q, i) => {
    if (!(q.domein in domMax)) { domMax[q.domein] = 0; domBehaald[q.domein] = 0; domVolgorde.push(q.domein); }
    domMax[q.domein] += 2; domBehaald[q.domein] += (scanAntw[i] || 0);
  });
  const domeinen = domVolgorde.map(d => ({ d, behaald: domBehaald[d], max: domMax[d], pct: Math.round((domBehaald[d] / domMax[d]) * 100) }));

  // Domeinen waar je alert voor moet zijn (onder de 50%)
  const alertDomeinen = domeinen.filter(x => x.pct < 50).sort((a, b) => a.pct - b.pct);

  // Drie grootste tekorten → gerichte adviezen
  let tekorten = domeinen.map(x => ({ d: x.d, gap: x.max - x.behaald })).filter(x => x.gap > 0).sort((a, b) => b.gap - a.gap).slice(0, 3);
  let items;
  if (tekorten.length) items = tekorten.map(x => SCAN_DOMEIN_ADVIES[x.d]).filter(Boolean);
  else items = [{ t: 'Blijf het levend houden', d: 'Jullie scoren sterk op alle domeinen. Hou de aandacht vast bij nieuwe medewerkers, nieuwe cliënten en evoluerende noden.' }];

  const bandClass = band === 'start' ? 'scan-band-start' : band === 'mid' ? 'scan-band-mid' : 'scan-band-strong';
  const alertBlok = alertDomeinen.length ? `
      <div class="scan-alert">
        <div class="scan-alert-kop">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Hier zou ik alert voor zijn
        </div>
        <div class="scan-alert-chips">${alertDomeinen.map(x => `<span class="scan-alert-chip">${x.d} <small>${x.pct}%</small></span>`).join('')}</div>
      </div>` : '';

  document.getElementById('scan-result').innerHTML = `
    <div class="scan-result">
      <div class="scan-score-card ${bandClass}">
        <div class="scan-score-layout">
          <div class="scan-score-wrap" id="scan-score-wrap">
            <svg class="scan-score-svg" viewBox="0 0 120 120">
              <defs>
                <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffe9a8"/>
                  <stop offset="35%" stop-color="#ffffff"/>
                  <stop offset="70%" stop-color="#ffffff"/>
                  <stop offset="100%" stop-color="#cdeef0"/>
                </linearGradient>
              </defs>
              <circle class="scan-score-track" cx="60" cy="60" r="52"/>
              <circle class="scan-score-arc" id="scan-score-arc" cx="60" cy="60" r="52" stroke-dasharray="326.7" stroke-dashoffset="326.7"/>
            </svg>
            <span class="scan-score-spark"></span>
            <div class="scan-score-center">
              <span class="scan-score-pct" id="scan-score-pct">0<small>%</small></span>
            </div>
          </div>
          <div class="scan-score-text">
            <div class="scan-band-label">${label}</div>
            <div class="scan-band-desc">${desc}</div>
          </div>
        </div>
      </div>
      ${alertBlok}
      <div class="scan-advice-t" style="margin-top:24px;">Waar liggen kansen?</div>
      <div class="scan-advice">
        ${items.map(it => `<div class="scan-advice-item"><div class="ai-dot"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div><div class="scan-advice-item-body"><strong>${it.t}.</strong> ${it.d}</div></div>`).join('')}
      </div>
      <div class="ww-cta-row" style="margin-top:20px;">
        <button class="ww-cta ww-cta-primary" onclick="downloadScan(${pct}, '${label.replace(/'/g, "\\'")}')">Download resultaat (.txt)</button>
        <button class="ww-cta ww-cta-ghost" onclick="printScan()">Afdrukken</button>
        <button class="ww-cta ww-cta-ghost" onclick="gaPraktijk('taal')">Naar de taalgids</button>
        <button class="ww-cta ww-cta-ghost" onclick="location.href='/beleid/'">Beleid &amp; vorming</button>
        <button class="ww-cta ww-cta-ghost" onclick="resetScan()">Scan opnieuw</button>
      </div>
      <div class="print-only print-foot">
        Team-zelfscan via De Regenbooggids (deregenbooggids.be) — afgedrukt op ${new Date().toLocaleDateString('nl-BE', { day: 'numeric', month: 'long', year: 'numeric' })}.
        Dit is een reflectie-instrument, geen audit.
      </div>
    </div>`;
  document.getElementById('scan-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
  animeerScanScore(pct);
}
function animeerScanScore(pct) {
  const wrap = document.getElementById('scan-score-wrap');
  const arc = document.getElementById('scan-score-arc');
  const pctEl = document.getElementById('scan-score-pct');
  if (!wrap || !arc || !pctEl) return;
  const omtrek = 2 * Math.PI * 52;
  arc.setAttribute('stroke-dasharray', omtrek.toFixed(1));
  const zet = p => { pctEl.innerHTML = p + '<small>%</small>'; };

  if (prefersReduced()) {
    arc.style.transition = 'none';
    arc.setAttribute('stroke-dashoffset', (omtrek * (1 - pct / 100)).toFixed(1));
    zet(pct);
    return;
  }
  wrap.classList.add('pop');
  requestAnimationFrame(() => {
    setTimeout(() => {
      arc.setAttribute('stroke-dashoffset', (omtrek * (1 - pct / 100)).toFixed(1));
      wrap.classList.add('glow', 'pulse');
    }, 120);
  });
  const duur = 1300, start = performance.now();
  const tel = (now) => {
    const t = Math.min((now - start) / duur, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    zet(Math.round(eased * pct));
    if (t < 1) requestAnimationFrame(tel); else zet(pct);
  };
  requestAnimationFrame(tel);
}
function resetScan() {
  scanAntw = {}; renderScanVragen(); document.getElementById('scan-result').innerHTML = '';
  updateScanHint();
  document.getElementById('seg-scan').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function bouwScanRapport(pct, label) {
  const labels = ['Niet', 'Deels', 'Goed'];
  const datum = new Date().toLocaleDateString('nl-BE', { day: 'numeric', month: 'long', year: 'numeric' });

  // Score per domein opnieuw berekenen voor het rapport
  const domMax = {}, domBehaald = {}, domVolgorde = [];
  SCAN_VRAGEN.forEach((q, i) => {
    if (!(q.domein in domMax)) { domMax[q.domein] = 0; domBehaald[q.domein] = 0; domVolgorde.push(q.domein); }
    domMax[q.domein] += 2; domBehaald[q.domein] += (scanAntw[i] || 0);
  });

  const lijn = '═'.repeat(58);
  let r = '';
  r += lijn + '\n';
  r += 'TEAM-ZELFSCAN · DE REGENBOOGGIDS\n';
  r += 'LGBTQ+-inclusie in de begeleiding\n';
  r += lijn + '\n\n';
  r += 'Datum: ' + datum + '\n';
  r += 'Totaalscore: ' + pct + '% — ' + label + '\n\n';

  r += 'SCORE PER DOMEIN\n';
  r += '-'.repeat(58) + '\n';
  domVolgorde.forEach(d => {
    const p = Math.round((domBehaald[d] / domMax[d]) * 100);
    r += '  ' + (d + ':').padEnd(16) + String(p).padStart(3) + '%   (' + domBehaald[d] + '/' + domMax[d] + ')\n';
  });
  r += '\n';

  r += 'ANTWOORDEN PER VRAAG\n';
  r += '-'.repeat(58) + '\n';
  SCAN_VRAGEN.forEach((q, i) => {
    const a = (i in scanAntw) ? labels[scanAntw[i]] : '—';
    r += '  ' + String(i + 1).padStart(2) + '. [' + a.padEnd(5) + '] ' + q.domein + '\n';
    r += '      ' + q.t + '\n\n';
  });

  // Drie grootste tekorten → adviezen, zelfde logica als in beeld
  const tekorten = domVolgorde
    .map(d => ({ d, gap: domMax[d] - domBehaald[d] }))
    .filter(x => x.gap > 0).sort((a, b) => b.gap - a.gap).slice(0, 3);
  if (tekorten.length) {
    r += 'WAAR LIGGEN KANSEN?\n';
    r += '-'.repeat(58) + '\n';
    tekorten.forEach(x => {
      const adv = SCAN_DOMEIN_ADVIES[x.d];
      if (adv) { r += '  • ' + adv.t + '\n    ' + adv.d + '\n\n'; }
    });
  }

  r += lijn + '\n';
  r += 'Team-zelfscan via De Regenbooggids (deregenbooggids.be).\n';
  r += 'Dit is een reflectie-instrument, geen audit.\n';
  r += lijn + '\n';
  return r;
}
function downloadScan(pct, label) {
  const rapport = bouwScanRapport(pct, label);
  const datumKort = new Date().toISOString().slice(0, 10);
  const blob = new Blob([rapport], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'team-zelfscan-regenbooggids-' + datumKort + '.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  const hint = document.getElementById('scan-hint');
  if (hint) { hint.textContent = 'Resultaat gedownload als tekstbestand.'; }
}
function printScan() {
  const hint = document.getElementById('scan-hint');
  if (hint) { hint.textContent = 'Tip: in het printvenster kan je ook "Opslaan als PDF" kiezen.'; }
  setTimeout(() => window.print(), 300);
}

// ══════════════ TEST JEZELF (QUIZ) ══════════════
const QUIZ_VRAGEN = [
  {
    vraag: 'Een cliënt zegt: "Ik ben een man, maar mijn lichaam klopt niet." Waar gaat dit in de eerste plaats over?',
    opties: ['Seksuele oriëntatie', 'Genderidentiteit', 'Een fase die vanzelf overgaat'],
    juist: 1,
    uitleg: 'Dit gaat over genderidentiteit: het innerlijke besef van wie je bent (man, vrouw, beide of geen van beide). Dat staat los van seksuele oriëntatie, dat gaat over op wie je verliefd wordt. De twee worden vaak verward.'
  },
  {
    vraag: 'Wat is de meest passende reactie als je niet weet welk voornaamwoord iemand gebruikt?',
    opties: ['Je vraagt het rustig en respectvol', 'Je gokt op basis van het uiterlijk', 'Je vermijdt voornaamwoorden volledig'],
    juist: 0,
    uitleg: 'Het gewoon vriendelijk vragen ("hoe spreek ik je het liefst aan?") is het meest respectvol. Gokken op uiterlijk gaat vaak mis, en iemand actief vermijden voelt alsnog ongemakkelijk aan.'
  },
  {
    vraag: 'Wat betekent "deadnaming"?',
    opties: ['Iemand bij een oude, afgelegde naam blijven noemen', 'Iemand uitschelden', 'Een naam doorgeven aan derden'],
    juist: 0,
    uitleg: 'Deadnaming is iemand (bewust of onbewust) aanspreken met de naam die die persoon vóór de transitie droeg. Ook al is het per ongeluk, het kan pijnlijk zijn. Corrigeer jezelf kort en ga verder, zonder er een groot moment van te maken.'
  },
  {
    vraag: 'Een collega zegt: "Mensen met een verstandelijke beperking zijn toch te beschermd om met zoiets als gender bezig te zijn." Klopt dat?',
    opties: ['Ja, het is te complex voor hen', 'Nee, ook zij hebben een genderidentiteit en het recht die te beleven', 'Alleen bij een lichte beperking'],
    juist: 1,
    uitleg: 'Iedereen heeft een genderidentiteit en seksualiteit, ongeacht beperking. De ondersteuning past zich aan het tempo en niveau aan, maar het recht zelf staat niet ter discussie. "Beschermen" mag nooit "negeren" worden.'
  },
  {
    vraag: 'Welke vraag is het minst veronderstellend bij een mannelijke cliënt?',
    opties: ['"Heb je al een vriendin?"', '"Wanneer zoek je een vriendin?"', '"Ben je verliefd op iemand?"'],
    juist: 2,
    uitleg: 'Een open vraag zonder geslacht erin laat alle antwoorden toe. "Heb je een vriendin?" gaat er stilzwijgend van uit dat de cliënt hetero is, en dat kan een gesprek al in de kiem smoren.'
  },
  {
    vraag: 'Is "homo" gebruiken als scheldwoord onder collega\'s onschuldig als het "niet zo bedoeld" is?',
    opties: ['Ja, intentie telt', 'Nee, het effect op het klimaat telt', 'Alleen erg als een cliënt het hoort'],
    juist: 1,
    uitleg: 'Ook "grappig" bedoeld taalgebruik bepaalt het klimaat. Voor een cliënt die worstelt met zijn identiteit is het een signaal om te zwijgen. Het gaat niet om iemand fout verklaren, wel om het effect bespreekbaar maken.'
  },
  {
    vraag: 'Wat is intersekse?',
    opties: ['Een seksuele oriëntatie', 'Een geboren variatie in geslachtskenmerken', 'Hetzelfde als transgender'],
    juist: 1,
    uitleg: 'Intersekse verwijst naar mensen die geboren worden met lichaamskenmerken die niet passen in de strikte tweedeling man/vrouw. Het is dus iets lichamelijks, geen oriëntatie, en niet hetzelfde als transgender zijn.'
  },
  {
    vraag: 'Een cliënt vertrouwt jou toe dat hij op mannen valt en vraagt het stil te houden. Wat doe je?',
    opties: ['Je deelt het met het hele team "voor de goede zorg"', 'Je vertelt het aan de familie', 'Je respecteert de vertrouwelijkheid en bespreekt samen wie iets mag weten'],
    juist: 2,
    uitleg: 'Iemands geaardheid is privé-informatie. Het is niet aan jou om die voor de cliënt te delen ("outen"). Bespreek samen wat de cliënt zelf wil, en met wie. Vertrouwen is de basis van een veilig klimaat.'
  },
  {
    vraag: 'Twee mannelijke huisgenoten worden verliefd. Hoe ga je ermee om?',
    opties: ['Strenger, want het kan vragen oproepen', 'Net zoals bij elk ander pril koppel', 'Je ontmoedigt het voor de rust in de groep'],
    juist: 1,
    uitleg: 'Het recht op relaties en intimiteit geldt voor iedereen gelijk. Een koppel van hetzelfde geslacht strenger behandelen is een vorm van ongelijke behandeling. Kijk naar draagkracht en wederzijdse toestemming, niet naar geslacht.'
  },
  {
    vraag: 'Wat is de beste houding als je een fout maakt rond iemands naam of voornaamwoord?',
    opties: ['Uitgebreid je excuses aanbieden en het uitleggen', 'Kort corrigeren en gewoon verdergaan', 'Niets zeggen en hopen dat niemand het merkte'],
    juist: 1,
    uitleg: 'Een korte correctie ("sorry, hij") en doorgaan is het prettigst voor iedereen. Een lang excuus legt de last bij de ander om jou gerust te stellen. Negeren bevestigt dan weer dat het niet belangrijk is.'
  },
];

let quizState = { idx: 0, antwoorden: [], gekozen: null, bevestigd: false };

function renderQuizStart() {
  quizState = { idx: 0, antwoorden: [], gekozen: null, bevestigd: false };
  const shell = document.getElementById('quiz-shell');
  if (!shell) return;
  shell.innerHTML = `
    <div class="quiz-start">
      <div class="quiz-start-badge">${QUIZ_VRAGEN.length} korte vragen · ± 4 min</div>
      <h2 class="quiz-start-title">Hoe inclusief is jouw reflex?</h2>
      <p class="quiz-start-sub">Een korte zelftest over taal, kennis en aannames rond seksuele en genderdiversiteit. Niet om te scoren, wel om je eigen reflexen eens tegen het licht te houden. Na elke vraag krijg je meteen een korte duiding.</p>
      <button class="quiz-cta" onclick="quizStart()">
        Start de test
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
    </div>`;
}

function quizStart() { quizState = { idx: 0, antwoorden: [], gekozen: null, bevestigd: false }; renderQuizVraag(); }

function renderQuizVraag() {
  const shell = document.getElementById('quiz-shell');
  const i = quizState.idx;
  const q = QUIZ_VRAGEN[i];
  const totaal = QUIZ_VRAGEN.length;
  const progressPct = Math.round((i / totaal) * 100);
  const beantwoord = quizState.bevestigd;
  const opties = q.opties.map((opt, oi) => {
    let cls = 'quiz-opt';
    if (beantwoord) {
      if (oi === q.juist) cls += ' is-juist';
      else if (oi === quizState.gekozen) cls += ' is-fout';
      else cls += ' is-dim';
    } else if (oi === quizState.gekozen) cls += ' sel';
    const ic = beantwoord && oi === q.juist
      ? '<svg class="quiz-opt-ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>'
      : (beantwoord && oi === quizState.gekozen && oi !== q.juist
        ? '<svg class="quiz-opt-ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : `<span class="quiz-opt-letter">${String.fromCharCode(65 + oi)}</span>`);
    return `<button class="${cls}" ${beantwoord ? 'disabled' : ''} onclick="quizKies(${oi})">${ic}<span>${opt}</span></button>`;
  }).join('');

  const feedback = beantwoord ? `
    <div class="quiz-feedback ${quizState.gekozen === q.juist ? 'fb-goed' : 'fb-mis'}">
      <div class="quiz-feedback-kop">
        ${quizState.gekozen === q.juist
          ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><polyline points="20 6 9 17 4 12"/></svg> Goed gezien'
          : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Net niet'}
      </div>
      <p>${q.uitleg}</p>
      <button class="quiz-cta quiz-cta-sm" onclick="quizVolgende()">
        ${i + 1 < totaal ? 'Volgende vraag' : 'Bekijk je resultaat'}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
    </div>` : `
    <div class="quiz-actions">
      <button class="quiz-cta ${quizState.gekozen === null ? 'is-disabled' : ''}" ${quizState.gekozen === null ? 'disabled' : ''} onclick="quizBevestig()">Bevestig antwoord</button>
    </div>`;

  shell.innerHTML = `
    <div class="quiz-run">
      <div class="quiz-top">
        <span class="quiz-counter">Vraag ${i + 1} van ${totaal}</span>
        <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${progressPct}%"></div></div>
      </div>
      <div class="quiz-card">
        <div class="quiz-q">${q.vraag}</div>
        <div class="quiz-opts">${opties}</div>
        ${feedback}
      </div>
    </div>`;
}

function quizKies(oi) {
  if (quizState.bevestigd) return;
  quizState.gekozen = oi;
  renderQuizVraag();
}

function quizBevestig() {
  if (quizState.gekozen === null) return;
  quizState.bevestigd = true;
  quizState.antwoorden[quizState.idx] = quizState.gekozen;
  renderQuizVraag();
}

function quizVolgende() {
  if (quizState.idx + 1 < QUIZ_VRAGEN.length) {
    quizState.idx++;
    quizState.gekozen = null;
    quizState.bevestigd = false;
    renderQuizVraag();
    document.getElementById('panel-quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    renderQuizResultaat();
  }
}

function renderQuizResultaat() {
  const shell = document.getElementById('quiz-shell');
  const totaal = QUIZ_VRAGEN.length;
  const goed = quizState.antwoorden.reduce((acc, a, i) => acc + (a === QUIZ_VRAGEN[i].juist ? 1 : 0), 0);
  const pct = Math.round((goed / totaal) * 100);
  let titel, tekst, band;
  if (pct >= 80) { band = 'strong'; titel = 'Sterke reflexen'; tekst = 'Je hebt een fijn aanvoelen voor inclusieve taal en houding. Mooi. Blijf het levend houden en help collega\'s mee op weg, want voorbeeldgedrag werkt aanstekelijk.'; }
  else if (pct >= 50) { band = 'mid'; titel = 'Goed op weg'; tekst = 'De basis zit goed, en op een paar punten valt nog winst te halen. Neem de duiding bij de vragen die je miste nog eens door, en verken de taalgids voor de fijnere nuances.'; }
  else { band = 'start'; titel = 'Ruimte om te groeien'; tekst = 'Geen man overboord: bewustwording is de eerste stap, en die zet je nu. De taalgids en casuïstiek hiernaast geven je concrete handvatten om je reflexen aan te scherpen.'; }
  const bandClass = band === 'start' ? 'scan-band-start' : band === 'mid' ? 'scan-band-mid' : 'scan-band-strong';

  const recap = QUIZ_VRAGEN.map((q, i) => {
    const ok = quizState.antwoorden[i] === q.juist;
    return `<button class="quiz-recap-dot ${ok ? 'ok' : 'mis'}" onclick="quizToonVraag(${i})" aria-label="Vraag ${i + 1}: ${ok ? 'juist' : 'fout'}" title="Vraag ${i + 1}">${i + 1}</button>`;
  }).join('');

  shell.innerHTML = `
    <div class="quiz-result">
      <div class="scan-score-card ${bandClass}">
        <div class="quiz-score-wrap" id="quiz-score-wrap">
          <svg class="quiz-score-svg" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="quizGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffe9a8"/>
                <stop offset="35%" stop-color="#ffffff"/>
                <stop offset="70%" stop-color="#ffffff"/>
                <stop offset="100%" stop-color="#cdeef0"/>
              </linearGradient>
            </defs>
            <circle class="quiz-score-track" cx="60" cy="60" r="52"/>
            <circle class="quiz-score-arc" id="quiz-score-arc" cx="60" cy="60" r="52" stroke-dasharray="326.7" stroke-dashoffset="326.7"/>
          </svg>
          <span class="quiz-score-spark"></span>
          <div class="quiz-score-center">
            <span class="quiz-score-n" id="quiz-score-n">0</span>
            <span class="quiz-score-of">van ${totaal}</span>
          </div>
        </div>
        <div class="scan-band-label">${titel}</div>
        <div class="scan-band-desc">${tekst}</div>
      </div>
      <div class="quiz-recap">
        <div class="quiz-recap-head">Jouw antwoorden <span class="quiz-recap-hint">tik op een nummer voor de duiding</span></div>
        <div class="quiz-recap-dots">${recap}</div>
        <div class="quiz-recap-detail" id="quiz-recap-detail"></div>
      </div>
      <div class="quiz-tip">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>
        <span>Deze test toetst je eigen reflexen, niet je team. Wil je samen aan de slag? Doe dan de <button class="quiz-inline-link" onclick="showPraktijk('scan')">team-zelfscan</button>.</span>
      </div>
      <div class="ww-cta-row" style="margin-top:20px;">
        <button class="ww-cta ww-cta-primary" onclick="quizStart()">Opnieuw testen</button>
        <button class="ww-cta ww-cta-ghost" onclick="gaPraktijk('taal')">Naar de taalgids</button>
        <button class="ww-cta ww-cta-ghost" onclick="showPraktijk('casus')">Bekijk de casuïstiek</button>
      </div>
    </div>`;
  document.getElementById('panel-quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
  animeerQuizScore(goed, totaal, pct);
}

function animeerQuizScore(goed, totaal, pct) {
  const wrap = document.getElementById('quiz-score-wrap');
  const arc = document.getElementById('quiz-score-arc');
  const nEl = document.getElementById('quiz-score-n');
  if (!wrap || !arc || !nEl) return;
  const omtrek = 2 * Math.PI * 52; // ≈ 326.7
  arc.setAttribute('stroke-dasharray', omtrek.toFixed(1));

  if (prefersReduced()) {
    arc.style.transition = 'none';
    arc.setAttribute('stroke-dashoffset', (omtrek * (1 - pct / 100)).toFixed(1));
    nEl.textContent = goed;
    return;
  }

  wrap.classList.add('pop');
  // Arc vullen na een korte tik
  requestAnimationFrame(() => {
    setTimeout(() => {
      arc.setAttribute('stroke-dashoffset', (omtrek * (1 - pct / 100)).toFixed(1));
      wrap.classList.add('glow', 'pulse');
    }, 120);
  });
  // Getal laten optellen van 0 → goed
  const duur = 1300;
  const start = performance.now();
  const tel = (now) => {
    const t = Math.min((now - start) / duur, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    nEl.textContent = Math.round(eased * goed);
    if (t < 1) requestAnimationFrame(tel);
    else nEl.textContent = goed;
  };
  requestAnimationFrame(tel);
}

function quizToonVraag(i) {
  const q = QUIZ_VRAGEN[i];
  const ok = quizState.antwoorden[i] === q.juist;
  const detail = document.getElementById('quiz-recap-detail');
  if (!detail) return;
  document.querySelectorAll('.quiz-recap-dot').forEach((d, di) => d.classList.toggle('actief', di === i));
  detail.innerHTML = `
    <div class="quiz-recap-card ${ok ? 'fb-goed' : 'fb-mis'}">
      <div class="quiz-recap-q">${i + 1}. ${q.vraag}</div>
      <div class="quiz-recap-ans"><strong>Jouw antwoord:</strong> ${quizState.antwoorden[i] != null ? q.opties[quizState.antwoorden[i]] : '—'} ${ok ? '' : `<br><strong>Juist:</strong> ${q.opties[q.juist]}`}</div>
      <p>${q.uitleg}</p>
    </div>`;
  detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ══════════════ WETGEVINGSTIJDLIJN ══════════════
const TIJDLIJN = [
  { jaar: '1957', cat: 'science', titel: 'Evelyn Hooker ontkracht "homoseksualiteit = ziekte"', desc: 'De Amerikaanse psychologe Evelyn Hooker laat zien dat experts in blinde tests geen verschil zien tussen homoseksuele en heteroseksuele mannen zonder psychiatrische diagnose. Haar studie ondergraaft het idee dat homoseksualiteit een stoornis is en legt de wetenschappelijke basis voor de latere schrapping uit de DSM. <a href="https://www.apa.org/monitor/2011/02/myth-buster" target="_blank" rel="noopener noreferrer">Lees meer over haar werk →</a>' },
  { jaar: '1969', cat: 'move', titel: 'De Stonewall-rellen', desc: 'Een politie-inval in de New Yorkse bar Stonewall Inn loopt uit op dagenlange protesten. Het geldt als het symbolische startpunt van de moderne LGBTQ+-beweging en als de aanleiding voor de allereerste Pride-optochten, een jaar later.' },
  { jaar: '1973', cat: 'science', titel: 'Homoseksualiteit geschrapt uit de DSM', desc: 'De American Psychiatric Association haalt homoseksualiteit als stoornis uit haar handboek (DSM). Een wetenschappelijk kantelpunt dat voortbouwt op onder meer het werk van Hooker: holebi-zijn is geen ziekte.' },
  { jaar: '1985', cat: 'law', titel: 'België schrapt artikel 372bis', desc: 'Dit artikel legde sinds 1965 een hogere meerderjarigheidsleeftijd op voor homoseksuele handelingen dan voor heteroseksuele. De afschaffing maakt komaf met dit wettelijke onderscheid en was lange tijd het voornaamste strijdpunt van de holebibeweging.' },
  { jaar: '1990', cat: 'science', titel: 'WHO schrapt homoseksualiteit (17 mei)', desc: 'De Wereldgezondheidsorganisatie verwijdert homoseksualiteit uit haar ziekteclassificatie. Die datum, 17 mei, leeft voort als IDAHOBIT — de internationale dag tegen holebi- en transfobie.' },
  { jaar: '2003', cat: 'law', titel: 'Openstelling van het huwelijk in België', desc: 'België wordt het tweede land ter wereld waar koppels van hetzelfde geslacht kunnen huwen. In 2006 volgt het recht op adoptie.' },
  { jaar: '2006', cat: 'law', titel: 'Yogyakarta-beginselen', desc: 'Een internationale set principes die mensenrechten toepast op seksuele oriëntatie en genderidentiteit. Een veelgebruikte referentie, ook bij latere Belgische wetgeving.' },
  { jaar: '2007', cat: 'law', titel: 'Antidiscriminatiewet & Genderwet', desc: 'België verbiedt discriminatie op grond van onder meer seksuele geaardheid, beperking en geslacht — ook in de zorg. Unia en het Instituut voor de gelijkheid van vrouwen en mannen zien toe op de naleving.' },
  { jaar: '2014', cat: 'law', titel: 'Genderwet uitgebreid', desc: 'De bescherming wordt expliciet uitgebreid naar genderidentiteit en genderexpressie, waardoor ook trans personen duidelijker beschermd zijn.' },
  { jaar: '2017', cat: 'law', titel: 'Vernieuwde Transgenderwet', desc: 'De geregistreerde voornaam en het geslacht wijzigen kan voortaan op eenvoudig verzoek, zonder medische voorwaarden zoals sterilisatie. Een belangrijke stap voor zelfbeschikking.' },
  { jaar: '2019', cat: 'science', titel: 'ICD-11: genderincongruentie geen stoornis', desc: 'De WHO verplaatst "genderincongruentie" uit het hoofdstuk van de psychische stoornissen. Transgender zijn wordt zo ook internationaal gedepathologiseerd.' },
  { jaar: '2020', cat: 'law', titel: 'Genderwet: ook geslachtskenmerken beschermd', desc: 'Een nieuwe wijziging voegt onder meer geslachtskenmerken toe aan de Genderwet, naast bijvoorbeeld borstvoeding, adoptie, medisch begeleide voortplanting en meeouderschap. Zo zijn ook intersekse personen expliciet beschermd tegen discriminatie.' },
  { jaar: '2025', cat: 'law', titel: 'Horizontaal Gelijkekansenbeleidsplan 2025–2029', desc: 'Een geïntegreerd Vlaams actieplan dat gelijke kansen als rode draad door alle beleidsdomeinen wil trekken, met bijzondere aandacht voor onder meer mensen met een handicap en LGBTI+ personen.' },
];
let tlOpen = null;
function renderTijdlijn() {
  if (!document.getElementById('tl')) return;
  document.getElementById('tl').innerHTML = TIJDLIJN.map((m, i) => `
    <div class="tl-item tl-cat-${m.cat} ${tlOpen === i ? 'open' : ''}">
      <div class="tl-dot"></div>
      <div class="tl-card" role="button" tabindex="0" onclick="toggleTl(${i})" onkeydown="tlKey(event, ${i})" aria-expanded="${tlOpen === i ? 'true' : 'false'}">
        <div class="tl-head">
          <div class="tl-year">${m.jaar}</div>
          <div class="tl-title">${m.titel}</div>
          <svg class="tl-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="tl-desc-wrap"><div class="tl-desc">${m.desc}</div></div>
      </div>
    </div>`).join('');
}
function toggleTl(i) {
  tlOpen = (tlOpen === i ? null : i);
  document.querySelectorAll('#tl .tl-item').forEach((it, idx) => {
    const open = idx === tlOpen;
    it.classList.toggle('open', open);
    const card = it.querySelector('.tl-card');
    if (card) card.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
function tlKey(e, i) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTl(i); } }

// Gestaggerde entree + rail-tekenen wanneer de tijdlijn in beeld scrollt.
let tlScrollBound = false;
function revealTimeline() {
  const tl = document.getElementById('tl');
  if (!tl) return;
  // Bij reduced-motion: alles meteen tonen, geen animatie, geen verbergen.
  if (prefersReduced()) return;
  tl.classList.add('tl-anim'); // verbergt items + rail tot ze onthuld worden
  const items = [...tl.querySelectorAll('.tl-item')];
  function check() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (!tl.classList.contains('tl-rail-in') && tl.getBoundingClientRect().top < vh - 20) {
      tl.classList.add('tl-rail-in');
    }
    let stagger = 0;
    items.forEach((it) => {
      if (it.dataset.tlq) return;
      if (it.getBoundingClientRect().top < vh - 40) {
        it.dataset.tlq = '1';
        setTimeout(() => it.classList.add('tl-in'), stagger * 75);
        stagger++;
      }
    });
    if (items.every(it => it.dataset.tlq)) {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }
  }
  let ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => { check(); ticking = false; });
  }
  if (!tlScrollBound) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    tlScrollBound = true;
  }
  check(); // meteen controleren voor het geval de tijdlijn al in beeld staat
}

// ── Initialiseren ──────────────────────────────────────────────────────────────
renderHelp();
renderWegwijzer();
renderCasus();
renderTermChips();
renderTermen();
renderScanVragen();
updateScanHint();
renderTijdlijn();
revealTimeline();
