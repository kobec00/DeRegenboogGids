// ═══════════════════════════════════════════════════════════════════════════════
//  DE REGENBOOGGIDS — INHOUD
//  Alle teksten en lijsten van de website staan in dit ene bestand. Wil je een tool,
//  organisatie, begrip, casus of mijlpaal toevoegen of aanpassen? Dan hoef je enkel
//  hier te zijn. De rest van de site (main.js) bouwt zichzelf op uit deze data.
// ═══════════════════════════════════════════════════════════════════════════════

// ── TOOLS · ORGANISATIES · BELEID ────────────────────────────────────────────────

// ww: de thema's waarvoor de Wegwijzer een item voorstelt (zie WEGWIJZER, verderop)
// land: "NL" = Nederlands materiaal (andere termen, een ander zorgstelsel en andere wetgeving)
const TOOLS = [
  // ── Voor cliënten: eenvoudige taal ──
  { title:"De Roze Pagina", org:"çavaria", thema:"Seksualiteit & Identiteit", doelgroep:"Cliënten", beschrijving:"Toegankelijke website in eenvoudige taal voor holebi, transgender en intersekse personen met een verstandelijke beperking en hun omgeving. Met info over coming-out, verliefdheid, relaties en seksualiteit, en doorverwijzing naar de regionale ontmoetingsgroepen.", url:"https://www.cavaria.be/derozepagina", ww:["relaties","comingout","gender","doorverwijzen"] },
  { title:"Meer weten over transgender zijn", org:"çavaria", thema:"Gender & Trans", doelgroep:"Cliënten", beschrijving:"Gids in begrijpelijke taal die uitlegt wat transgender zijn is, hoe het kan voelen, wat je kan meemaken en wie kan helpen. Geschikt om samen met een cliënt door te nemen.", url:"https://cavaria.be/tools-lgbti-handicap", ww:["gender","comingout"] },
  { title:"allesoverseks.be", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Cliënten", beschrijving:"Publiekswebsite in toegankelijke taal (B1-niveau) over lichaam, relaties, gender, soa's en consent. Bekroond met de Wablieft-prijs voor heldere taal.", url:"https://www.allesoverseks.be", ww:["relaties","grenzen","gender"] },
  { title:"Zanzu", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Cliënten", beschrijving:"Meertalige website (A1-niveau) met afbeeldingen en voorleesfunctie over seksuele gezondheid in veertien talen. Breed toegankelijk, ook voor laaggeletterde cliënten.", url:"https://www.zanzu.be/nl", ww:["relaties","grenzen"] },
  // ── Voor begeleiders: methodieken ──
  { title:"Sensoa Vlaggensysteem", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Begeleiders", beschrijving:"De Vlaamse basismethodiek om (grensoverschrijdend) seksueel gedrag in te schatten via zes criteria en gepast te reageren met een kleurensysteem. Maakt grenzen en seksualiteit bespreekbaar.", url:"https://www.sensoa.be/vlaggensysteem-hoe-reageren-op-seksueel-grensoverschrijdend-gedrag", ww:["grenzen","werking"] },
  { title:"Sensoa Vlaggensysteem voor Volwassenen", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Begeleiders", beschrijving:"Variant van het Vlaggensysteem specifiek voor professionals in voorzieningen voor personen met een beperking, woonzorg en geestelijke gezondheidszorg.", url:"https://www.sensoa.be/materiaal/sensoa-vlaggensysteem-voor-volwassenen-boek", ww:["grenzen","werking"] },
  { title:"Buiten de lijnen", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Begeleiders", beschrijving:"Aanvulling op het Vlaggensysteem voor mensen met een disharmonisch ontwikkelingsprofiel (beperking, trauma, gender). Ook bruikbaar bij volwassenen met een verstandelijke beperking via hun ontwikkelingsniveau.", url:"https://www.sensoa.be/materiaal/buiten-de-lijnen-methodiek", ww:["grenzen","gender"] },
  { title:"Vlaggensysteem op een bordje", org:"Sensoa", thema:"Seksualiteit & Identiteit", doelgroep:"Cliënten & Begeleiders", beschrijving:"Visueel spelmateriaal in makkelijke taal waarmee ook kwetsbare volwassenen zelf kunnen deelnemen aan het gesprek over seksualiteit en grenzen.", url:"https://www.sensoa.be/materiaal/vlaggensysteem-op-een-bordje-methodiek", ww:["grenzen","relaties"] },
  { title:"Op het kruispunt: toolset LGBTI+ & beperking", org:"çavaria en partners", thema:"Beleid & Organisatie", doelgroep:"Begeleiders", beschrijving:"Vier downloadbare tools om je organisatie inclusiever te maken: een gids inclusieve communicatie, tips voor inclusief vergaderen, een inclusiescan en de gids 'Meer weten over transgender zijn'.", url:"https://cavaria.be/tools-lgbti-handicap", ww:["werking","taal","gender"] },
  { title:"Zonder Stempel: instrumentenbox", land:"NL", org:"COC Nederland, LFB & Vilans", thema:"Beleid & Organisatie", doelgroep:"Begeleiders", beschrijving:"Instrumentenbox met werkvormen, een training en een handleiding voor ontmoetingsgroepen om seksuele en genderdiversiteit bespreekbaar te maken in de zorg voor mensen met een (licht) verstandelijke beperking.", url:"https://zonderstempel.nl", ww:["werking","comingout","relaties"] },
  { title:"LHBTI's met een verstandelijke beperking willen zichtbaar zijn!", land:"NL", org:"Movisie", thema:"Beleid & Organisatie", doelgroep:"Begeleiders", beschrijving:"Handreiking met knelpunten en een concrete aanpak om deze groep te ondersteunen en zichtbaarder te maken in de zorg.", url:"https://www.movisie.nl/publicatie/lhbtis-verstandelijke-beperking-willen-zichtbaar-zijn", ww:["werking","comingout"] },
  { title:"Roze Loper: scan & toolkit", land:"NL", org:"Roze 50+/COC, Movisie & Vilans", thema:"Beleid & Organisatie", doelgroep:"Organisaties", beschrijving:"Certificeringstraject met scan en toolkit voor LHBT-vriendelijkheid in zorginstellingen, ook toegepast bij organisaties voor mensen met een verstandelijke beperking.", url:"https://www.rozezorg.nl", ww:["werking"] },
  { title:"Toolbox Seksuele Diversiteit", land:"NL", org:"Kennisplein Gehandicaptensector", thema:"Seksualiteit & Identiteit", doelgroep:"Begeleiders", beschrijving:"Instrumenten voor het bespreken en begeleiden van LHBTI-seksualiteit bij cliënten met een verstandelijke beperking. Inclusief inspiratiekaarten en een LHBT-quiz.", url:"https://www.kennispleingehandicaptensector.nl/tips-tools/tools/toolbox-seksuele-diversiteit", ww:["relaties","comingout","taal"] },
  { title:"TransToegankelijk", land:"NL", org:"Jessica Maes, orthopedagoge", thema:"Gender & Trans", doelgroep:"Begeleiders", beschrijving:"Nederlands platform voor begeleiders en naasten van transgender en non-binaire personen met een licht verstandelijke beperking. Met uitleg, een databank met materiaal, een sociale kaart en vorming.", url:"https://www.transtoegankelijk.nl", ww:["gender","taal"] },
  { title:"Transgendergids voor verstandelijke beperking", land:"NL", org:"Transvisie, COC Zonder Stempel & Transgender Netwerk Nederland", thema:"Gender & Trans", doelgroep:"Cliënten & Begeleiders", beschrijving:"Gids om over transgendergevoelens te praten en over een eventuele transitie. Specifiek toegankelijk gemaakt voor mensen met een verstandelijke beperking.", url:"https://www.transgendernetwerk.nl/kennis/publicatie/transgender-gids-in-toegankelijke-taal/", ww:["gender","comingout"] },
];

const ORGS = [
  // ── Kern: kruispunt zorg, beperking & seksualiteit ──
  { naam:"Aditi vzw", regio:"Heel Vlaanderen", type:"Begeleiding & Advies", beschrijving:"Advies- en informatiecentrum rond relaties, intimiteit en seksualiteit voor personen met een beperking of psychische kwetsbaarheid en hun netwerk. Erkend door het VAPH; biedt teamondersteuning, vorming en individuele begeleiding.", url:"https://aditivzw.be", telefoon:null, ww:["relaties","grenzen","werking"] },
  { naam:"Sensoa", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Vlaams expertisecentrum voor seksuele gezondheid. Ontwikkelt methodieken zoals het Vlaggensysteem en toegankelijke websites om seksualiteit en grenzen bespreekbaar te maken.", url:"https://www.sensoa.be", telefoon:null, ww:["grenzen","relaties"] },
  // ── Koepel & algemeen LGBTI+ ──
  { naam:"çavaria", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Vlaamse belangenverdediger en koepel voor LGBTI+ personen en verenigingen. Beheert De Roze Pagina, het project 'Op het kruispunt' en een woordenlijst. Sinds de fusie met KliQ (2025) biedt çavaria zelf vorming en advies aan via çavaria vorming.", url:"https://www.cavaria.be", telefoon:null, ww:["comingout","gender","werking","taal"] },
  { naam:"Lumi", regio:"Heel Vlaanderen", type:"Anonieme steun", beschrijving:"De gratis en anonieme onthaal- en infolijn van çavaria voor alle vragen over gender, geslacht en seksuele oriëntatie, via telefoon, chat en mail. Ook voor naasten en begeleiders.", url:"https://www.lumi.be", telefoon:"0800 99 533", ww:["comingout","gender","relaties","taal"] },
  { naam:"Transgender Infopunt (TIP)", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Vlaams onthaal- en expertisecentrum voor transgenderthema's, ingebed in UZ Gent. Gratis en anoniem, met een zorgkaart van gespecialiseerde hulpverleners.", url:"https://www.transgenderinfo.be", telefoon:"0800 96 316", ww:["gender"] },
  { naam:"çavaria vorming (voorheen KliQ)", regio:"Heel Vlaanderen", type:"Begeleiding & Advies", beschrijving:"Het vormings- en adviesaanbod van çavaria. KliQ vzw is in 2025 opgegaan in çavaria; de vormingen en trajectbegeleiding voor sectoren zoals woonzorg en hulpverlening die inclusiever willen werken, lopen nu onder de naam çavaria vorming.", url:"https://vorming.cavaria.be", telefoon:null, ww:["werking","taal"] },
  { naam:"GRIP vzw", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Mensenrechtenorganisatie van en voor personen met een beperking. Heeft een eigen pagina in eenvoudige taal en denkt mee over het kruispunt beperking en LGBTI+.", url:"https://www.gripvzw.be", telefoon:null, ww:["werking"] },
  { naam:"Intersekse Vlaanderen", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Eerste en enige Vlaamse belangenvereniging van, voor en door mensen geboren met een intersekse variatie en hun ouders.", url:"https://www.interseksevlaanderen.be", telefoon:null, ww:["gender"] },
  { naam:"Vlaams Mensenrechteninstituut (VMRI)", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Onafhankelijk instituut dat sinds 15 maart 2023 de mensenrechten in Vlaanderen beschermt, in de plaats van het Vlaamse deel van Unia en de Genderkamer. Meld hier discriminatie in situaties waarvoor Vlaanderen bevoegd is, zoals welzijn en zorg (ook in een VAPH-voorziening), onderwijs of wonen. Het VMRI zoekt eerst een oplossing via gratis en vertrouwelijke bemiddeling, en volgt voor Vlaanderen ook het VN-verdrag Handicap op.", url:"https://www.vlaamsmensenrechteninstituut.be/doe-een-melding", telefoon:null, ww:["werking"] },
  { naam:"Wel Jong vzw", regio:"Heel Vlaanderen", type:"Ontmoeting & Activiteiten", beschrijving:"Jeugdorganisatie voor en door LGBTQ+ jongeren tot 30 jaar, met laagdrempelige activiteiten en deelwerkingen zoals Min19 en T-Jong.", url:"https://www.weljong.be", telefoon:null, ww:["comingout","relaties"] },
  { naam:"Aut & Out", regio:"Heel Vlaanderen", type:"Ontmoeting & Activiteiten", beschrijving:"Activiteiten en ontmoetingsplekken voor en door LGBTQIA+ volwassenen met autisme, de enige werking in België op dit kruispunt. Let op: de bijeenkomsten zijn gericht op volwassenen met een normale of hoge begaafdheid en er zijn geen begeleiders, dus je cliënt moet zelfstandig kunnen meedoen.", url:"https://www.autenout.be", telefoon:null, ww:["comingout","relaties"] },
  { naam:"Dito vzw", regio:"Heel Vlaanderen", type:"Info & Ondersteuning", beschrijving:"Vereniging van en voor mensen met een handicap of chronische ziekte en hun netwerk, met vrijetijdsaanbod, vrijwilligerswerk en belangenbehartiging. Geen specifieke LGBTI+-werking, wel een aanspreekpunt voor algemene vragen rond vrije tijd en participatie.", url:"https://www.ditovzw.be", telefoon:null, ww:[] },
  // ── Regenbooghuizen per provincie ──
  { naam:"Het Roze Huis", regio:"Antwerpen", type:"Info & Ondersteuning", beschrijving:"Regenbooghuis en koepel voor LGBTQIA+ verenigingen in de provincie Antwerpen. Met ontmoeting, belangenbehartiging en een RegenboogBib.", url:"https://www.hetrozehuis.be", telefoon:null, ww:["comingout"] },
  { naam:"Regenbooghuis Gent (RBG)", regio:"Gent (Oost-Vlaanderen)", type:"Info & Ondersteuning", beschrijving:"Ontmoetingshuis voor LGBTQI+ personen in de Kammerstraat in Gent. Sinds mei 2026 opnieuw open met een nieuwe ploeg (voorlopige naam 'Regenbooghuis Gent'), als doorstart na Casa Rosa. Zet in op onthaal en info en is een thuisbasis voor verenigingen. Casa Rosa vzw beheert nog het gebouw; de stad Gent financiert de werking voor 2026-2028.", url:"https://www.casarosa.be", telefoon:null, ww:["comingout"] },
  { naam:"UniQue", regio:"Leuven (Vlaams-Brabant)", type:"Info & Ondersteuning", beschrijving:"Vlaams-Brabants regenbooghuis dat verenigingen en vrijwilligers ondersteunt. Nam mee het initiatief voor De Roze Ballon voor holebi's met een verstandelijke beperking.", url:"https://www.unique-rbh.be", telefoon:null, ww:["comingout"] },
  { naam:"Genres Pluriels", regio:"Brussel", type:"Begeleiding & Advies", beschrijving:"Franstalige organisatie die de rechten van transgender, genderfluïde en intersekse personen verdedigt. Biedt therapie, permanenties en steungroepen.", url:"https://www.genrespluriels.be", telefoon:null, ww:["gender"] },
  { naam:"Rainbowhouse Brussel", regio:"Brussel", type:"Info & Ondersteuning", beschrijving:"LGBTQIA+ gemeenschapscentrum in Brussel, ook met een meldpunt voor LGBTQI+-fobe incidenten.", url:"https://rainbowhouse.be/nl/", telefoon:null, ww:["comingout"] },
  { naam:"Merhaba vzw", regio:"Brussel", type:"Info & Ondersteuning", beschrijving:"Organisatie voor LGBT+ personen met een migratieachtergrond, bereikbaar via telefoon, WhatsApp en mail, met praatgroepen.", url:"https://www.merhaba.be", telefoon:null, ww:["comingout"] },
  // ── Regionale ontmoetingsgroepen voor de doelgroep zelf ──
  { naam:"De Roze Ballon", regio:"Leuven (Vlaams-Brabant)", type:"Ontmoeting & Activiteiten", beschrijving:"Vereniging voor holebi's met een verstandelijke beperking. Regelmatige activiteiten zoals bowlen, museumbezoek en uitstappen.", url:"https://www.cavaria.be/verenigingen/de-roze-ballon", telefoon:null, ww:["relaties","comingout"] },
  { naam:"De Roze Joker", regio:"Gent (Oost-Vlaanderen)", type:"Ontmoeting & Activiteiten", beschrijving:"Vereniging voor holebi's met een beperking, maar iedereen is welkom. Zes toegankelijke activiteiten per jaar.", url:"https://www.cavaria.be/verenigingen/roze-joker", telefoon:null, ww:["relaties","comingout"] },
  { naam:"De Roze Bink", regio:"Limburg", type:"Ontmoeting & Activiteiten", beschrijving:"Voor holebi's en transgender personen met een beperking. Activiteiten zoals een praatcafé, filmavond en bowling.", url:"https://www.cavaria.be/verenigingen/roze-bink", telefoon:null, ww:["relaties","comingout"] },
];

// Mogelijk inactief: werkingen die niet meer op De Roze Pagina staan als actieve vereniging.
// Ze tellen nergens mee (geen teller, regio, zoekresultaat of Wegwijzer) en staan enkel
// onderaan /organisaties/, tot hun status bevestigd is. Weer actief? Zet ze terug in ORGS.
const ORGS_INACTIEF = [
  { naam:"De Roze Maks", regio:"West-Vlaanderen", beschrijving:"Ontmoetingsgroep voor holebi's en LGBTI+ personen met een verstandelijke beperking in West-Vlaanderen.", gecheckt:"oktober 2026" },
  { naam:"De Roze Wapper", regio:"Antwerpen", beschrijving:"Ontmoetingsgroep voor holebi's met een verstandelijke beperking in de regio Antwerpen.", gecheckt:"oktober 2026" },
];

const BELEID = [
  // ── Rechten & wetgeving ──
  { titel:"VN-Verdrag Rechten Personen met een Handicap (VRPH)", groep:"Rechten & wetgeving", type:"Juridisch kader", beschrijving:"Het VRPH garandeert het recht op volledige inclusie en participatie, inclusief op het vlak van relaties en seksualiteit. Artikel 12 vraagt om mensen te ondersteunen bij hun beslissingen, in plaats van in hun plaats te beslissen. Bindend voor België sinds 2009. Unia volgt de naleving op, voor Vlaamse bevoegdheden samen met het Vlaams Mensenrechteninstituut.", url:"https://www.unia.be/nl/wetgeving-en-rechtspraak/internationaal-verdrag-inzake-de-rechten-van-personen-met-een-handicap-en-facultatief-protocol" },
  { titel:"Vlaams Gelijkekansendecreet (2008)", groep:"Rechten & wetgeving", type:"Juridisch kader", beschrijving:"Het Vlaamse decreet van 10 juli 2008 verbiedt discriminatie in alles waarvoor Vlaanderen bevoegd is, zoals welzijn, zorg, onderwijs en wonen. Daar valt ook de zorg voor personen met een beperking (VAPH) onder. Het beschermt onder meer tegen discriminatie op grond van seksuele oriëntatie, genderidentiteit, genderexpressie en handicap, en wie een redelijke aanpassing weigert aan iemand met een handicap, discrimineert ook. Meldingen gaan naar het Vlaams Mensenrechteninstituut.", url:"https://www.vlaanderen.be/discriminatie-melden" },
  { titel:"Antidiscriminatiewet (2007)", groep:"Rechten & wetgeving", type:"Juridisch kader", beschrijving:"Federale wet die discriminatie verbiedt op grond van onder meer seksuele oriëntatie, handicap en gezondheidstoestand. Ze geldt voor materies waarvoor de federale overheid bevoegd is; Unia ziet toe op de naleving. Gaat het over de zorg in een Vlaamse voorziening, dan geldt het Vlaamse Gelijkekansendecreet.", url:"https://www.unia.be/nl/federale-antidiscriminatiewetgeving-in-detail/antidiscriminatiewet-in-detail" },
  { titel:"Genderwet (2007, uitgebreid 2014/2020)", groep:"Rechten & wetgeving", type:"Juridisch kader", beschrijving:"Federale wet die discriminatie op grond van geslacht verbiedt. Sinds 2014 vallen daar ook expliciet genderidentiteit en genderexpressie onder, sinds 2020 ook geslachtskenmerken (naast onder meer borstvoeding, adoptie, medisch begeleide voortplanting, vaderschap en meemoederschap). Beschermt trans en intersekse cliënten. Het Instituut voor de gelijkheid van vrouwen en mannen (IGVM) ziet toe op de naleving.", url:"https://igvm-iefh.belgium.be/nl/themas/discriminatie/beschermde-criteria" },
  { titel:"Transgenderwet (2017)", groep:"Rechten & wetgeving", type:"Juridisch kader", beschrijving:"Maakt het mogelijk om de geregistreerde voornaam en het geslacht te wijzigen op eenvoudig verzoek, zonder medische voorwaarde. Relevant bij naam- en registratievragen van trans cliënten. Ook een meerderjarige onder bewindvoering kan de standaardprocedure volgen, tenzij het vonnis van de vrederechter uitdrukkelijk zegt dat de persoon daarvoor onbekwaam is. Het is een hoogstpersoonlijke handeling: de cliënt legt de verklaring zelf af, een bewindvoerder kan dat niet in diens plaats doen.", url:"https://www.vlaanderen.be/aanpassing-van-de-geslachtsregistratie" },
  { titel:"Wet op de bewindvoering (2013)", groep:"Rechten & wetgeving", type:"Juridisch kader", beschrijving:"Sinds 1 september 2014 legt de vrederechter een beschermingsmaatregel op maat op: bewind over de goederen, over de persoon of beide, als bijstand of als vertegenwoordiging. Voor alles wat de vrederechter niet uitdrukkelijk vermeldt, blijft de persoon zelf bekwaam. Sommige beslissingen zijn hoogstpersoonlijk: een bewindvoerder kan ze nooit in iemands plaats nemen, zoals toestemmen in een huwelijk of de aanpassing van de geslachtsregistratie. En gevoelens, geaardheid en genderidentiteit zijn geen rechtshandelingen: daar heeft geen enkele bewindvoerder zeggenschap over.", url:"https://justice.belgium.be/sites/default/files/protection-beschermen-nl_0.pdf" },
  // ── Vlaams zorgbeleid ──
  { titel:"VAPH: bespreekbaarheid seksualiteit & kwaliteit", groep:"Vlaams zorgbeleid", type:"Beleidskader", beschrijving:"Het Vlaams Agentschap voor Personen met een Handicap verwacht dat voorzieningen seksualiteit bespreekbaar maken en een veilig, kwaliteitsvol klimaat bieden. Vergunde aanbieders worden geïnspecteerd door Zorginspectie. Het VAPH geeft zorgverleners ook handvatten om te reageren op seksueel grensoverschrijdend gedrag.", url:"https://www.vaph.be/nieuws/2023/03/seksueel-grensoverschrijdend-gedrag-wat-doet-u-als-zorgverlener" },
  { titel:"Vlaams Horizontaal Gelijkekansenbeleidsplan 2025-2029", groep:"Vlaams zorgbeleid", type:"Beleidskader", beschrijving:"Geïntegreerd Vlaams actieplan met aandacht voor zowel mensen met een beperking als LGBTI+ personen, inclusief acties rond kruispuntdenken en inclusie.", url:"https://www.vlaanderen.be/cjm/nl/horizontaal-beleid/gelijkekansenbeleid" },
  // ── Wetenschappelijke onderbouwing ──
  { titel:"DSM: schrapping van homoseksualiteit (APA, 1973)", groep:"Wetenschappelijke onderbouwing", type:"Wetenschappelijk kader", beschrijving:"De American Psychiatric Association schrapte in 1973 homoseksualiteit als stoornis uit de DSM. Wetenschappelijk fundament tegen stigma: holebi-zijn is geen ziekte.", url:"https://www.apaf.org/library-archives/galleries/lgbtq-leaders/history-of-dsm-and-homosexuality/" },
  { titel:"WHO/ICD: declassificatie homoseksualiteit (1990)", groep:"Wetenschappelijke onderbouwing", type:"Wetenschappelijk kader", beschrijving:"De Wereldgezondheidsorganisatie schrapte in 1990 homoseksualiteit als stoornis. ICD-11 verving 'transseksualisme' door 'genderincongruentie', niet langer een psychische stoornis. Sinds 2005 is 17 mei daarom IDAHOBIT, de internationale dag tegen holebi- en transfobie.", url:"https://www.who.int/europe/news/item/17-05-2019-moving-one-step-closer-to-better-health-and-rights-for-transgender-people" },
  { titel:"FRA: EU LGBTIQ Survey III (2024)", groep:"Wetenschappelijke onderbouwing", type:"Wetenschappelijk kader", beschrijving:"Het EU-Grondrechtenagentschap brengt discriminatie van LGBTIQ-personen in kaart. Analyses tonen verhoogde drempels voor LGBTI+ personen met een beperking, onder meer in de gezondheidszorg.", url:"https://fra.europa.eu/nl/publication/2024/lgbtiq-equality-crossroads-progress-and-challenges" },
  { titel:"Intersectionaliteit & dubbele kwetsbaarheid", groep:"Wetenschappelijke onderbouwing", type:"Wetenschappelijk kader", beschrijving:"Onderzoek toont aan dat LGBTQ+ personen met een verstandelijke beperking een dubbele minderheidsstresspositie innemen. Dit vraagt een intersectionele benadering in beleid en begeleiding.", url:"https://www.cavaria.be/kruispuntdenken-een-solidaire-en-inclusieve-beweging" },
  // ── Praktijk & vorming ──
  { titel:"Seksueel gezondheidsbeleid in zorgvoorzieningen", groep:"Praktijk & vorming", type:"Good Practice", beschrijving:"Richtlijnen voor het ontwikkelen van een expliciete visietekst en beleid rond seksualiteit en genderdiversiteit in residentiële zorgorganisaties.", url:"https://www.sensoa.be/beleid-uitwerken-rond-seksueel-gedrag" },
  { titel:"Affirmatieve zorgbenadering", groep:"Praktijk & vorming", type:"Praktijkkader", beschrijving:"Een affirmatieve aanpak erkent en bevestigt de seksuele en genderidentiteit van cliënten als waardevol en normaal. çavaria's project 'Op het kruispunt' biedt tools en visie specifiek voor LGBTI+ personen met een handicap.", url:"https://www.cavaria.be/op-het-kruispunt-voor-lgbti-personen-met-een-handicap" },
  { titel:"Vorming: LGBTQ+-inclusieve begeleiding", groep:"Praktijk & vorming", type:"Nascholing", beschrijving:"çavaria vorming (voorheen KliQ) biedt vormingen aan voor zorgprofessionals over seksuele en genderdiversiteit, afgestemd op de zorgsector.", url:"https://vorming.cavaria.be/kliq-vorming-en-begeleiding-rond-gender-en-seksuele-diversiteit" },
  { titel:"Handelingsverlegenheid bespreekbaar maken", groep:"Praktijk & vorming", type:"Teamtool", beschrijving:"Door kennis op te doen over LGBTQ+ personen en hun noden ervaren begeleiders minder handelingsverlegenheid. çavaria vorming (voorheen KliQ) voorziet vorming voor de welzijns- en zorgsector die hierop inzet.", url:"https://vorming.cavaria.be" },
];

// Waar meld je discriminatie? Getoond als blok onder 'Rechten & wetgeving' op /beleid/#melden.
// Welk meldpunt bevoegd is, hangt af van wie bevoegd is voor de situatie (Vlaanderen of federaal).
const MELDPUNTEN = [
  { kort:"VMRI", naam:"Vlaams Mensenrechteninstituut", wanneer:"Situaties waarvoor Vlaanderen bevoegd is: welzijn en zorg (ook een VAPH-voorziening), onderwijs, wonen of een Vlaamse overheidsdienst.", extra:"Sinds 15 maart 2023, in de plaats van het Vlaamse deel van Unia en de Genderkamer. Zoekt eerst een oplossing via bemiddeling.", url:"https://www.vlaamsmensenrechteninstituut.be/doe-een-melding", tel:"0800 6 11 03", tone:"teal", icon:"heart" },
  { kort:"Unia", naam:"Meldpunt voor federale materies", wanneer:"Situaties waarvoor de federale overheid bevoegd is, bvb. bij een verzekering, de bank of de politie, en bij haatspraak of een haatmisdrijf.", extra:"Behandelt in Vlaanderen geen Vlaamse materies meer en verwijst door voor discriminatie op grond van geslacht.", url:"https://www.signalement.unia.be/nl/meld-het", tel:"0800 12 800", tone:"blue", icon:"scale" },
  { kort:"IGVM", naam:"Instituut voor de gelijkheid van vrouwen en mannen", wanneer:"Discriminatie op grond van geslacht in federale materies, ook op grond van genderidentiteit, genderexpressie of geslachtskenmerken.", extra:"Gratis en vertrouwelijk advies, en waar nodig bijstand in een procedure. Het gratis nummer deelt het IGVM met Unia: volg het keuzemenu.", url:"https://igvm-iefh.belgium.be/nl/themas/discriminatie/het-instituut-en-discriminatie", tel:"0800 12 800", tone:"violet", icon:"gender" },
];

const BELEID_GROEPEN = [
  { naam:"Praktijk & vorming", intro:"Concrete kaders, good practices en nascholing voor in het team." },
  { naam:"Rechten & wetgeving", intro:"Wat cliënten wettelijk mogen verwachten, en waartegen ze beschermd zijn." },
  { naam:"Vlaams zorgbeleid", intro:"Wat voorzieningen en begeleiders vanuit het zorgkader moeten waarmaken." },
  { naam:"Wetenschappelijke onderbouwing", intro:"De feiten en cijfers achter een affirmatieve, niet-pathologiserende benadering." },
];

// ── SNELLE HULP: crisis- en hulplijnen (icon: heart · chat · rainbow · shield · star) ──
const HULPLIJNEN = [
  { naam: 'Zelfmoordlijn 1813', desc: 'Bij gedachten aan zelfdoding — voor jezelf of voor iemand anders. Telefoon dag en nacht; chat elke dag 17-00u (wo vanaf 12u).', tel: '1813', chat: 'https://www.zelfmoord1813.be/ik-heb-hulp-nodig', kleur: 'rose', icon: 'heart' },
  { naam: 'Tele-Onthaal', desc: 'Een luisterend oor bij elke zorg of crisis. Telefoon 24 uur op 24; chat elke dag 18-23u (wo en zo vanaf 15u).', tel: '106', chat: 'https://www.tele-onthaal.be', kleur: 'teal', icon: 'chat' },
  { naam: 'Lumi', desc: 'De LGBTI+ infolijn van çavaria: gender, geaardheid, coming-out. Ook voor begeleiders en naasten. Telefoon ma 18.30-21.30u; chat ma, wo en do 18.30-21.30u; mailen kan altijd.', tel: '0800 99 533', chat: 'https://lumi.be', kleur: 'violet', icon: 'rainbow' },
  { naam: '1712', desc: 'Bij geweld, misbruik of grensoverschrijdend gedrag. Gratis en discreet. Telefoon op werkdagen 9-18u; chat ma-do 13-17u en 18-22u, vr 13-17u.', tel: '1712', chat: 'https://www.1712.be', kleur: 'amber', icon: 'shield' },
  { naam: 'Awel', desc: 'Voor kinderen en jongeren met een vraag, verhaal of probleem. Telefoon ma-za 16-22u (wo vanaf 14u); chat ma-za 18-22u; niet op zon- en feestdagen.', tel: '102', chat: 'https://www.awel.be', kleur: 'teal', icon: 'star' },
];

// ── WEGWIJZER ────────────────────────────────────────────────────────────────────
// De Wegwijzer stelt twee of drie vragen en weegt daarna elk praktijkinstrument, elke
// casus, tool en organisatie. Wat het best past, staat bovenaan. Beleid hoort er bewust
// niet bij. Welke thema's een item raakt, staat in zijn veld 'ww' (het eerste is het
// hoofdthema): relaties · grenzen · gender · comingout · taal · werking · doorverwijzen.
//
// Per keuze: val (komt in de link), t (titel), d (uitleg), icon, tone (kleur),
// zin (zo staat de keuze in de samenvatting) en waarom (label bij een passend resultaat).
// Welke vragen er komen, beslist main.js: 'casus' enkel bij een concrete situatie,
// 'regio' enkel als er regionale organisaties zijn die bij de keuzes passen.
const WW_STAPPEN = [
  {
    key: 'wie', vraag: 'Voor wie zoek je iets?', kort: 'Voor wie?', opties: [
      { val: 'client', t: 'Een cliënt', d: 'Iets toegankelijks om samen te bekijken of door te geven.', icon: 'user', tone: 'teal', zin: 'een cliënt', waarom: 'Voor cliënten' },
      { val: 'begeleider', t: 'Mezelf als begeleider', d: 'Handvatten en achtergrond om sterker in mijn schoenen te staan.', icon: 'badge', tone: 'violet', zin: 'jezelf als begeleider', waarom: 'Voor begeleiders' },
      { val: 'team', t: 'Mijn team of organisatie', d: 'Een gedeelde visie, vorming en afspraken.', icon: 'users', tone: 'amber', zin: 'je team of organisatie', waarom: 'Voor teams' },
    ]
  },
  {
    key: 'wat', vraag: 'Waar gaat het vooral over?', kort: 'Welk thema?', opties: [
      { val: 'relaties', t: 'Relaties & verliefdheid', d: 'Verliefd zijn, een lief, intimiteit en seksualiteit.', icon: 'heart', tone: 'rose', zin: 'relaties en verliefdheid', waarom: 'Relaties' },
      { val: 'grenzen', t: 'Grenzen & seksueel gedrag', d: 'Inschatten wat oké is, consent en gepast reageren.', icon: 'shield', tone: 'amber', zin: 'grenzen en seksueel gedrag', waarom: 'Grenzen' },
      { val: 'gender', t: 'Gender & transgender', d: 'Genderidentiteit, transitie, intersekse, de juiste naam.', icon: 'gender', tone: 'violet', zin: 'gender en transgender', waarom: 'Gender' },
      { val: 'comingout', t: 'Coming-out & zelfbeeld', d: 'Uit de kast komen, zichzelf aanvaarden, geloof en familie.', icon: 'rainbow', tone: 'blue', zin: 'coming-out en zelfbeeld', waarom: 'Coming-out' },
      { val: 'taal', t: 'Taal & begrippen', d: 'De juiste woorden vinden om erover te praten.', icon: 'book', tone: 'teal', zin: 'taal en begrippen', waarom: 'Taal' },
      { val: 'werking', t: 'Inclusief werken', d: 'Visie, afspraken en een veilig klimaat in het team.', icon: 'layers', tone: 'slate', zin: 'inclusief werken', waarom: 'Inclusief werken' },
      // doel: geen thema maar een vraag; deze twee staan apart onder de thema's
      { val: 'situatie', doel: true, t: 'Een concrete situatie', d: 'Ik zit met een specifiek moment uit de leefgroep.', icon: 'bubble', tone: 'violet', zin: 'een concrete situatie', waarom: 'Situatie' },
      { val: 'doorverwijzen', doel: true, t: 'Iemand doorverwijzen', d: 'Een organisatie of aanspreekpunt vinden.', icon: 'compass', tone: 'blue', zin: 'doorverwijzen', waarom: 'Doorverwijzen' },
    ]
  },
  // De keuzes bij deze vraag zijn de casussen hieronder (CASUS)
  { key: 'casus', vraag: 'Welke situatie lijkt het meest op de jouwe?', kort: 'Welke situatie?' },
  {
    key: 'regio', vraag: 'In welke regio zoek je?', kort: 'Welke regio?', optioneel: true, opties: [
      { val: 'Heel Vlaanderen', t: 'Maakt niet uit', d: 'Enkel werkingen in heel Vlaanderen.', icon: 'globe', kort: 'Heel Vlaanderen', zin: 'heel Vlaanderen' },
      { val: 'Antwerpen', t: 'Antwerpen', icon: 'pin' },
      { val: 'Gent (Oost-Vlaanderen)', t: 'Oost-Vlaanderen', icon: 'pin' },
      { val: 'Leuven (Vlaams-Brabant)', t: 'Vlaams-Brabant', icon: 'pin' },
      { val: 'West-Vlaanderen', t: 'West-Vlaanderen', icon: 'pin' },
      { val: 'Limburg', t: 'Limburg', icon: 'pin' },
      { val: 'Brussel', t: 'Brussel', icon: 'pin' },
    ]
  },
];

// De vijf instrumenten van de Praktijk-pagina, zoals de Wegwijzer ze weegt.
// voor: hoe goed het past per doelgroep (0 = niet, 4 = uitstekend)
const WW_PRAKTIJK = [
  { tab: 'taal', t: 'Taalgids', d: 'Begrippen rond seksuele en genderdiversiteit, in toegankelijke taal. Naslaan of inoefenen met leerkaarten.', icon: 'book', tone: 'teal', ww: ['taal', 'gender', 'comingout', 'relaties'], voor: { client: 3, begeleider: 3, team: 2 } },
  { tab: 'vlag', t: 'Vlaggensysteem in het kort', d: 'Seksueel gedrag inschatten met zes criteria en vier vlaggen, en weten hoe je gepast reageert.', icon: 'flag', tone: 'rose', ww: ['grenzen', 'relaties', 'werking'], voor: { client: 1, begeleider: 3, team: 3 } },
  { tab: 'scan', t: 'Team-zelfscan', d: 'Veertien stellingen over acht domeinen: waar staat je team, en waar liggen de kansen?', icon: 'clipboard', tone: 'amber', ww: ['werking'], voor: { client: 0, begeleider: 1, team: 4 } },
  { tab: 'quiz', t: 'Test jezelf', d: 'Tien korte vragen over je eigen reflexen, met telkens uitleg bij het juiste antwoord.', icon: 'help', tone: 'blue', ww: ['taal', 'werking', 'gender'], voor: { client: 0, begeleider: 3, team: 2 } },
  { tab: 'casus', t: 'Casuïstiek', d: 'Herkenbare situaties uit de leefgroep, telkens met een korte duiding en concrete handvatten.', icon: 'bubble', tone: 'violet', ww: ['situatie'], voor: { client: 1, begeleider: 3, team: 3 } },
];
// Voorproefje uit de taalgids per thema: de soort waarop de taalgids opent, en vier begrippen (exact zoals in TERMEN)
const WW_TERMEN = {
  gender: { cat: 'Gender', woorden: ['Genderidentiteit', 'Transgender', 'Non-binair', 'Voornaamwoorden'] },
  comingout: { cat: 'Algemeen', woorden: ['Coming-out', 'In de kast', 'Affirmatief', 'Queer'] },
  relaties: { cat: 'Oriëntatie', woorden: ['Holebi', 'Biseksueel', 'Aseksueel', 'Heteronormativiteit'] },
  standaard: { cat: '', woorden: ['LGBTQIA+', 'Heteronormativiteit', 'Deadnaming', 'Misgenderen'] },
};

// ── PRAKTIJK: casuïstiek ─────────────────────────────────────────────────────────
// thema: groepeert de situaties in de filter (Identiteit · Relaties & seksualiteit · Team & netwerk)
// ww: de thema's voor de Wegwijzer (zie hierboven)
const CASUS = [
  {
    thema: 'Identiteit', ww: ['comingout', 'gender', 'doorverwijzen'], tag: 'Gender & identiteit', titel: 'Een cliënt vertelt je in vertrouwen dat die zich geen jongen voelt.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Een cliënt die dit deelt, zet een grote stap en toont vertrouwen. Het gaat zelden om een impuls: vaak ging er een lang, stil proces aan vooraf. Jouw eerste reactie bepaalt mee of die deur openblijft of voorgoed dichtgaat.' },
      { kop: 'Wat kan je doen?', tekst: 'Luister zonder te sturen of te minimaliseren, en bevestig het vertrouwen ("dank je dat je dit met mij deelt"). Leg niet meteen labels of oplossingen op. Vraag hoe de cliënt zelf aangesproken en benaderd wil worden, bvb. met welke naam of welk voornaamwoord, en respecteer dat. Ga na wat de cliënt nu nodig heeft: gehoord worden, info, of contact met lotgenoten.' },
      { kop: 'Waar let je op?', tekst: 'Respecteer het tempo en de privacy: het is niet aan jou om dit verder te vertellen. Bespreek samen wie wat mag weten. Vermijd aannames over "zekerheid" of over een transitie — dat hoeft nu niet vast te liggen. Beloof wel geen geheimhouding die je niet kan waarmaken: zie je signalen dat de cliënt niet veilig is, dan schakel je hulp in. Zeg dat dan eerlijk, en bespreek met de cliënt hoe. Schakel bij twijfel een gespecialiseerde dienst in, voor de cliënt én voor jezelf.' },
    ],
    chips: [{ l: 'Transgender Infopunt', url: 'https://www.transgenderinfo.be' }, { l: 'Meer weten over transgender zijn', url: 'https://cavaria.be/tools-lgbti-handicap' }, { l: 'Naar de taalgids', go: 'taal' }],
  },
  {
    thema: 'Relaties & seksualiteit', ww: ['relaties', 'grenzen'], tag: 'Seksualiteit & relaties', titel: 'Twee huisgenoten van hetzelfde geslacht worden verliefd op elkaar.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Verliefdheid tussen cliënten is in de eerste plaats iets moois en gewoon. Bij koppels van hetzelfde geslacht ontstaat soms extra terughoudendheid bij begeleiding of familie — terwijl het recht op relaties en intimiteit voor iedereen gelijk is.' },
      { kop: 'Wat kan je doen?', tekst: 'Benader het zoals je elke prille relatie zou benaderen: met ruimte, respect en aandacht voor wederzijdse toestemming. Toets of beide personen het even graag willen en of ze begrijpen wat ze willen. Bied ondersteuning op maat — info over relaties en seksualiteit in toegankelijke taal kan helpen.' },
      { kop: 'Waar let je op?', tekst: 'Behandel het koppel niet strenger dan een man-vrouwkoppel: dat zou een vorm van ongelijke behandeling zijn. Hou rekening met draagkracht en ontwikkelingsniveau, niet met het geslacht van de partner. Het Sensoa Vlaggensysteem helpt om gezond gedrag van grensoverschrijdend gedrag te onderscheiden, zonder te vertrekken vanuit een verbod.' },
    ],
    chips: [{ l: 'Sensoa Vlaggensysteem', url: 'https://www.sensoa.be/vlaggensysteem-hoe-reageren-op-seksueel-grensoverschrijdend-gedrag' }, { l: 'De Roze Pagina', url: 'https://www.cavaria.be/derozepagina' }, { l: 'allesoverseks.be', url: 'https://www.allesoverseks.be' }, { l: 'Vlaggensysteem in het kort', go: 'vlag' }],
  },
  {
    thema: 'Team & netwerk', ww: ['werking', 'taal'], tag: 'Team & cultuur', titel: "Een collega maakt geregeld grappen over 'holebi's' in de leefgroep.",
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Ook "onschuldig" bedoelde grappen bepalen het klimaat. Voor een cliënt die worstelt met hun identiteit is zo\'n opmerking een signaal: hier kan ik beter zwijgen. Stilte van de rest van het team wordt dan al snel als instemming gelezen.' },
      { kop: 'Wat kan je doen?', tekst: 'Benoem het, liefst rustig en concreet, bvb. "ik merk dat zulke grappen hier vaak vallen — ik denk niet dat ze voor iedereen onschuldig overkomen." Maak het bespreekbaar in team of intervisie in plaats van enkel onder vier ogen, en koppel het aan de visie van de organisatie als die er is.' },
      { kop: 'Waar let je op?', tekst: 'Het gaat niet om iemand wegzetten als "fout", maar om het effect op cliënten centraal te zetten. Handelingsverlegenheid is vaak de echte oorzaak: een gedeelde visie en vorming werken duurzamer dan een terechtwijzing alleen.' },
    ],
    chips: [{ l: 'Doe de team-zelfscan', go: 'scan' }, { l: 'çavaria vorming', url: 'https://vorming.cavaria.be' }, { l: 'Naar beleid & vorming', go: 'beleid' }],
  },
  {
    thema: 'Team & netwerk', ww: ['werking', 'comingout'], tag: 'Netwerk & deontologie', titel: "De ouders van een cliënt willen niet dat hun zoon 'zo' is en vragen jou er niet op in te gaan.",
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Hier botsen twee dingen: de bezorgdheid (of het ongemak) van het netwerk en het zelfbeschikkingsrecht van de cliënt. Als begeleider sta je in de eerste plaats naast de cliënt, niet naast de wens om iets weg te duwen.' },
      { kop: 'Wat kan je doen?', tekst: 'Erken de bezorgdheid van de ouders zonder de identiteit van de cliënt te ontkennen. Leg uit dat negeren of verbieden de cliënt niet "verandert", maar wel schaadt en het vertrouwen breekt. Zoek waar mogelijk naar dialoog, geef ouders correcte info en betrek desnoods een neutrale dienst.' },
      { kop: 'Waar let je op?', tekst: 'Je bent gebonden aan het belang en de autonomie van de cliënt, en aan het discriminatieverbod. Je hoeft niet mee te gaan in een vraag die ingaat tegen de rechten van de cliënt. Bewaak tegelijk de relatie met het netwerk: kies voor verbinding, niet voor een loopgravenstrijd.' },
    ],
    // extra: een kader onder de drie stappen, voor wat in sommige situaties meespeelt
    extra: { kop: 'En als de ouders ook bewindvoerder zijn?', tekst: 'In een LVB-context zijn ouders vaak ook bewindvoerder over de persoon. Dat geeft hen meer zeggenschap, maar enkel voor de beslissingen die de vrederechter uitdrukkelijk in het vonnis opsomt: voor al de rest blijft de cliënt zelf bekwaam. Sommige beslissingen zijn bovendien hoogstpersoonlijk, zoals toestemmen in een huwelijk of de geslachtsregistratie laten aanpassen. Die kan een bewindvoerder nooit in de plaats van de cliënt nemen. Wel kan de vrederechter in het vonnis uitdrukkelijk vermelden dat de cliënt zelf onbekwaam is voor zo\'n beslissing. Op wie de cliënt verliefd wordt of wie die is, is geen rechtshandeling: daar heeft geen enkele bewindvoerder iets over te zeggen. Twijfel je of een vraag van de ouders binnen hun opdracht valt? Bekijk met je team of de sociale dienst wat er in het vonnis staat. Loopt het echt vast, dan kan de cliënt of een andere betrokkene de vrederechter vragen om de maatregel te herzien.' },
    chips: [{ l: 'Rechten & wetgeving', go: 'beleid#groep-rechten-wetgeving' }, { l: 'Wet op de bewindvoering', go: 'beleid#b-wet-op-de-bewindvoering-2013' }, { l: 'Lumi (advies)', url: 'https://lumi.be' }, { l: 'Naar de taalgids', go: 'taal' }],
  },
  {
    thema: 'Identiteit', ww: ['gender', 'taal'], tag: 'Gender & respect', titel: 'Een transgender cliënte wil voortaan met een andere naam aangesproken worden.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'De juiste naam en het juiste voornaamwoord gebruiken is een van de meest concrete vormen van respect. Telkens de oude naam gebruiken — deadnaming, ook per ongeluk — doet pijn en ondermijnt het opgebouwde vertrouwen.' },
      { kop: 'Wat kan je doen?', tekst: 'Gebruik vanaf nu de naam en aanspreking die zij wenst, ook onderling in het team en in de dagelijkse omgang. Maak praktische afspraken: hoe gaan we om met het dossier, etiketten, de brievenbus? Maak je een fout? Corrigeer kort, verontschuldig je zonder overdrijven en ga verder.' },
      { kop: 'Waar let je op?', tekst: 'De officiële naamswijziging is wettelijk eenvoudiger geworden, maar respect hangt daar niet van af: je kan de gewenste naam meteen gebruiken. Bewaak de privacy rond de oude naam en bespreek met haar wie wat hoeft te weten.' },
    ],
    chips: [{ l: 'Transgender Infopunt', url: 'https://www.transgenderinfo.be' }, { l: 'Transgenderwet (2017)', go: 'beleid#b-transgenderwet-2017' }, { l: 'Naar de taalgids', go: 'taal' }],
  },
  {
    thema: 'Relaties & seksualiteit', ww: ['grenzen', 'relaties'], tag: 'Grenzen & consent', titel: 'Een cliënt stelt seksueel getint gedrag dat je doet twijfelen over de grens.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Seksueel gedrag bij cliënten is normaal — maar niet elk gedrag is oké. Het is niet altijd makkelijk in te schatten of iets gezond, experimenteel of grensoverschrijdend is, zeker bij een verstandelijke beperking. Vertrekken vanuit paniek of een verbod helpt niet.' },
      { kop: 'Wat kan je doen?', tekst: 'Gebruik een gedeeld kader in plaats van je onderbuik. Het Sensoa Vlaggensysteem weegt gedrag op zes criteria (bvb. wederzijdse toestemming, vrijwilligheid en gelijkwaardigheid) en geeft een gepaste reactie via kleuren. Bespreek twijfelgevallen in team zodat je niet alleen oordeelt.' },
      { kop: 'Waar let je op?', tekst: 'Vermijd dat de geaardheid of genderidentiteit van de cliënt je oordeel kleurt: weeg het gedrag, niet de persoon. Reageer proportioneel — een groene of gele vlag vraagt iets anders dan een rode. Bij een rode of zwarte vlag zorg je eerst voor de veiligheid van wie het gedrag ondergaat, en betrek je meteen je leidinggevende. Volg de procedure van je organisatie: vergunde zorgaanbieders van het VAPH registreren grensoverschrijdend gedrag en melden het aan het VAPH. Leg afspraken en signalen vast in het cliëntdossier.' },
    ],
    chips: [{ l: 'Sensoa Vlaggensysteem', url: 'https://www.sensoa.be/vlaggensysteem-hoe-reageren-op-seksueel-grensoverschrijdend-gedrag' }, { l: 'Vlaggensysteem voor Volwassenen', url: 'https://www.sensoa.be/materiaal/sensoa-vlaggensysteem-voor-volwassenen-boek' }, { l: 'VAPH: wat moet je melden?', url: 'https://www.vaph.be/eg-gog/meldingsplicht/wat' }, { l: 'Vlaggensysteem in het kort', go: 'vlag' }],
  },
  {
    thema: 'Identiteit', ww: ['gender', 'doorverwijzen'], tag: 'Identiteit & lichaam', titel: 'Een intersekse cliënt voelt zich onzeker over het eigen lichaam en weet niet bij wie die terechtkan.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Sommige mensen worden geboren met lichaamskenmerken die niet eenduidig "mannelijk" of "vrouwelijk" zijn: dat noemen we intersekse. Het is geen ziekte en geen keuze, maar een natuurlijke variatie. In de praktijk merk je het vaak niet aan grote vragen, maar aan kleine signalen: een cliënt die zich ongemakkelijk voelt bij lichamelijke zorg, die gedeelde doucheruimtes vermijdt, of die zich afvraagt waarom die "anders" is dan de anderen. Vaak werd er thuis of in eerdere voorzieningen met stilte over omgegaan.' },
      { kop: 'Wat kan je doen?', tekst: 'Zorg eerst voor gewone, praktische veiligheid: privacy bij wassen en aankleden, en respect voor schaamtegevoelens, net zoals bij elke cliënt. Beantwoord vragen eerlijk en in eenvoudige taal en stel gerust dat er niets "mis" is met hun lichaam. Vraag de cliënt hoe die zichzelf ziet en hoe die aangesproken wil worden, en respecteer dat. Maak duidelijk dat die bij jou of een vast aanspreekpunt terechtkan, zodat die er niet alleen mee blijft zitten.' },
      { kop: 'Waar let je op?', tekst: 'Behandel het lichaam van de cliënt niet als een geheim of een probleem dat "opgelost" moet worden, want dat versterkt net de schaamte. Praat er niet over met collega\'s of het netwerk zonder dat het nodig is en zonder afstemming: medische info hierover is strikt vertrouwelijk. Heeft de cliënt medische vragen of klachten? Verwijs dan via de gewone zorgkanalen door naar een arts, en schakel bij twijfel een gespecialiseerde dienst in, bvb. Intersekse Vlaanderen of Lumi, voor jezelf én voor hen.' },
    ],
    chips: [{ l: 'Intersekse Vlaanderen', url: 'https://www.interseksevlaanderen.be' }, { l: 'Lumi (advies)', url: 'https://lumi.be' }, { l: 'Naar de taalgids', go: 'taal' }],
  },
  {
    thema: 'Relaties & seksualiteit', ww: ['relaties', 'comingout'], tag: 'Relaties & autonomie', titel: 'Begeleiding of familie maakt zich zorgen omdat een cliënt nooit een lief lijkt te willen.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Er leeft vaak een stille aanname dat iedereen een relatie en seks hoort te willen. Wie daar geen interesse in heeft, wordt al snel als "een probleem" gezien. Maar weinig of geen seksuele aantrekking voelen (aseksueel) of weinig of geen romantische aantrekking voelen (aromantisch) is een geldige variatie. Het hoeft niet gerepareerd te worden.' },
      { kop: 'Wat kan je doen?', tekst: 'Onderzoek eerst of er echt een zorg is, of vooral een verwachting van de omgeving. Vraag de cliënt zelf, zonder te sturen, hoe die zich voelt en wat die wil. Geef ruimte voor het antwoord "ik hoef dat niet" en neem dat even ernstig als elk ander antwoord. Onderscheid wat de cliënt zelf zo voelt en wil van een drempel die wél ondersteuning vraagt, bvb. onzekerheid of een nare ervaring.' },
      { kop: 'Waar let je op?', tekst: 'Duw geen relatie of seksualiteit op als de cliënt daar niet om vraagt: dat is geen goede zorg maar een vorm van druk. Tegelijk: geen interesse tonen mag nooit een excuus zijn om het thema seksualiteit helemaal te vermijden. Blijf beschikbaar voor vragen, op het tempo van de cliënt.' },
    ],
    chips: [{ l: 'De Roze Pagina', url: 'https://www.cavaria.be/derozepagina' }, { l: 'Naar de taalgids', go: 'taal' }, { l: 'Doe de team-zelfscan', go: 'scan' }],
  },
  {
    thema: 'Team & netwerk', ww: ['comingout', 'doorverwijzen'], tag: 'Netwerk & cultuur', titel: 'Een cliënt zit klem tussen het eigen geloof of cultuur en de eigen geaardheid.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Geloof, cultuur en familie zijn voor veel cliënten een bron van houvast en verbondenheid. Wanneer de eigen geaardheid of genderidentiteit daarmee lijkt te botsen, ontstaat een pijnlijk innerlijk conflict: kiezen tussen wie ik ben en waar ik bij hoor. Dat kan zwaar wegen op het welzijn.' },
      { kop: 'Wat kan je doen?', tekst: 'Erken beide kanten zonder partij te kiezen tegen de identiteit of het geloof van de cliënt. Vermijd om geloof of cultuur weg te zetten als "het probleem". Help de cliënt zoeken naar wat voor hen klopt, op hun tempo, en wijs op mensen en groepen die geloof, cultuur en LGBTQ+-zijn wél samenbrengen, bvb. Merhaba, of vraag Lumi naar een groep die past. Soms is enkel gehoord en niet veroordeeld worden al veel.' },
      { kop: 'Waar let je op?', tekst: 'Het is niet aan jou om voor de cliënt te beslissen wat die met het eigen geloof of de eigen coming-out doet: bewaak hun autonomie. Wees alert voor signalen van uitsluiting of druk vanuit het netwerk, en schat de veiligheid in. Schakel bij een vastgelopen of onveilige situatie een gespecialiseerde dienst in.' },
    ],
    chips: [{ l: 'Lumi (advies)', url: 'https://lumi.be' }, { l: 'Merhaba vzw', url: 'https://www.merhaba.be' }, { l: 'Netwerk & organisaties', go: 'orgs' }],
  },
  {
    thema: 'Identiteit', ww: ['comingout', 'doorverwijzen'], tag: 'Zelfaanvaarding & welzijn', titel: 'Een cliënt aanvaardt de eigen geaardheid niet en vindt dat er iets mis is met hen.',
    blokken: [
      { kop: 'Wat speelt er?', tekst: 'Wat een cliënt over zichzelf zegt ("dit is niet natuurlijk", "er is iets mis met mij") is vaak niet hun eigen overtuiging, maar een echo van wat de omgeving hen jarenlang vertelde. Dat heet geïnternaliseerd stigma. Het doet pijn en kan leiden tot schaamte, somberheid of een laag zelfbeeld.' },
      { kop: 'Wat kan je doen?', tekst: 'Spreek de pijn aan, niet de "fout": laat merken dat er niets mis is met de cliënt en dat hun gevoelens normaal zijn. Ga niet mee in het idee dat die moet veranderen. Geef in eenvoudige taal correcte info, toon positieve voorbeelden en wijs op lotgenotencontact. Soms helpt de boodschap dat heel veel mensen zich net zo voelen en dat het beter wordt.' },
      { kop: 'Waar let je op?', tekst: 'Ga nooit mee in een vraag naar "genezing" of conversietherapie: die praktijken werken niet, richten zware psychische schade aan en zijn in België sinds 2023 wettelijk verboden. Wees alert voor signalen van somberheid, zelfbeschadiging of gedachten aan zelfdoding: bespreek ze, schakel tijdig professionele hulp in en ken de Zelfmoordlijn 1813 (ook voor jezelf als begeleider). Jij hoeft dit niet alleen te dragen: verwijs gericht door.' },
    ],
    chips: [{ l: 'Verbod conversietherapie', url: 'https://www.transgenderinfo.be/nl/nieuws/regering-verbiedt-conversietherapie-om-lgbti-personen-te-genezen' }, { l: 'Zelfmoordlijn 1813', url: 'https://www.zelfmoord1813.be' }, { l: 'Lumi (advies)', url: 'https://lumi.be' }, { l: 'De Roze Pagina', url: 'https://www.cavaria.be/derozepagina' }],
  },
];

// ── PRAKTIJK: taalgids ───────────────────────────────────────────────────────────
const TERM_CAT_COLOR = { 'Algemeen': 'teal', 'Oriëntatie': 'violet', 'Gender': 'amber', 'Liever vermijden': 'rose' };
const TERM_CATS = ['Alle', 'Algemeen', 'Oriëntatie', 'Gender', 'Liever vermijden'];
// Korte uitleg per categorie (getoond als tussenkop in de taalgids)
const TERM_CAT_UITLEG = {
  'Algemeen': 'Overkoepelende begrippen rond seksuele en genderdiversiteit.',
  'Oriëntatie': 'Op wie iemand verliefd wordt of zich tot aangetrokken voelt.',
  'Gender': 'Hoe iemand zich vanbinnen voelt en naar buiten toont, en variaties in het lichaam.',
  'Liever vermijden': 'Woorden en gewoontes die verouderd of kwetsend zijn, telkens met een beter alternatief.',
};
const TERMEN = [
  { woord: 'LGBTQIA+', cat: 'Algemeen', def: 'Verzamelletterwoord voor lesbisch, gay (homo), biseksueel, transgender, queer, intersekse en aseksueel. De "+" staat voor alle andere seksuele oriëntaties en genderidentiteiten, zoals panseksueel of aromantisch. Ook non-binaire en demiseksuele mensen horen erbij: zij vallen vaak onder de T en de A. Je ziet ook kortere varianten, zoals LGBTQ+, LGBTI+ (bvb. bij çavaria en Lumi) of het Vlaamse holebi. Welke letters er staan, verschilt per organisatie. Deze gids gebruikt zelf LGBTQ+, en de term van een organisatie als het over haar werking gaat.', tip: 'Waarom staat de L vooraan? Daar bestaan verschillende verklaringen. Een vaak gehoorde: tijdens de aidscrisis in de jaren 80 zorgden veel lesbiennes voor zieke homomannen, met thuis- en stervensbegeleiding, bloedinzamelingen en activisme, toen de overheid en vaak ook families hen lieten vallen. Die zorg is goed gedocumenteerd. Dat de L daardoor vooraan kwam, is een mooi verhaal, maar historisch niet bewezen.', tipType: 'fun' },
  { woord: 'Holebi', cat: 'Oriëntatie', def: 'Vlaamse samentrekking van homo, lesbisch en bi. Verwijst naar wie zich aangetrokken voelt tot hetzelfde geslacht of tot meerdere geslachten.' },
  { woord: 'Lesbisch', cat: 'Oriëntatie', def: 'Een vrouw die zich romantisch en/of seksueel aangetrokken voelt tot vrouwen.' },
  { woord: 'Homo / gay', cat: 'Oriëntatie', def: 'Iemand die zich aangetrokken voelt tot mensen van hetzelfde geslacht. "Gay" wordt breed gebruikt, "homo" vaak voor mannen.' },
  { woord: 'Biseksueel', cat: 'Oriëntatie', def: 'Aangetrokken tot meer dan één geslacht. Dat hoeft niet 50/50 te zijn en verandert niet door wie iemand op dit moment datet.' },
  { woord: 'Panseksueel', cat: 'Oriëntatie', def: 'Aangetrokken tot mensen ongeacht hun geslacht of genderidentiteit — de persoon zelf telt, niet het hokje.' },
  { woord: 'Aseksueel', cat: 'Oriëntatie', def: 'Iemand die weinig tot geen seksuele aantrekking voelt. Dat zegt niets over of die persoon wel of geen relatie of romantiek wil.' },
  { woord: 'Demiseksueel', cat: 'Oriëntatie', def: 'Iemand die pas seksuele aantrekking voelt nadat er een sterke emotionele band is ontstaan. Valt onder de bredere aseksuele koepel.' },
  { woord: 'Aromantisch', cat: 'Oriëntatie', def: 'Iemand die weinig tot geen romantische aantrekking voelt, dus niet of zelden verliefd wordt. Dat staat los van seksuele aantrekking: iemand kan aromantisch zijn en toch seksuele gevoelens hebben, of omgekeerd.' },
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
  { woord: 'Coming-out', cat: 'Algemeen', def: 'Het moment of proces waarop iemand zelf vertelt over de eigen geaardheid of genderidentiteit. Het is geen eenmalig iets: mensen komen vaak hun leven lang in nieuwe situaties uit de kast.' },
  { woord: 'In de kast', cat: 'Algemeen', def: 'Wanneer iemand de eigen geaardheid of genderidentiteit (nog) niet deelt met de omgeving. Dat kan een bewuste, veilige keuze zijn — respecteer dat tempo.' },
  { woord: 'Heteronormativiteit', cat: 'Algemeen', def: 'De onuitgesproken aanname dat iedereen hetero en cisgender is, bvb. automatisch naar "een vriendin" vragen bij een man. Het maakt andere ervaringen onzichtbaar.' },
  { woord: 'Affirmatief', cat: 'Algemeen', def: 'Een houding die de seksuele en genderidentiteit van iemand bevestigt als waardevol en normaal, in plaats van ze te negeren of enkel te "tolereren".' },
  { woord: 'Ally / medestander', cat: 'Algemeen', def: 'Iemand die zelf niet LGBTQ+ is, maar zich wel inzet voor gelijke behandeling en mee opkomt tegen onrecht.' },
  { woord: 'IDAHOBIT', cat: 'Algemeen', def: 'Internationale dag tegen homofobie, bifobie en transfobie, elk jaar op 17 mei. Op die dag in 1990 schrapte de WHO homoseksualiteit uit haar lijst van ziektes. De dag bestaat sinds 2005.' },
  { woord: 'Regenboogvlag', cat: 'Algemeen', def: 'Het bekendste symbool van de LGBTQ+ gemeenschap. Er bestaan varianten, zoals de Progress Pride-vlag met extra kleuren voor trans personen en mensen van kleur, en daarnaast eigen vlaggen, bvb. de transgender- of de intersekse vlag.' },
  { woord: 'Deadnaming', cat: 'Liever vermijden', def: 'Iemand (bewust of per ongeluk) aanspreken met de naam van vóór de transitie. Doet pijn en ondermijnt vertrouwen.', tip: 'Gebruik de naam die de persoon zelf aangeeft, ook onderling in het team. Maak samen afspraken over het dossier: waar de officiële naam (nog) nodig is, bvb. voor medicatie of administratie, en wie welke naam te zien krijgt.', tipType: 'warn' },
  { woord: 'Misgenderen', cat: 'Liever vermijden', def: 'Iemand aanspreken of benoemen met het verkeerde geslacht of voornaamwoord.', tip: 'Maak je een fout? Corrigeer kort, verontschuldig je zonder drama en ga verder.', tipType: 'warn' },
  { woord: '"Geslachtsverandering"', cat: 'Liever vermijden', def: 'Verouderde, te enge term: een transitie gaat over veel meer dan een operatie, en niet iedereen kiest medische stappen.', tip: 'Zeg liever "transitie" of "in transitie zijn".', tipType: 'warn' },
  { woord: '"Levensstijl" of "keuze"', cat: 'Liever vermijden', def: 'Geaardheid en genderidentiteit zijn geen keuze, voorkeur of stijl.', tip: 'Vermijd formuleringen die suggereren dat het om een fase of een beslissing gaat.', tipType: 'warn' },
  { woord: 'Hermafrodiet', cat: 'Liever vermijden', def: 'Verouderde en kwetsende term voor iemand met een intersekse variatie. Het woord komt uit de mythologie en de biologie en hoort niet thuis bij mensen.', tip: 'Zeg "intersekse persoon" of "iemand met een intersekse variatie".', tipType: 'warn' },
  { woord: 'Homofiel', cat: 'Liever vermijden', def: 'Verouderde term voor een homoseksuele persoon. Klinkt voor velen klinisch of afstandelijk en wordt nauwelijks nog gebruikt.', tip: 'Zeg liever "homo", "gay" of "holebi".', tipType: 'warn' },
];

// ── PRAKTIJK: team-zelfscan ──────────────────────────────────────────────────────
const SCAN_VRAGEN = [
  { domein: 'Beleid', t: 'Onze organisatie heeft een expliciete, gedragen visie of beleid rond seksualiteit én genderdiversiteit.' },
  { domein: 'Beleid', t: 'LGBTQ+-inclusie zit verweven in onthaal, kwaliteit en dagelijkse werking — niet enkel ad hoc als er iets gebeurt.' },
  { domein: 'Taal', t: 'We gebruiken bewust inclusieve, niet-veronderstellende taal (bvb. niet automatisch naar "een vriendin" vragen bij een mannelijke cliënt).' },
  { domein: 'Taal', t: 'We vragen cliënten hoe ze aangesproken willen worden (naam, voornaamwoord) en respecteren dat consequent.' },
  { domein: 'Zichtbaarheid', t: 'Er zijn zichtbare signalen dat LGBTQ+ personen welkom zijn, bvb. via affiches, een regenboogsymbool of inclusieve formulieren.' },
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
  'Beleid': { t: 'Werk aan een expliciete visie', d: 'Een korte, gedragen visietekst rond seksualiteit én genderdiversiteit geeft begeleiders houvast. Tools zoals de toolset "Op het kruispunt" van çavaria, of als inspiratie de Nederlandse Roze Loper-scan, helpen je op weg.' },
  'Taal': { t: 'Maak je taal inclusiever', d: 'Kleine aanpassingen — open vragen stellen, niet veronderstellen — maken een groot verschil. De taalgids op deze pagina is een handig startpunt voor je team.' },
  'Zichtbaarheid': { t: 'Maak inclusie zichtbaar', d: 'Zichtbare signalen (een regenboog, inclusieve formulieren) laten cliënten weten dat ze welkom zijn. Klein in moeite, groot in effect.' },
  'Team': { t: 'Investeer in vorming', d: 'Veel ongemak is in feite handelingsverlegenheid. Vorming via bvb. çavaria vorming (voorheen KliQ) of Aditi geeft begeleiders woorden en vertrouwen.' },
  'Cliënt': { t: 'Versterk de cliëntondersteuning', d: 'Zorg dat cliënten een aanspreekpunt kennen en gebruik toegankelijke tools zoals De Roze Pagina en het Vlaggensysteem.' },
  'Veiligheid': { t: 'Zorg voor een veilig klimaat', d: 'Cliënten moeten grensoverschrijdend gedrag of pesten veilig kunnen melden. Behandel koppels van hetzelfde geslacht gelijkwaardig — het Sensoa Vlaggensysteem helpt om gedrag in te schatten zonder vooroordeel.' },
  'Netwerk': { t: 'Bouw je doorverwijsnetwerk uit', d: 'Je hoeft niet alles zelf te kunnen. Leer de gespecialiseerde diensten kennen (Lumi, TIP, Aditi) en verwijs gericht door.' },
  'Privacy': { t: 'Bewaak privacy en vertrouwen', d: 'Maak afspraken over wie wat mag weten over iemands geaardheid of genderidentiteit. Vertrouwelijkheid is de basis van een veilig klimaat.' },
};

// Handige bronnen per domein, getoond bij "Waar liggen kansen?" in het scanresultaat.
// Verwijst naar items elders op de site: tool / org / beleid (exacte titel of naam),
// tab (een praktijkinstrument) of casus (nummer).
const SCAN_BRONNEN = {
  'Beleid': [{ tool: 'Op het kruispunt: toolset LGBTI+ & beperking' }, { tool: 'Roze Loper: scan & toolkit' }, { beleid: 'Seksueel gezondheidsbeleid in zorgvoorzieningen' }],
  'Taal': [{ tab: 'taal', l: 'Taalgids' }, { tool: 'Op het kruispunt: toolset LGBTI+ & beperking' }],
  'Zichtbaarheid': [{ tool: 'Op het kruispunt: toolset LGBTI+ & beperking' }, { tool: 'Roze Loper: scan & toolkit' }],
  'Team': [{ org: 'çavaria vorming (voorheen KliQ)' }, { org: 'Aditi vzw' }, { tab: 'quiz', l: 'Test jezelf' }],
  'Cliënt': [{ tool: 'De Roze Pagina' }, { tool: 'Vlaggensysteem op een bordje' }],
  'Veiligheid': [{ tab: 'vlag', l: 'Vlaggensysteem in het kort' }, { tool: 'Sensoa Vlaggensysteem voor Volwassenen' }],
  'Netwerk': [{ org: 'Lumi' }, { org: 'Transgender Infopunt (TIP)' }, { org: 'Aditi vzw' }],
  'Privacy': [{ casus: 1 }, { casus: 5 }, { casus: 7 }],
};

// ── PRAKTIJK: Vlaggensysteem in het kort ─────────────────────────────────────────
// Korte samenvatting van het Sensoa Vlaggensysteem (voor Volwassenen), op basis van
// sensoa.be/over-het-sensoa-vlaggensysteem en de "Reactiewijzer van het Sensoa
// Vlaggensysteem" (Sensoa, 2023). Het volledige Vlaggensysteem, met situatieschetsen
// en vorming, is van Sensoa: verwijs daar altijd naar door.
const VLAG_BRON = [
  { l: 'Over het Sensoa Vlaggensysteem', url: 'https://www.sensoa.be/over-het-sensoa-vlaggensysteem' },
  { l: 'Reactiewijzer (pdf)', url: 'https://www.sensoa.be/sites/default/files/reageren-met-reactiewijzer-sensoa-vlaggensysteem.pdf' },
];
const VLAG_CRITERIA = [
  { naam: 'Wederzijdse toestemming', vraag: 'Gaan alle betrokkenen akkoord? Dat kan uitgesproken zijn, of blijken uit hoe iemand reageert.', icon: 'check-circle' },
  { naam: 'Vrijwilligheid', vraag: 'Gebeurt het vrijwillig, zonder druk, dwang of chantage?', icon: 'heart' },
  { naam: 'Gelijkwaardigheid', vraag: 'Zijn de betrokkenen aan elkaar gewaagd, zonder dat een verschil in macht gebruikt wordt om te intimideren of te dwingen?', icon: 'scale' },
  { naam: 'Ontwikkelings- of functioneringsniveau', vraag: 'Past het gedrag bij het ontwikkelings- of functioneringsniveau? Is iedereen in staat om toe te stemmen, ook als bvb. een beperking, trauma, intoxicatie of ziekte meespeelt?', icon: 'user' },
  { naam: 'Context', vraag: 'Gebeurt het gedrag in een gepaste context, met respect voor ieders privacy?', icon: 'pin' },
  { naam: 'Impact', vraag: 'Heeft het gedrag geen schadelijke gevolgen, lichamelijk of psychisch, voor wie het stelt én voor wie het ondergaat?', icon: 'shield' },
];
const VLAGGEN = [
  { key: 'groen', naam: 'Groene vlag', wat: 'Aanvaardbaar seksueel gedrag', kleur: '#2F9E44', zin: 'Reageren hoeft niet. Doe je het toch, dan op een positieve manier: ' },
  { key: 'geel', naam: 'Gele vlag', wat: 'Licht grensoverschrijdend seksueel gedrag', kleur: '#E8A800', noot: 'Herhaalt het gedrag zich na een correctie, dan wordt het een rode vlag.' },
  { key: 'rood', naam: 'Rode vlag', wat: 'Ernstig grensoverschrijdend seksueel gedrag', kleur: '#E03131', noot: 'Herhaalt het gedrag zich na een correctie, dan wordt het een zwarte vlag.' },
  { key: 'zwart', naam: 'Zwarte vlag', wat: 'Zwaar grensoverschrijdend seksueel gedrag', kleur: '#1E1E24' },
];
// De stappen van de reactiewijzer, met de vlaggen waarbij ze horen
const VLAG_STAPPEN = [
  { naam: 'Benoemen', tekst: 'Giet het gedrag in woorden en geef er een taal aan.', vlaggen: ['groen', 'geel', 'rood', 'zwart'], icon: 'bubble' },
  { naam: 'Bevragen', tekst: 'Vraag naar gedachten, gevoelens, wensen en verlangens. Focus op wat de betrokkenen zelf vertellen, zonder te veroordelen of te verbieden.', vlaggen: ['groen', 'geel', 'rood', 'zwart'], icon: 'help' },
  { naam: 'Bevestigen', tekst: 'Haal aan wat oké is en waarom.', vlaggen: ['groen', 'geel', 'rood', 'zwart'], icon: 'check-circle' },
  { naam: 'Begrenzen', tekst: 'Begrens het gedrag en leid het om bij een gele vlag. Stop het gedrag bij een rode of zwarte vlag. Zeg wat niet oké is en trek een duidelijke grens, zonder te veroordelen.', vlaggen: ['geel', 'rood', 'zwart'], icon: 'shield' },
  { naam: 'Afspraken maken', verder: true, tekst: 'Maak duidelijke afspraken over hoe het verder moet.', vlaggen: ['geel', 'rood', 'zwart'], icon: 'edit' },
  { naam: 'Gevolgen uitleggen of uitvoeren', verder: true, tekst: 'Bijvoorbeeld:', lijst: ['confronteer en verbied', 'verhoog het toezicht', 'bied psycho-educatie, hulp of bemiddeling aan', 'verwijs door waar nodig', 'registreer en meld volgens de procedure van je organisatie (VAPH-zorgaanbieders melden grensoverschrijdend gedrag aan het VAPH)'], vlaggen: ['rood', 'zwart'], icon: 'alert' },
  { naam: 'Nazorg & herstel', verder: true, tekst: 'Denk aan alle betrokkenen.', vlaggen: ['geel', 'rood', 'zwart'], icon: 'heart' },
];

// ── PRAKTIJK: test jezelf ────────────────────────────────────────────────────────
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
    uitleg: 'Het gewoon vriendelijk vragen ("hoe spreek ik je het liefst aan?") is het meest respectvol. Gokken op uiterlijk gaat vaak mis, en voornaamwoorden krampachtig vermijden voelt onnatuurlijk aan en kan net afstand scheppen.'
  },
  {
    vraag: 'Wat betekent "deadnaming"?',
    opties: ['Iemand bij een oude, afgelegde naam blijven noemen', 'Iemand uitschelden', 'Een naam doorgeven aan derden'],
    juist: 0,
    uitleg: 'Deadnaming is iemand (bewust of onbewust) aanspreken met de naam die die persoon vóór de transitie droeg. Ook al is het per ongeluk, het kan pijnlijk zijn. Corrigeer jezelf kort en ga verder, zonder er een groot moment van te maken.'
  },
  {
    vraag: 'Een collega zegt: "Mensen met een verstandelijke beperking moet je toch beschermen tegen zoiets als gender, dat is te ingewikkeld voor hen." Klopt dat?',
    opties: ['Ja, het is te complex voor hen', 'Nee, ook zij hebben een genderidentiteit en het recht die te beleven', 'Alleen bij een lichte beperking'],
    juist: 1,
    uitleg: 'Iedereen heeft een genderidentiteit en seksualiteit, ongeacht beperking. De ondersteuning past zich aan het tempo en niveau aan, maar het recht zelf staat niet ter discussie. "Beschermen" mag nooit "negeren" worden.'
  },
  {
    vraag: 'Welke vraag is het minst veronderstellend bij een mannelijke cliënt?',
    opties: ['"Heb je al een vriendin?"', '"Wanneer zoek je een vriendin?"', '"Ben je verliefd op iemand?"'],
    juist: 2,
    uitleg: 'Een open vraag zonder geslacht erin laat alle antwoorden toe. "Heb je al een vriendin?" gaat er stilzwijgend van uit dat de cliënt hetero is, en dat kan een gesprek al in de kiem smoren.'
  },
  {
    vraag: 'Is "homo" gebruiken als scheldwoord onder collega\'s onschuldig als het "niet zo bedoeld" is?',
    opties: ['Ja, intentie telt', 'Nee, het effect op het klimaat telt', 'Alleen erg als een cliënt het hoort'],
    juist: 1,
    uitleg: 'Ook "grappig" bedoeld taalgebruik bepaalt het klimaat. Voor een cliënt die worstelt met de eigen identiteit is het een signaal om te zwijgen. Het gaat niet om iemand fout verklaren, wel om het effect bespreekbaar maken.'
  },
  {
    vraag: 'Wat is intersekse?',
    opties: ['Een seksuele oriëntatie', 'Een aangeboren variatie in geslachtskenmerken', 'Hetzelfde als transgender'],
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

// ── BELEID: mijlpalen-tijdlijn ───────────────────────────────────────────────────
// Items met type 'weetje' zijn géén mijlpaal. 'jaar2' toont een tweede jaartal. eind: null = nu.
// Type 'dossier' is een open dossier: iets wat nog moet gebeuren. Geen 'jaar' maar 'sinds' (wanneer het
// dossier openging), 'kort' voor de homepage en een eigen 'id' voor de deeplink (#tijdlijn-<id>).
// toekomst: true = open einde ("?").
const TL_LINK = (url, txt) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${txt}<span class="sr-only"> (opent in nieuw tabblad)</span></a>`;
const TL_BRON = {
  drescher15: TL_LINK('https://doi.org/10.3390/bs5040565', 'Drescher (2015)'),
  drescher10: TL_LINK('https://doi.org/10.1007/s10508-009-9531-5', 'Drescher (2010)'),
  mhg:        TL_LINK('https://magnus-hirschfeld.de/ausstellungen/institute/', 'Magnus-Hirschfeld-Gesellschaft (z.d.)'),
  ushmm:      TL_LINK('https://encyclopedia.ushmm.org/content/en/article/magnus-hirschfeld-2', 'United States Holocaust Memorial Museum (z.d.)'),
  nara19:     TL_LINK('https://prologue.blogs.archives.gov/2019/06/24/pride-in-protesting-50th-anniversary-of-the-stonewall-uprising/', 'National Archives (2019)'),
  dupont19:   TL_LINK('https://doi.org/10.5117/TVGN2019.4.001.DUPO', 'Dupont (2019)'),
  amsab:      TL_LINK('https://opac.amsab.be/Record/18976', 'Amsab-ISG, affiche De Rooie Vlinder (z.d.)'),
  cochran14:  TL_LINK('https://doi.org/10.2471/BLT.14.135541', 'Cochran et al. (2014)'),
  unimelb:    TL_LINK('https://arts.unimelb.edu.au/home/research-and-event-features/past-events/international-day-against-homophobia-biphobia-intersexism-and-transphobia', 'University of Melbourne (z.d.)'),
  vrt23:      TL_LINK('https://www.vrt.be/vrtnws/nl/2023/01/30/homohuwelijk-bestaat-20-jaar-in-ons-land-maar-in-grote-delen-va/', 'VRT NWS (2023)'),
  advocate06: TL_LINK('https://www.advocate.com/news/2006/04/22/gay-couples-belgium-get-adoption-rights', 'The Advocate (2006)'),
  yp:         TL_LINK('https://yogyakartaprinciples.org/', 'The Yogyakarta Principles (z.d.)'),
  unia:       TL_LINK('https://www.unia.be/nl/discriminatie-seksuele-orientatie', 'Unia (z.d.-a)'),
  igvm07:     TL_LINK('https://igvm-iefh.belgium.be/sites/default/files/media/documents/204%20-%20Gelijke%20toegang%20tot%20werk%20-%20Informatie%20en%20praktische%20tips%20voor%20werkgevers.pdf', 'IGVM (z.d.-a)'),
  kamer14:    TL_LINK('https://www.dekamer.be/FLWB/PDF/53/3483/53K3483001.pdf', 'Kamer van volksvertegenwoordigers (2014), DOC 53 3483/001'),
  kamer17:    TL_LINK('https://www.dekamer.be/FLWB/PDF/54/2403/54K2403001.pdf', 'Kamer van volksvertegenwoordigers (2017), DOC 54 2403/001'),
  vl17:       TL_LINK('https://www.vlaanderen.be/aanpassing-van-de-geslachtsregistratie', 'Vlaanderen.be (z.d.-a)'),
  who:        TL_LINK('https://www.who.int/standards/classifications/frequently-asked-questions/gender-incongruence-and-transgender-health-in-the-icd', 'World Health Organization (z.d.)'),
  igvm20:     TL_LINK('https://igvm-iefh.belgium.be/nl/themas/intersekse', 'IGVM (z.d.-b)'),
  tgi20:      TL_LINK('https://www.transgenderinfo.be/nl/nieuws/uitbreiding-genderwet-met-seksekenmerken', 'Transgender Infopunt (2020)'),
  vr25:       TL_LINK('https://themis.vlaanderen.be/files/25f43360-9ae3-11f0-9b44-3797f8128cc9/download', 'Vlaamse Regering (2025)'),
  vvsg25:     TL_LINK('https://www.vvsg.be/nieuwsoverzicht/vlaanderen-versterkt-inzet-op-gelijke-kansen-met-nieuw-horizontaal-actieplan', 'VVSG (2025)'),
  ilga26:     TL_LINK('https://rainbowmap.ilga-europe.org/countries/belgium/', 'ILGA-Europe (2026)'),
  cavaria26:  TL_LINK('https://www.cavaria.be/belgie-zakt-op-de-europese-ranking-voor-lgbtqi-rechten', 'çavaria (2026)'),
  unia150:    TL_LINK('https://www.unia.be/nl/actua/dubbele-discriminatie-grondwet', 'Unia (z.d.-c)'),
  gwh19:      TL_LINK('https://nl.const-court.be/public/n/2019/2019-099n.pdf', 'Grondwettelijk Hof, arrest nr. 99/2019'),
  belga25:    TL_LINK('https://www.belganewsagency.eu/belgium-allows-non-binary-individuals-to-remove-gender-from-id-cards', 'Belga News Agency (2025)'),
  wet23:      TL_LINK('https://etaamb.openjustice.be/nl/wet-van-20-juli-2023_n2023044225.html', 'Wet van 20 juli 2023'),
  kamer21:    TL_LINK('https://www.dekamer.be/FLWB/PDF/55/0043/55K0043008.pdf', 'Kamer van volksvertegenwoordigers (2021), DOC 55 0043/008'),
  plan26:     TL_LINK('https://equal.belgium.be/nl/interfederaal-kader-voor-actieplannen/interfederaal-lgbtqi-actieplan-0', 'Gelijke Kansen België (2026a)'),
  // Beperking & rechten
  vrph:       TL_LINK('https://www.unia.be/nl/wetgeving-en-rechtspraak/internationaal-verdrag-inzake-de-rechten-van-personen-met-een-handicap-en-facultatief-protocol', 'Unia (z.d.-b)'),
  unia24:     TL_LINK('https://www.unia.be/nl/kennis-aanbevelingen/tweede-evaluatie-van-belgi%C3%AB-door-het-vn-comit%C3%A9-voor-de-rechten-van-personen-met-een-handicap-rapport-en-aanbevelingen-2024', 'Unia (2024)'),
  justitie:   TL_LINK('https://justice.belgium.be/sites/default/files/protection-beschermen-nl_0.pdf', 'FOD Justitie (z.d.)'),
  pvf:        TL_LINK('https://www.vaph.be/pvf/wat', 'VAPH (z.d.)'),
  vmri:       TL_LINK('https://www.vlaamsmensenrechteninstituut.be/over-ons', 'Vlaams Mensenrechteninstituut (z.d.)'),
  vlmeld:     TL_LINK('https://www.vlaanderen.be/discriminatie-melden', 'Vlaanderen.be (z.d.-b)'),
  fed26:      TL_LINK('https://equal.belgium.be/nl/nieuws/federale-regering-trekt-hard-aan-de-kar-tegen-discriminatie-van-lgbtqi-personen', 'Gelijke Kansen België (2026b)'),
};
const TL_FASES = [
  { nr: 1, titel: 'Pathologisering en vroeg verzet', start: 1897, eind: 1952, tekst: 'Lang werd homoseksualiteit gezien als zonde, misdrijf of ziekte. Die visie steunde minder op onderzoek dan op de heersende normen van die tijd. Toch waren er ook toen al stemmen die ertegenin gingen.' },
  { nr: 2, titel: 'Depathologisering en erkenning', start: 1957, eind: 2025, tekst: 'Vanaf de jaren \'50 toont onderzoek aan dat de ziektevisie niet klopt. Wat volgt is een lange weg van schrapping uit de diagnostische handboeken naar wettelijke erkenning. Ook de kijk op mensen met een beperking kantelt: van beschermen en in hun plaats beslissen, naar rechten, zelfbeschikking en ondersteuning op maat.' },
  { nr: 3, titel: 'Wat nog moet gebeuren', start: 2026, eind: null, toekomst: true, tekst: 'Erkenning is geen eindpunt. In 2026 zakt België op de Europese ranglijst voor LGBTI+-rechten. Niet omdat er rechten verdwijnen, maar omdat drie dossiers al jaren blijven liggen. Deze fase toont wat nog open staat.' },
];
const TIJDLIJN = [
  // ── Fase 1 · Pathologisering en vroeg verzet ──
  { fase: 1, jaar: '1897', jaar2: '1919', cat: 'science', titel: 'Magnus Hirschfeld: wetenschap als tegenstem', desc: 'Eind 19e eeuw ging de medische wereld homoseksualiteit steeds vaker zien als een ziekte in plaats van een zonde of misdrijf, onder meer onder invloed van psychiater Richard von Krafft-Ebing, wiens <em>Psychopathia Sexualis</em> in 1886 verscheen. Arts Magnus Hirschfeld ging daartegenin. In 1897 richtte hij in Berlijn het <em>Wissenschaftlich-humanitäres Komitee</em> op, de eerste organisatie die opkwam voor de rechten van homoseksuelen. In 1919 opende hij het <em>Institut für Sexualwissenschaft</em>, het eerste instituut ter wereld dat seksualiteit en gender wetenschappelijk onderzocht. Het instituut deed ook pionierswerk in de begeleiding van trans personen. Zijn motto: "Door wetenschap naar gerechtigheid."', bron: `${TL_BRON.mhg}; ${TL_BRON.ushmm}; ${TL_BRON.drescher15} voor Krafft-Ebing` },
  { fase: 1, jaar: '1933', cat: 'move', titel: 'Plundering van het instituut', desc: 'In mei 1933 werd het instituut van Hirschfeld geplunderd door nazistudenten en de SA, en moest het de deuren sluiten. Een groot deel van de bibliotheek en archieven ging verloren bij de Berlijnse boekverbranding. Decennia aan wetenschappelijk werk rond seksualiteit en gender verdwenen zo in één klap. Het toont hoe politiek kennis kan uitwissen.', bron: `${TL_BRON.ushmm}; ${TL_BRON.mhg}` },
  { fase: 1, jaar: '1935', type: 'weetje', cat: 'weetje', titel: 'De brief van Freud', desc: 'In 1935 schreef Sigmund Freud een brief aan een Amerikaanse moeder die hulp zocht voor haar homoseksuele zoon. Hij schreef dat homoseksualiteit geen reden tot schaamte is en niet als ziekte beschouwd kan worden. Ironisch genoeg gingen veel psychoanalytici na hem net de andere richting uit: zij zagen homoseksualiteit als een ontwikkelingsstoornis die behandeld moest worden. Die visie lag mee aan de basis van de latere opname in de DSM.', bron: `${TL_BRON.drescher15}; Freud (1951)` },
  { fase: 1, jaar: '1948', jaar2: '1953', cat: 'science', titel: 'De Kinsey-rapporten', desc: 'Bioloog Alfred Kinsey en zijn team publiceerden grootschalig onderzoek naar het seksuele gedrag van mannen (1948) en vrouwen (1953). Ze toonden aan dat homoseksuele ervaringen veel vaker voorkomen dan toen gedacht werd, en dat seksualiteit eerder een continuüm is dan een strikte tweedeling. Daarmee kwam het beeld van homoseksualiteit als zeldzame afwijking onder druk te staan.', bron: TL_BRON.drescher15 },
  { fase: 1, jaar: '1952', cat: 'science', titel: 'Homoseksualiteit in de DSM-I', desc: 'De American Psychiatric Association neemt homoseksualiteit op in de eerste editie van de DSM, als vorm van "sociopathische persoonlijkheidsstoornis". Die classificatie steunde vooral op psychoanalytische theorie en op observaties bij mensen die in therapie of in de gevangenis zaten. Er was geen empirisch onderzoek bij homoseksuele personen buiten die klinische context. Heersende maatschappelijke en morele opvattingen bepaalden zo mee wat als "wetenschappelijk" gold.', bron: `American Psychiatric Association (1952); ${TL_BRON.drescher15}` },
  // ── Fase 2 · Depathologisering en erkenning ──
  { fase: 2, jaar: '1957', cat: 'science', titel: 'Evelyn Hooker ontkracht "homoseksualiteit = ziekte"', desc: 'De Amerikaanse psychologe Evelyn Hooker laat zien dat experts in blinde tests geen verschil zien tussen homoseksuele en heteroseksuele mannen zonder psychiatrische diagnose. Hooker was de eerste die homoseksuele mannen buiten een klinische context onderzocht. Daarmee stelde ze rechtstreeks de basis van de DSM-I-classificatie in vraag. Haar studie ondergraaft het idee dat homoseksualiteit een stoornis is en legt de wetenschappelijke basis voor de latere schrapping uit de DSM. <a href="https://www.apa.org/monitor/2011/02/myth-buster" target="_blank" rel="noopener noreferrer">Lees meer over haar werk →</a>', bron: `Hooker (1957); ${TL_BRON.drescher15}` },
  { fase: 2, jaar: '1968', cat: 'science', titel: 'DSM-II: homoseksualiteit als "seksuele deviatie"', desc: 'In de tweede editie van de DSM verhuist homoseksualiteit naar de categorie "seksuele deviaties", naast onder meer fetisjisme en exhibitionisme. De ziektevisie blijft zo officieel overeind, ondanks het onderzoek van onder meer Kinsey en Hooker.', bron: `American Psychiatric Association (1968); ${TL_BRON.drescher15}` },
  { fase: 2, jaar: '1969', cat: 'move', titel: 'De Stonewall-rellen', desc: 'Een politie-inval in de New Yorkse bar Stonewall Inn loopt uit op dagenlange protesten. Het geldt als het symbolische startpunt van de moderne LGBTQ+-beweging en als de aanleiding voor de allereerste Pride-optochten, een jaar later.', bron: TL_BRON.nara19 },
  { fase: 2, jaar: '1973', cat: 'science', titel: 'Homoseksualiteit geschrapt uit de DSM', desc: 'De American Psychiatric Association haalt homoseksualiteit als stoornis uit haar handboek (DSM). Een wetenschappelijk kantelpunt dat voortbouwt op onder meer het werk van Hooker: holebi-zijn is geen ziekte.', bron: TL_BRON.drescher15 },
  { fase: 2, jaar: '1980', cat: 'science', titel: 'DSM-III: genderidentiteit wordt een diagnose', desc: 'De DSM-III neemt voor het eerst diagnoses op rond genderidentiteit, zoals "transseksualisme" en "genderidentiteitsstoornis in de kindertijd". Kort nadat homoseksualiteit uit het handboek verdween, wordt trans zijn dus net wél als psychische stoornis geclassificeerd. Ook homoseksualiteit is nog niet helemaal weg: de restcategorie "ego-dystone homoseksualiteit" verdwijnt pas in 1987.', bron: `${TL_BRON.drescher10}; ${TL_BRON.drescher15}` },
  { fase: 2, jaar: '1985', cat: 'law', titel: 'België schrapt artikel 372bis', desc: 'Dit artikel legde sinds 1965 de seksuele meerderjarigheid voor homoseksuele contacten op 18 jaar, tegenover 16 jaar voor heteroseksuele. De afschaffing maakt komaf met dit wettelijke onderscheid. Het artikel was lange tijd een belangrijk strijdpunt van de holebibeweging.', bron: `${TL_BRON.dupont19}; ${TL_BRON.amsab}` },
  { fase: 2, jaar: '1990', cat: 'science', titel: 'WHO schrapt homoseksualiteit (17 mei)', desc: 'De Wereldgezondheidsorganisatie verwijdert homoseksualiteit uit haar internationale ziekteclassificatie (ICD): in de nieuwe ICD-10 geldt seksuele oriëntatie op zich niet langer als stoornis. Enkele verwante categorieën, zoals "ego-dystone seksuele oriëntatie", verdwijnen pas met de ICD-11. De datum, 17 mei, leeft voort als IDAHOBIT — de internationale dag tegen holebi- en transfobie.', bron: `${TL_BRON.cochran14}; ${TL_BRON.unimelb}` },
  { fase: 2, jaar: '2003', cat: 'law', titel: 'Openstelling van het huwelijk in België', desc: 'België wordt het tweede land ter wereld waar koppels van hetzelfde geslacht kunnen huwen. In 2006 volgt het recht op adoptie.', bron: `${TL_BRON.vrt23}; ${TL_BRON.advocate06}` },
  { fase: 2, jaar: '2006', cat: 'law', titel: 'Yogyakarta-beginselen', desc: 'Een internationale set principes die mensenrechten toepast op seksuele oriëntatie en genderidentiteit. Een veelgebruikte referentie, ook bij latere Belgische wetgeving zoals de Transgenderwet van 2017.', bron: `${TL_BRON.yp}; ${TL_BRON.kamer17}` },
  { fase: 2, jaar: '2006', jaar2: '2009', id: 'vn-verdrag', cat: 'beperking', titel: 'VN-verdrag Handicap', desc: 'Op 13 december 2006 neemt de Algemene Vergadering van de Verenigde Naties het Verdrag inzake de rechten van personen met een handicap aan. België ratificeert het op 2 juli 2009, en sinds 1 augustus 2009 is het hier van kracht. Het verdrag vertrekt van een sociaal model: een handicap ontstaat in de wisselwerking tussen een persoon en een omgeving die zich niet aanpast. Mensen met een beperking hebben dezelfde rechten als iedereen, ook op relaties, gezin en ouderschap (artikel 23) en op seksuele en reproductieve gezondheidszorg (artikel 25). Artikel 12 vraagt om mensen te ondersteunen bij hun eigen beslissingen, in plaats van in hun plaats te beslissen. Het motto van de beweging erachter: "Niets over ons zonder ons."', bron: `${TL_BRON.vrph}; Verdrag inzake de rechten van personen met een handicap (2006)` },
  { fase: 2, jaar: '2007', cat: 'law', titel: 'Antidiscriminatiewet & Genderwet', desc: 'België verbiedt discriminatie op grond van onder meer seksuele geaardheid, beperking en geslacht — ook in de zorg. Unia en het Instituut voor de gelijkheid van vrouwen en mannen zien toe op de naleving. Voor wat Vlaanderen regelt, zoals de zorg, geldt sinds 2008 het Vlaamse Gelijkekansendecreet.', bron: `${TL_BRON.unia}; ${TL_BRON.igvm07}` },
  { fase: 2, jaar: '2013', cat: 'science', titel: 'DSM-5: van "genderidentiteitsstoornis" naar "genderdysforie"', desc: 'In de DSM-5 wordt "genderidentiteitsstoornis" vervangen door "genderdysforie". Niet de genderidentiteit zelf staat nog centraal, maar de psychische nood die iemand kan ervaren wanneer het ervaren gender en het bij de geboorte toegewezen geslacht niet overeenstemmen. De diagnose blijft wel bestaan, onder meer omdat ze in veel landen toegang geeft tot transgenderzorg.', bron: 'American Psychiatric Association (2013)' },
  { fase: 2, jaar: '2013', jaar2: '2014', id: 'bewindvoering', cat: 'beperking', titel: 'Nieuwe wet op de bewindvoering', desc: 'De wet van 17 maart 2013 vervangt de oude beschermingsstatuten, zoals de verlengde minderjarigheid en de onbekwaamverklaring, door één beschermingsstatuut op maat. Ze treedt in werking op 1 september 2014. Het uitgangspunt draait om: iemand is bekwaam, tenzij de vrederechter voor een specifieke handeling anders beslist. Sommige beslissingen zijn hoogstpersoonlijk en kan een bewindvoerder nooit in iemands plaats nemen, zoals toestemmen in een huwelijk. Af is het niet: in 2024 vraagt het VN-comité België om nog een stap verder te gaan, van vertegenwoordiging naar ondersteuning bij beslissingen.', bron: `Wet van 17 maart 2013; ${TL_BRON.justitie}; ${TL_BRON.unia24}` },
  { fase: 2, jaar: '2014', cat: 'law', titel: 'Genderwet uitgebreid', desc: 'De bescherming wordt expliciet uitgebreid naar genderidentiteit en genderexpressie, waardoor ook trans personen duidelijker beschermd zijn.', bron: TL_BRON.kamer14 },
  { fase: 2, jaar: '2017', cat: 'law', titel: 'Vernieuwde Transgenderwet', desc: 'De geregistreerde voornaam en het geslacht wijzigen kan voortaan op eenvoudig verzoek, zonder medische voorwaarden zoals sterilisatie. Een belangrijke stap voor zelfbeschikking.', bron: `${TL_BRON.vl17}; ${TL_BRON.kamer17}` },
  { fase: 2, jaar: '2017', id: 'pvf', cat: 'beperking', titel: 'Persoonsvolgende financiering in Vlaanderen', desc: 'Vanaf 1 januari 2017 werkt de Vlaamse zorg voor meerderjarigen met een beperking met persoonsvolgende financiering, op basis van het decreet van 25 april 2014. Het geld gaat niet langer rechtstreeks naar de voorziening, maar volgt de persoon: met een persoonsvolgend budget kiest iemand zelf welke zorg en ondersteuning die inkoopt, en bij wie. Een verschuiving van aanbodgestuurde naar vraaggestuurde zorg, met meer regie bij de persoon zelf.', bron: `Decreet van 25 april 2014; ${TL_BRON.pvf}` },
  { fase: 2, jaar: '2019', jaar2: '2022', cat: 'science', titel: 'ICD-11: genderincongruentie geen stoornis', desc: 'De WHO verplaatst "genderincongruentie" uit het hoofdstuk van de psychische stoornissen naar een nieuw hoofdstuk over seksuele gezondheid. De ICD-11 werd in 2019 aangenomen en is van kracht sinds 2022. Transgender zijn wordt zo ook internationaal gedepathologiseerd.', bron: TL_BRON.who },
  { fase: 2, jaar: '2020', cat: 'law', titel: 'Genderwet: ook geslachtskenmerken beschermd', desc: 'Een nieuwe wijziging voegt onder meer geslachtskenmerken (in de wet: "seksekenmerken") toe aan de Genderwet, naast bijvoorbeeld borstvoeding, adoptie, medisch begeleide voortplanting, vaderschap en meemoederschap. Zo zijn ook intersekse personen expliciet beschermd tegen discriminatie.', bron: `${TL_BRON.igvm20}; ${TL_BRON.tgi20}` },
  { fase: 2, jaar: '2023', id: 'vmri', cat: 'law', titel: 'Vlaams Mensenrechteninstituut van start', desc: 'Op 15 maart 2023 start het Vlaams Mensenrechteninstituut (VMRI), opgericht bij decreet van 28 oktober 2022. Het neemt de taken over van het Vlaamse deel van Unia en van de Genderkamer. Wie gediscrimineerd wordt in een situatie waarvoor Vlaanderen bevoegd is, zoals in de welzijnssector en dus ook in de zorg voor personen met een beperking, kan daar sindsdien terecht. Het juridische kader is het Vlaamse Gelijkekansendecreet van 10 juli 2008, dat onder meer seksuele oriëntatie, genderidentiteit, genderexpressie en handicap beschermt. Het VMRI volgt voor Vlaanderen ook het VN-verdrag Handicap op.', bron: `${TL_BRON.vmri}; ${TL_BRON.vlmeld}` },
  { fase: 2, jaar: '2025', cat: 'law', titel: 'Horizontaal Gelijkekansenbeleidsplan 2025–2029', desc: 'Een geïntegreerd Vlaams actieplan dat gelijke kansen als rode draad door alle beleidsdomeinen wil trekken, met bijzondere aandacht voor onder meer mensen met een handicap en LGBTI+ personen.', bron: `${TL_BRON.vr25}; ${TL_BRON.vvsg25}` },
  // ── Fase 3 · Wat nog moet gebeuren ──
  { fase: 3, jaar: '2026', cat: 'move', titel: 'Rainbow Map: België zakt naar de vierde plaats', desc: 'Elk jaar vergelijkt ILGA-Europe de wetgeving en het beleid rond LGBTI+-rechten in 49 Europese landen. In de Rainbow Map van mei 2026 behoudt België zijn score van 85%, maar zakt het van de tweede naar de vierde plaats: andere landen gaan vooruit, België staat stil. Spanje neemt voor het eerst de leiding over van Malta. België scoort nog altijd sterk op bijvoorbeeld gezinsrechten, zoals het huwelijk en adoptie. Volgens çavaria komt dat door drie dossiers die al jaren blijven liggen. Je vindt ze hieronder.', bron: `${TL_BRON.ilga26}; ${TL_BRON.cavaria26}` },
  { fase: 3, type: 'dossier', id: 'haatspraak', sinds: '1999', kort: 'online haatspraak', cat: 'law', titel: 'Online haatspraak blijft straffeloos', desc: 'Strafbare haatspraak in een geschreven tekst, zoals een bericht op sociale media, geldt juridisch als een drukpersmisdrijf. Volgens artikel 150 van de Grondwet moet het hof van assisen, met een volksjury, zo\'n misdrijf beoordelen. Die regel dateert van 1831 en moest de vrije pers beschermen tegen de overheid. Sinds een grondwetsherziening in 1999 kan racistische en xenofobe haatspraak wel voor de gewone correctionele rechtbank komen. Voor haat op basis van seksuele oriëntatie, genderidentiteit of geslacht geldt die uitzondering niet. Omdat een assisenproces zwaar en duur is, wordt zulke haatspraak in de praktijk niet vervolgd. Unia en çavaria vragen daarom om artikel 150 aan te passen. Daarvoor is een tweederdemeerderheid in het parlement nodig, en in 2021 strandde een poging omdat die meerderheid er niet kwam.', bron: `${TL_BRON.unia150}; ${TL_BRON.cavaria26}` },
  { fase: 3, type: 'dossier', id: 'non-binair', sinds: '2019', kort: 'erkenning van non-binaire personen', cat: 'law', titel: 'Geen juridische erkenning voor non-binaire personen', desc: 'In 2019 vernietigt het Grondwettelijk Hof een deel van de Transgenderwet van 2017, na een beroep van onder meer çavaria. Volgens het Hof schendt de wet het gelijkheidsbeginsel, omdat ze enkel de keuze laat tussen man en vrouw. Het Hof vraagt de wetgever om een oplossing, bijvoorbeeld een of meer bijkomende categorieën of het schrappen van de geslachtsregistratie. Een wet van 2023 voerde een ander deel van het arrest uit: een aanpassing van de geslachtsregistratie is niet langer in principe onherroepelijk. In 2025 kondigde de federale regering aan dat non-binaire personen een identiteitskaart zonder zichtbare M of V zouden kunnen aanvragen. Op hun geboorteakte blijft wel M of V staan, en een echte erkenning is dat dus niet. Een wettelijke regeling voor non-binaire personen is er nog altijd niet. Wie zich niet (enkel) als man of vrouw identificeert, blijft zo vastzitten in een binaire keuze die niet past.', bron: `${TL_BRON.gwh19}; ${TL_BRON.wet23}; ${TL_BRON.belga25}; ${TL_BRON.cavaria26}` },
  { fase: 3, type: 'dossier', id: 'intersekse', sinds: '2021', kort: 'bescherming van intersekse kinderen', cat: 'law', titel: 'Intersekse kinderen onvoldoende beschermd', desc: 'Intersekse personen worden geboren met geslachtskenmerken die niet passen binnen de gangbare beelden van een mannelijk of vrouwelijk lichaam. Sinds 2020 beschermt de Genderwet hen tegen discriminatie. Op 11 februari 2021 neemt de Kamer bovendien een resolutie aan die vraagt om de lichamelijke integriteit van intersekse minderjarigen wettelijk te beschermen: geen ingrepen aan hun geslachtskenmerken zonder hun eigen geïnformeerde toestemming, tenzij er een dringende medische noodzaak is die geen uitstel toelaat. Een resolutie is wel geen wet, en vijf jaar later is er nog altijd geen wettelijk verbod. Volgens çavaria ondergaan kinderen daardoor nog steeds ingrijpende operaties om hun lichaam te laten passen binnen het beeld van "man" of "vrouw", zonder dat ze daar zelf toestemming voor kunnen geven.', bron: `${TL_BRON.kamer21}; ${TL_BRON.cavaria26}` },
  { fase: 3, jaar: '2026', id: 'actieplan-2026', cat: 'law', titel: 'Interfederaal LGBTQI+-actieplan 2026–2030', desc: 'Op 18 mei 2026 lanceren de federale overheid, de gewesten en de gemeenschappen samen een nieuw LGBTQI+-actieplan. Het is een levend kader: elke regering vult het aan met maatregelen binnen de eigen bevoegdheden. Het federale luik, goedgekeurd in juli 2026, telt 28 maatregelen rond veiligheid, gezondheid en de aanpak van haatspraak. Het belooft onder meer een medisch protocol op basis van mensenrechten, zodat intersekse personen geen behandelingen meer krijgen zonder hun eigen uitdrukkelijke toestemming. Een protocol is wel iets anders dan een wettelijk verbod. çavaria waarschuwde vooraf dat een plan zonder effectieve aanpak van haatspraak en zonder oplossing voor non-binaire personen en intersekse minderjarigen onaanvaardbaar is. Of dit plan de drie open dossiers echt oplost, moet nog blijken.', bron: `${TL_BRON.plan26}; ${TL_BRON.fed26}; ${TL_BRON.cavaria26}` },
];
