export const site = {
  brandName: "iCONiC collection",
  siteUrl: "https://www.iconic-collection.ro",
  headline: "Case proiectate corect, personalizate pe terenul tău, conform reglementărilor urbanistice.",
  subheadline:
    "Tu vii cu terenul și obiectivul, iar noi ne putem ocupa de ce ai nevoie: concept, studiu geotehnic, proiect complet (arhitectură, structură și instalații), documentații pentru autorizare, urmărire de șantier, dirigenție și execuție.",
  heroBadges: [
    "Proiectare completă pentru casă",
    "Documentații și pași pentru autorizare",
    "Execuție și coordonare până la capăt",
  ],
  cta: {
    primary: { label: "Contactează-ne", href: "/contact" },
    secondary: { label: "Vezi modele", href: "/modele" },
  },

  pachete: {
    title: "Pașii Proiectului",
    items: [
      "Discuția inițială și analiza terenului",
      "Ridicare topografică",
      "Studiu geotehnic",
      "Conceptul casei și organizarea soluției",
      "Documentația pentru autorizare",
      "Proiectul tehnic și detaliile de execuție",
      "Coordonare și clarificări pe parcurs",
      "Execuție",
    ],
    actions: [{ label: "Vezi pașii proiectului", href: "/pachete" }],
  },

  models: [
    {
      slug: "iconic-1story-black",
      name: "CASA PARTER-iCONiC 1-story BLACK",
      summary: "Varianta BLACK — fațadă închisă, accente premium și look minimalist.",
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
        "/brand/models/iconic-1story-black/17.jpg",
      ],
    },
    {
      slug: "iconic-1story-white",
      name: "CASA PARTER-iCONiC 1-story WHITE",
      summary: "Varianta WHITE — fațadă deschisă, contrast elegant și lumină maximă.",
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
        "/brand/models/iconic-1story-white/11.jpg",
        "/brand/models/iconic-1story-white/12.jpg",
        "/brand/models/iconic-1story-white/13.jpg",
      ],
    },
    {
      slug: "iconic-1story-stone",
      name: "CASA PARTER-iCONiC 1-story STONE",
      summary: "Varianta STONE — fațadă din piatră, aspect solid și contrast modern.",
      images: [
        "/brand/models/iconic-1story-stone/01.jpg",
        "/brand/models/iconic-1story-stone/02.jpg",
        "/brand/models/iconic-1story-stone/03.jpg",
        "/brand/models/iconic-1story-stone/04.jpg",
        "/brand/models/iconic-1story-stone/05.jpg",
        "/brand/models/iconic-1story-stone/06.jpg",
        "/brand/models/iconic-1story-stone/07.jpg",
        "/brand/models/iconic-1story-stone/08.jpg",
        "/brand/models/iconic-1story-stone/09.jpg",
        "/brand/models/iconic-1story-stone/10.jpg",
        "/brand/models/iconic-1story-stone/11.jpg",
        "/brand/models/iconic-1story-stone/12.jpg",
        "/brand/models/iconic-1story-stone/13.jpg",
      ],
    },
  ] as const,

  proces: {
    title: "Standardul nostru de proiectare",
    items: [
      {
        title: "Siguranță seismică tratată responsabil",
        text: "Proiectăm structura pentru o comportare seismică corectă, cu soluții coerente și controlate."
      },
      {
        title: "Soluție structurală aleasă rațional",
        text: "Alegem structura în funcție de teren, arhitectură, deschideri, utilizare și comportarea dorită în timp."
      },
      {
        title: "Eficiență energetică și principii NZEB",
        text: "Integrăm soluții compatibile cu cerințele actuale de performanță energetică și cu principiile NZEB."
      },
      {
        title: "Proiectare în interesul clientului",
        text: "Urmărim siguranța, durabilitatea și avantajul real al beneficiarului, nu economii false pe termen scurt."
      },
    ],
  },

contact: {
  title: "Hai să discutăm despre proiectul tău",
  phone: "+40 741 259 236",
  email: "contact@iconic-collection.ro",
  note: "Dacă ai deja terenul sau doar ideea de la care vrei să pornești, ne poți scrie. Îți răspundem clar și îți spunem ce pași urmează.",
  address: "Bucuresti, Sector 3, Str. Agatha Bârsescu Nr. 15B, Etaj 01, Biroul 7, București",
  program: "Luni–Vineri 09:00–18:00",
  mapEmbedUrl: "https://www.google.com/maps?q=Strada%20Agatha%20Barsescu%2015B%20Bucuresti&z=16&output=embed",
},

  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
} as const;
