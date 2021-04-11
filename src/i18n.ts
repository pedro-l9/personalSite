import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          helloWorld: 'Hello, world!',
          myNameIs: 'My name is',
          role: "I'm a Senior Software Developer at ",
          checkMeOut: 'Check me out on:',
          play: 'Play',
          gameOver: 'Game over!',
          score: 'Score:',
          restart: 'Restart',
          goBack: 'Go back',
        },
      },
      br: {
        translation: {
          helloWorld: 'Olá, mundo!',
          myNameIs: 'Meu nome é',
          role: 'Sou Desenvolvedor Sênior na ',
          checkMeOut: 'Saiba mais sobre mim:',
          play: 'Jogar',
          gameOver: 'Game over!',
          score: 'Pontuação:',
          restart: 'Reiniciar',
          goBack: 'Voltar',
        },
      },
    },
    lng: 'br',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
