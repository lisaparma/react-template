import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationIT from './it.json';

const resources = {
  it: { translation: translationIT },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    fallbackLng: 'it',
    debug: false,
    react: {
      useSuspense: false
    }
  });

export default i18n;