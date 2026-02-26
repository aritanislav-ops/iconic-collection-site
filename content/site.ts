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
      images: [
        "/brand/models/iconic-1story-black/01.jpg",
        "/brand/models/iconic-1story-black/02.jpg",
        "/brand/models/iconic-1story-black/03.jpg",
        "/brand/models/iconic-1story-black/04.jpg",
        "/brand/models/iconic-1story-black/05.jpg",
        "/brand/models/iconic-1story-black/06.jpg",
        "/brand/models/iconic-1story-black/07.jpg",
        "/brand/models/iconic-1story-black/08.jpg",
        "/brand/models/iconic-1story-black/09.jpg",
        "/brand/models/iconic-1story-black/10.jpg",
        "/brand/models/iconic-1story-black/11.jpg",
        "/brand/models/iconic-1story-black/12.jpg",
        "/brand/models/iconic-1story-black/13.jpg",
        "/brand/models/iconic-1story-black/14.jpg",
        "/brand/models/iconic-1story-black/15.jpg",
        "/brand/models/iconic-1story-black/16.jpg",
      ],
    },
    {
      slug: "iconic-1story-white",
      name: "iCONiC 1story WHITE",
      summary: "Varianta WHITE — fațadă deschisă, contrast elegant, lumină maximă.",
      images: [
        "/brand/models/iconic-1story-white/01.jpg",
        "/brand/models/iconic-1story-white/02.jpg",
        "/brand/models/iconic-1story-white/03.jpg",
        "/brand/models/iconic-1story-white/04.jpg",
        "/brand/models/iconic-1story-white/05.jpg",
        "/brand/models/iconic-1story-white/06.jpg",
        "/brand/models/iconic-1story-white/07.jpg",
        "/brand/models/iconic-1story-white/08.jpg",
        "/brand/models/iconic-1story-white/09.jpg",
        "/brand/models/iconic-1story-white/10.jpg",
      ],
    },
  ] as const,

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
    address: "Sector 3, Str. Agatha Bârsescu Nr. 15B, Etaj 01, Biroul 07, București",
    program: "Luni–Vineri 09:00–18:00",
    mapEmbedUrl: "https://www.google.com/maps?q=Strada%20Agatha%20Barsescu%2015B%20Bucuresti&z=16&output=embed",
  },

  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
} as const;
