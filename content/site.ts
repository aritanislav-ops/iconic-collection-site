export const site = {
  brandName: "iCONiC collection",
  siteUrl: "https://www.iconic-collection.ro",
  headline: "Proiectare personalizată pentru fiecare model de casă.",
  subheadline: "Arh + Structură + Instalații + autorizare. Execuție opțional.",
  heroBadges: ["Modele + adaptare la teren", "Avize + management"],
  cta: {
    primary: { label: "Cere ofertă", href: "/contact" },
    secondary: { label: "Vezi modele", href: "/modele" },
  },
  pachete: {
    title: "Pachete",
    items: [
      "în liveluri: Proiect + autorizare / + Design interior / + Execuție.",
      "Catalog iCONiC",
      "Contracte pe faze",
      "Revizii controlate",
    ],
    actions: [
      { label: "Catalog iCONiC", href: "/modele" },
      { label: "Contracte pe faze", href: "/pachete" },
      { label: "Revizii controlate", href: "/proces" },
    ],
  },
  howWeWork: {
    title: "Cum lucrăm",
    steps: [
      {
        title: "1) Alegi un model",
        text: "Alegi din catalog și îl adaptăm la teren, buget și cerințe.",
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
    slug: "iconic-1story-black",
    name: "iCONiC 1story BLACK",
    summary: "Varianta BLACK — fațadă închisă, accente premium, look minimalist.",
    image: "/brand/model-black.jpg",
  },
  {
    slug: "iconic-1story-white",
    name: "iCONiC 1story WHITE",
    summary: "Varianta WHITE — fațadă deschisă, contrast elegant, lumină maximă.",
    image: "/brand/model-white.jpg",
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
