export const site = {
  brandName: "iCONiC collection",
  siteUrl: "https://www.iconic-collection.ro",
  headline: "Case de la 100 mp în sus, proiectate corect și construibile.",
  subheadline: "Proiect (arhitectură + rezistență + instalații), design interior și execuție pe terenul clientului. Avize și management complet.",
  heroBadges: ["Minim 100 mp", "Modele + adaptare la teren", "Avize + management"],
  cta: {
    primary: { label: "Cere ofertă", href: "/contact" },
    secondary: { label: "Vezi modele", href: "/modele" },
  },
  pachete: {
    title: "Pachete",
    items: [
      "în liveluri: Proiect + autorizare / + Design interior / + Execuție.",
      "Catalog 100 mp+",
      "Contracte pe faze",
      "Revizii controlate",
    ],
    actions: [
      { label: "Catalog 100 mp+", href: "/modele" },
      { label: "Contracte pe faze", href: "/pachete" },
      { label: "Revizii controlate", href: "/proces" },
    ],
  },
  howWeWork: {
    title: "Cum lucrăm",
    steps: [
      {
        title: "1) Alegi un model",
        text: "Pornești din catalogul 100 mp+ și îl adaptăm la teren, buget și cerințe.",
      },
      {
        title: "2) Proiect + autorizare",
        text: "Arh + Rez + Inst + documentații și suport pentru avize.",
      },
      {
        title: "3) Execuție (opțional)",
        text: "Pachete clare, pași controlați, calitate verificată pe șantier.",
      },
    ],
  },
  models: [
    {
      slug: "iconic-100",
      name: "iCONiC 100",
      area: "100–120 mp",
      summary: "Plan compact, lumină bună, living + 3 dormitoare, eficient energetic.",
    },
    {
      slug: "iconic-140",
      name: "iCONiC 140",
      area: "140–160 mp",
      summary: "Zonare zi/noapte, spații generoase, opțiuni de carport/garaj.",
    },
  ],
  proces: {
    title: "Proces",
    items: [
      { title: "Brief + ofertare", text: "Clarificăm cerințele, terenul și bugetul. Primești ofertă pe faze." },
      { title: "Concept + variantare", text: "2–3 variante, apoi înghețăm soluția aleasă." },
      { title: "Proiectare completă", text: "Arh + structură + instalații, coordonare și verificări." },
      { title: "Autorizare", text: "DTAC și suport pentru avize." },
      { title: "Execuție (opțional)", text: "Planificare, control calitate, recepții pe etape." },
    ],
  },
  contact: {
    title: "Contact",
    phone: "+40 7xx xxx xxx",
    email: "contact@iconic.ro",
    note: "Înlocuiește datele cu ale tale.",
  },
} as const;
