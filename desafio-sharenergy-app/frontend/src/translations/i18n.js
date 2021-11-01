import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import  { TRANSLATIONS_PT_BR }  from './pt-br';
import  { TRANSLATIONS_EN }  from './en';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      pt: {
        translation: TRANSLATIONS_PT_BR,
      },
      en: {
        translation: TRANSLATIONS_EN,
      },
    },
    lng: "pt-BR",
    fallbackLng: "pt-BR",

    interpolation: {
      escapeValue: false,
    },
  });
