export const site = {
  brandName: "iCONiC collection",
  siteUrl: "https://www.iconic-collection.ro",
  headline: "Proiectare personalizată pentru fiecare model de casă.",
  subheadline: "Arhitectură + Structură + Instalații + Managementul Proiectului + Dirigenție de Santier + Execuție",
  heroBadges: ["Contract + livrabile clare", "Deviz orientativ pe faze", "Asistență la autorizare"],
  cta: {
    primary: { label: "Cere ofertă", href: "/contact" },
    secondary: { label: "Vezi modele", href: "/modele" },
  },

  pachete: {
    title: "Ce oferim",
    items: [
      "Ridicare topo",
      "Studiu geotehnic",
      "DTAC – Documentație pentru autorizare",
      "PTE (PTh + DE) – Proiect tehnic + detalii de execuție",
      "Project Management execuție",
      "Execuție prin constructori acreditați",
    ],
    actions: [{ label: "Detalii servicii", href: "/pachete" }],
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
      summary: "Varianta WHITE — fațadă deschisă, contrast elegant, lumină naturală.",
      image: "/brand/model-white.jpg",
    },
  ],

  proces: {
    title: "Proces",
    items: [
      { title: "Brief", text: "Clarificăm cerințele, terenul și bugetul. Stabilim pașii și livrabilele." },
      { title: "Proiectare", text: "Arh + structură + instalații, coordonare și verificări pe specialități." },
      { title: "Autorizare", text: "DTAC și suport pentru avize, după caz." },
      { title: "Execuție (opțional)", text: "Management, control calitate și participare la faze determinate." },
    ],
  },

  contact: {
    title: "Contact",
    phone: "+40 7xx xxx xxx",
    email: "contact@iconic-collection.ro",
    note: "Înlocuiește datele cu ale tale.",
  },
} as const;
