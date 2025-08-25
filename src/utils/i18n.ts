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