import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          helloWorld: "Hello, world!",
          myNameIs: "My name is",
          backendEngineer: "I'm a Backend Engineer at ",
          checkMeOut: "Check me out on:",
          dismiss: "Dismiss"
        }
      },
      br: {
        translation: {
          helloWorld: "Olá, mundo!",
          myNameIs: "Meu nome é",
          backendEngineer: "Trabalho como Backend Engineer na ",
          checkMeOut: "Saiba mais sobre mim:",
          dismiss: "Ignorar"
        }
      }
    },
    lng: "br",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
