import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    react: {
      useSuspense: false,
    },
    resources: {
      en: {
        translation: {
          localization_testing: "english",
          Welcome_to_React: "Welcome to React {{xx}}",
        },
      },
      tr: {
        translation: {
          localization_testing: "turkish",
          Welcome_to_React: "React'e Hoş Geldiniz {{xx}}",
        },
      },
    },
  });

export default i18n;
