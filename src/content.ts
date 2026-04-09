export type ServiceItem = {
  name: string;
  description: string;
};

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

export const services: ServiceItem[] = [
  {
    name: 'Šití na míru',
    description: 'Vytvoříme oděv přesně podle vašich představ a tělesných proporcí. Od výběru látky po finální zkoušku.',
  },
  {
    name: 'Úpravy oděvů',
    description: 'Zkrácení, rozšíření, zúžení či jiná přizpůsobení confection oblečení tak, aby sedělo jako ulité.',
  },
  {
    name: 'Opravy oděvů',
    description: 'Výměna zipů, záplaty, opravy švů a podšívek. Prodloužíme životnost vašich oblíbených kousků.',
  },
  {
    name: 'Návrh oděvů',
    description: 'Spolupracujeme s vámi od prvního náčrtu až po hotový oděv – s důrazem na střih, detail a materiál.',
  },
];

export const portfolio: PortfolioItem[] = [
  {
    title: 'Atelier Noir',
    category: 'Interior Photography',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA40BOUaBDWRqApYNODG6-4TlnaJPw05-s29Zq6JXAY9qEsdfhGFGsHTO1__8LJSXw18oZik1f0aY3TycicVv9_421s_YXrPJ4WCCS4BqEkDKb3YSTiczFNKH7DMDOzQRBF8D96miIMuunPsr8T9HvuZee9YcyU22KgUOpruvmxmk2ngrD1h4BHGdwzeUZ1-hyAPBec1_2yAMBLM3LdttJ46P-voBaUyjApkENRSFo_kNPTTNyxkF207VbO1zVHdGx7Oe3QduePplc',
  },
  {
    title: 'Kolekce Jaro 24',
    category: 'Visual Design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHWtuDcq-h2EI8c3zoFYPbKGLXGUduFmskEfqYF8vAtofSYDk5MQSnDPOZxUqJK83ZztyAiFm7MRpaZbDaBZMOB2IBy3-_xQIEXAtkEe4wPsn9hzL2c3uJcnj1jaRfyalmp6yUrO0l1duPKzhsQp175N0BaCRBhYZWOXs2TxcSg31GipofsRd2_Ia0vDLsQNa90AeWe1QN091PvS03L40PyW1UF8Ekc1dPDwEX0OTBOl5rTrlUUFrapoqvrJ45urIudaBSiwR93AM',
  },
  {
    title: 'Silk & Stone',
    category: 'Branding & Identity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmyz5f5SPsdYOq0GLRqALgtNgU-sxVg8tO9OipJ2jCFmfn0nIPJub8c6Q2-V52ACyPeq5XDvHoNPVBpwNlfZJOtDLNMhEK7kH2Xup1Ew5LnQ3PB7ilS7VF6WuCzmZDR_vMQpYiFxW4XBqyhJbVPU5H1Y12TzT4f0Ada84OudylH3H9hHeiwdvZTwx9_O3HbtzXygCOikukrm1vjm5kNu9OhzJv1p11-TNWYT7Nb-6wsBxmrfBoozLdm8PR8BwTho2GrfGVDokvxww',
  },
];
