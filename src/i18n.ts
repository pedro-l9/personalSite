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
          role: "I'm a Lead Software Developer at ",
          checkMeOut: "Check me out on:",
          dismiss: "Dismiss",
          play: "Play"
        }
      },
      br: {
        translation: {
          helloWorld: "Olá, mundo!",
          myNameIs: "Meu nome é",
          role: "Sou Desenvolvedor Líder na ",
          checkMeOut: "Saiba mais sobre mim:",
          dismiss: "Ignorar",
          play: "Jogar"
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
