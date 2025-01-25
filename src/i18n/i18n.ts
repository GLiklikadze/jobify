import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import HeaderEn from "@/i18n/en/components/HeaderEn.json";
import HeaderKa from "@/i18n/ka/components/HeaderKa.json";
import VacancyBoxInfoEn from "@/i18n/en/components/VacancyBoxInfoEn.json";
import VacancyBoxInfoKa from "@/i18n/ka/components/VacancyBoxInfoKa.json";
import SortButtonEn from "@/i18n/en/components/SortButtonEn.json";
import SortButtonKa from "@/i18n/ka/components/SortButtonKa.json";

import modeToggleEn from "@/i18n/en/components/modeToggleEn.json";
import modeToggleKa from "@/i18n/ka/components/modeToggleKa.json";
import RegisterPageEn from "@/i18n/en/pages/RegisterPageEn.json";
import RegisterPageKa from "@/i18n/ka/pages/RegisterPageKa.json";
import LoginPageEn from "@/i18n/en/pages/LoginPageEn.json";
import LoginPageKa from "@/i18n/ka/pages/LoginPageKa.json";
import ProfilePageEn from "@/i18n/en/pages/ProfilePageEn.json";
import ProfilePageKa from "@/i18n/ka/pages/ProfilePageKa.json";
import HomePageEn from "@/i18n/en/pages/HomePageEn.json";
import HomePageKa from "@/i18n/ka/pages/HomePageKa.json";

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: {
        "header-comp": HeaderKa,
        "mode-toggle": modeToggleKa,
        "register-page": RegisterPageKa,
        "login-page": LoginPageKa,
        "profile-page": ProfilePageKa,
        "home-page": HomePageKa,
        "vacancy-box-info": VacancyBoxInfoKa,
        "sort-button": SortButtonKa,
      },
    },
    en: {
      translation: {
        "header-comp": HeaderEn,
        "mode-toggle": modeToggleEn,
        "register-page": RegisterPageEn,
        "login-page": LoginPageEn,
        "profile-page": ProfilePageEn,
        "home-page": HomePageEn,
        "vacancy-box-info": VacancyBoxInfoEn,
        "sort-button": SortButtonEn,
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
