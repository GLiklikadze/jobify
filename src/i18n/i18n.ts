import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import HeaderEn from "@/i18n/en/HeaderEn.json";
import HeaderKa from "@/i18n/ka/HeaderKa.json";

import modeToggleEn from "@/i18n/en/modeToggleEn.json";
import modeToggleKa from "@/i18n/ka/modeToggleKa.json";

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: {
        "header-comp": HeaderKa,
        "mode-toggle": modeToggleKa,
      },
    },
    en: {
      translation: {
        "header-comp": HeaderEn,
        "mode-toggle": modeToggleEn,
      },
    },
  },
  lng: "ka",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
