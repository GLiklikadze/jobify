import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import HeaderEn from "@/i18n/en/components/HeaderEn.json";
import HeaderKa from "@/i18n/ka/components/HeaderKa.json";
import VacancyBoxInfoEn from "@/i18n/en/components/VacancyBoxInfoEn.json";
import VacancyBoxInfoKa from "@/i18n/ka/components/VacancyBoxInfoKa.json";
import SortButtonEn from "@/i18n/en/components/SortButtonEn.json";
import SortButtonKa from "@/i18n/ka/components/SortButtonKa.json";
import vacanciesFormEn from "@/i18n/en/components/vacanciesFormEn.json";
import vacanciesFormKa from "@/i18n/ka/components/vacanciesFormKa.json";

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
import MyVacanciesEn from "@/i18n/en/pages/MyVacanciesEn.json";
import MyVacanciesKa from "@/i18n/ka/pages/MyVacanciesKa.json";
import FavoritesPageEn from "@/i18n/en/pages/FavoritesPageEn.json";
import FavoritesPageKa from "@/i18n/ka/pages/FavoritesPageKa.json";
import CompaniesVacanciesEn from "@/i18n/en/pages/CompaniesVacanciesEn.json";
import CompaniesVacanciesKa from "@/i18n/ka/pages/CompaniesVacanciesKa.json";
import AddVacanciesPageEn from "@/i18n/en/pages/AddVacanciesPageEn.json";
import AddVacanciesPageKa from "@/i18n/ka/pages/AddVacanciesPageKa.json";
import EditVacanciesEn from "@/i18n/en/pages/EditVacanciesEn.json";
import EditVacanciesKa from "@/i18n/ka/pages/EditVacanciesKa.json";
import AboutPageEn from "@/i18n/en/pages/AboutPageEn.json";
import AboutPageKa from "@/i18n/ka/pages/AboutPageKa.json";
import SingleVacancyEn from "@/i18n/en/pages/SingleVacancyEn.json";
import SingleVacancyKa from "@/i18n/ka/pages/SingleVacancyKa.json";

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
        "my-vacancies": MyVacanciesKa,
        "favorites-page": FavoritesPageKa,
        "companies-vacancies": CompaniesVacanciesKa,
        "add-vacancies-page": AddVacanciesPageKa,
        "edit-vacancies-page": EditVacanciesKa,
        "vacancies-form": vacanciesFormKa,
        "about-page": AboutPageKa,
        "single-vacancy": SingleVacancyKa,
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
        "my-vacancies": MyVacanciesEn,
        "favorites-page": FavoritesPageEn,
        "companies-vacancies": CompaniesVacanciesEn,
        "add-vacancies-page": AddVacanciesPageEn,
        "edit-vacancies-page": EditVacanciesEn,
        "vacancies-form": vacanciesFormEn,
        "about-page": AboutPageEn,
        "single-vacancy": SingleVacancyEn,
      },
    },
  },
  lng: "en",
  fallbackLng: "ka",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
