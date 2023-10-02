import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

import resources from './locales';
import App from './App';

const DEFAULT_LANGUAGE = 'en';

const initApp = async () => {
  const i18nextInstance = i18next.createInstance();

  await i18nextInstance.use(initReactI18next).init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <I18nextProvider i18n={i18nextInstance}>
      <App />
    </I18nextProvider>
  );
};

export default initApp;
