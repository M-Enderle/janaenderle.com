export const languages = {
  en: 'English',
  de: 'Deutsch',
};

export const defaultLang = 'en';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  }
}

// Move translations from lang files
export const ui = {
  en: {
    'site.title': 'Studio Rotstich',
    'site.description': 'Studio Rotstich - Jana Enderle\'s creative work',
    'nav.projects': 'Projects',
    'nav.freehand': 'Free Hand',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.imprint': 'Imprint',
    'nav.language': 'Deutsch',
    'pages.titles.about': 'About',
    'pages.titles.free_hand': 'Free Hand',
    'pages.titles.imprint': 'Imprint',
    'pages.titles.contact': 'Contact',
    'pages.titles.index': 'Studio Rotstich',
    'pages.titles.projects': 'Projects',
    'defaultSEO': 'Studio Rotstich - Jana Enderle\'s creative work and design projects',
    // About page texts
    'texts.about.title': 'Hey!',
    'texts.about.text1': 'The design agency Studio Rotstich in Berlin Charlottenberg focuses on cross-media branding. I am convinced of the relevance of \'old\' ways of communication. Analog media are still relevant in today\'s world and simply offer a special experience. My studio combines old and new into extraordinary concepts.',
    'texts.about.text2': 'As a communication designer, I am aware of my position in society. I solve problems, communicate important topics, and make decisions. I work with structure and conception. My projects engage with socially relevant topics and highlight the possibilities and limits of our society.',
    'texts.about.history.1.1': 'Until now',
    'texts.about.history.1.2': '++ Communication Designer / Finanzguru / Part-time',
    'texts.about.history.2.1': 'March 2021 to October 2022',
    'texts.about.history.2.2': '++ M.A. Communication Design / Creative Leadership & Design Systems / Hochschule Mannheim / Grade 1.0',
    'texts.about.history.2.3': '++ German Design Award / Nominee for 2023',
    'texts.about.history.3.1': 'Since January 2020',
    'texts.about.history.3.2': '++ Studio Rotstich / Freelance Projects',
    'texts.about.history.4.1': '2019',
    'texts.about.history.4.2': '++ Internship / Peter Schmidt Group / Hamburg',
    'texts.about.history.5.1': '2017 - 2021',
    'texts.about.history.5.2': '++ B.A. Communication Design / Hochschule für Gestaltung in Schwäbisch Gmünd / Grade 1.4',
    'texts.about.history.6.1': '2017',
    'texts.about.history.6.2': '++ Internship Interior Design / Vitra International AG',
    'texts.about.history.6.3': '++ Internship / Maurer, Rapp & Henneberg',
    // Project titles
    'projects.annayuna.title': 'ANNA YUNA',
    'projects.super_me.title': 'Super Me',
    'projects.lenis.title': 'Leni\'s Sweet & Salty',
    'projects.odds_and_ends.title': 'odds & ends',
    'projects.vulkanfieber.title': 'Vulkanfieber',
    'projects.cre4te.title': 'CRE4TE',
    'projects.IKEAXAstraZeneca.title': 'IKEA X AstraZeneca',
    // Routes
    'pages.routes.index': '/',
    'pages.routes.about': '/about',
    'pages.routes.free_hand': '/free-hand',
    'pages.routes.contact': '/contact',
    'pages.routes.imprint': '/imprint',
    'projects.annayuna.path': '/project/annayuna',
    'projects.super_me.path': '/project/super_me',
    'projects.lenis.path': '/project/lenis',
    'projects.odds_and_ends.path': '/project/odds_and_ends',
    'projects.vulkanfieber.path': '/project/vulkanfieber',
    'projects.cre4te.path': '/project/cre4te',
    'projects.IKEAXAstraZeneca.path': '/project/IKEAXAstraZeneca',
    // Project alts
    'projects.annayuna.images.front': 'A person is standing in a dark-colored laundromat with her back to the camera. On the hoodie she is wearing is a purple print with different fonts of the musician ANNA YUNA.',
    'projects.super_me.images.front': 'Super Me project image',
    'projects.lenis.images.front': 'Leni\'s Sweet & Salty project image',
    'projects.odds_and_ends.images.front': 'odds & ends project image',
    'projects.vulkanfieber.images.front': 'Vulkanfieber project image',
    'projects.cre4te.images.front': 'CRE4TE project image',
    'projects.IKEAXAstraZeneca.images.front': 'IKEA X AstraZeneca project image',
  },
  de: {
    'site.title': 'Studio Rotstich',
    'site.description': 'Studio Rotstich - Jana Enderles kreative Arbeiten',
    'nav.projects': 'Projekte',
    'nav.freehand': 'Freihand',
    'nav.about': 'Über',
    'nav.contact': 'Kontakt',
    'nav.imprint': 'Impressum',
    'nav.language': 'English',
    'pages.titles.about': 'Über',
    'pages.titles.free_hand': 'Freihand',
    'pages.titles.imprint': 'Impressum',
    'pages.titles.contact': 'Kontakt',
    'pages.titles.index': 'Studio Rotstich',
    'pages.titles.projects': 'Projekte',
    'defaultSEO': 'Studio Rotstich - Jana Enderles kreative Arbeiten und Design-Projekte',
    // About page texts (German)
    'texts.about.title': 'Hey!',
    'texts.about.text1': 'Die Designagentur Studio Rotstich in Berlin Charlottenburg konzentriert sich auf crossmediales Branding. Ich bin von der Relevanz \'alter\' Kommunikationswege überzeugt. Analoge Medien sind in der heutigen Welt immer noch relevant und bieten einfach ein besonderes Erlebnis. Mein Studio verbindet Alt und Neu zu außergewöhnlichen Konzepten.',
    'texts.about.text2': 'Als Kommunikationsdesignerin bin ich mir meiner Position in der Gesellschaft bewusst. Ich löse Probleme, kommuniziere wichtige Themen und treffe Entscheidungen. Ich arbeite mit Struktur und Konzeption. Meine Projekte beschäftigen sich mit gesellschaftlich relevanten Themen und beleuchten die Möglichkeiten und Grenzen unserer Gesellschaft.',
    'texts.about.history.1.1': 'Bis jetzt',
    'texts.about.history.1.2': '++ Kommunikationsdesignerin / Finanzguru / Teilzeit',
    'texts.about.history.2.1': 'März 2021 bis Oktober 2022',
    'texts.about.history.2.2': '++ M.A. Kommunikationsdesign / Creative Leadership & Design Systems / Hochschule Mannheim / Note 1,0',
    'texts.about.history.2.3': '++ German Design Award / Nominiert für 2023',
    'texts.about.history.3.1': 'Seit Januar 2020',
    'texts.about.history.3.2': '++ Studio Rotstich / Freelance Projekte',
    'texts.about.history.4.1': '2019',
    'texts.about.history.4.2': '++ Praktikum / Peter Schmidt Group / Hamburg',
    'texts.about.history.5.1': '2017 - 2021',
    'texts.about.history.5.2': '++ B.A. Kommunikationsdesign / Hochschule für Gestaltung in Schwäbisch Gmünd / Note 1,4',
    'texts.about.history.6.1': '2017',
    'texts.about.history.6.2': '++ Praktikum Innenarchitektur / Vitra International AG',
    'texts.about.history.6.3': '++ Praktikum / Maurer, Rapp & Henneberg',
    // Project titles
    'projects.annayuna.title': 'ANNA YUNA',
    'projects.super_me.title': 'Super Me',
    'projects.lenis.title': 'Leni\'s Sweet & Salty',
    'projects.odds_and_ends.title': 'odds & ends',
    'projects.vulkanfieber.title': 'Vulkanfieber',
    'projects.cre4te.title': 'CRE4TE',
    'projects.IKEAXAstraZeneca.title': 'IKEA X AstraZeneca',
    // Routes
    'pages.routes.index': '/de',
    'pages.routes.about': '/ueber',
    'pages.routes.free_hand': '/freihand',
    'pages.routes.contact': '/kontakt',
    'pages.routes.imprint': '/impressum',
    'projects.annayuna.path': '/projekt/annayuna',
    'projects.super_me.path': '/projekt/super_me',
    'projects.lenis.path': '/projekt/lenis',
    'projects.odds_and_ends.path': '/projekt/odds_and_ends',
    'projects.vulkanfieber.path': '/projekt/vulkanfieber',
    'projects.cre4te.path': '/projekt/cre4te',
    'projects.IKEAXAstraZeneca.path': '/projekt/IKEAXAstraZeneca',
    // Project alts
    'projects.annayuna.images.front': 'Eine Person steht in einem dunklen Waschsalon mit dem Rücken zur Kamera. Auf dem Hoodie, den sie trägt, ist ein lila Aufdruck mit verschiedenen Schriftarten der Musikerin ANNA YUNA zu sehen.',
    'projects.super_me.images.front': 'Super Me Projekt Bild',
    'projects.lenis.images.front': 'Leni\'s Sweet & Salty Projekt Bild',
    'projects.odds_and_ends.images.front': 'odds & ends Projekt Bild',
    'projects.vulkanfieber.images.front': 'Vulkanfieber Projekt Bild',
    'projects.cre4te.images.front': 'CRE4TE Projekt Bild',
    'projects.IKEAXAstraZeneca.images.front': 'IKEA X AstraZeneca Projekt Bild',
  },
} as const;