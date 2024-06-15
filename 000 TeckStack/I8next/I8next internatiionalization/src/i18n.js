import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    react: {
      useSuspense: false,
    },
    //   resources: {
    //     en: {
    //       translation: {
    //         'Hey Yo Im at home': 'Hey Yo Im at home',
    //         'Hey Yo Im inside Room': 'Hey Yo Im inside Room',
    //       },
    //     },
    //     es: {
    //       translation: {
    //         'Hey Yo Im at home': 'Hey yo estoy en casa',
    //         'Hey Yo Im inside Room': 'Hola, yo estoy dentro de la habitación',
    //       },
    //     },
    //     de: {
    //       translation: {
    //         'Hey Yo Im at home': 'Hey Yo Ich bin zu Hause',
    //         'Hey Yo Im inside Room': 'Hey Yo Ich bin im Zimmer',
    //       },
    //     },
    //   },
  });

export default i18n;
