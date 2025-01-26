import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/header/components/theme/theme-provider";
import { lazy, Suspense, useEffect } from "react";
import { supabase } from "@/supabase/supabaseClient";
import { useAuthContext } from "./context/hooks/useAuthContext";
import { useTranslation } from "react-i18next";
import { Spinner } from "./components/loading/LoadingSpinner";
import RootLayout from "@/components/layout/RootLayout";
import IsAuthGuard from "@/route-guards/isAuthGuard";
import IsUnAuthGuard from "@/route-guards/isUnAuthGuard";

const VacanciesPage = lazy(() => import("@/pages/vacancies/VacanciesPage"));
const RegisterPage = lazy(() => import("@/pages/register/RegisterPage"));
const LoginPage = lazy(() => import("@/pages/login/LoginPage"));
const ProfilePage = lazy(() => import("@/pages/profile/ProfilePage"));
const AddVacanciesPage = lazy(
  () => import("@/pages/add-vacancies/AddVacanciesPage"),
);
const CompaniesPage = lazy(() => import("@/pages/companies/CompaniesPage"));
const SingleVacancy = lazy(
  () => import("@/pages/vacancies/views/single/SingleVacancy"),
);
const HomePage = lazy(() => import("@/pages/home/HomePage"));
const MyVacancies = lazy(() => import("@/pages/my-vacancies/MyVacancies"));
const ErrorPage = lazy(() => import("@/pages/error/ErrorPage"));
const EditVacanciesPage = lazy(
  () => import("@/pages/my-vacancies/views/EditVacancies"),
);
const AboutPage = lazy(() => import("@/pages/about/AboutPage"));
const CompaniesVacancies = lazy(
  () => import("@/pages/companies/views/CompaniesVacancies"),
);
const FavoritesPage = lazy(() => import("@/pages/favorites/FavoritesPage"));

function App() {
  const { handleSetUserId, setIsLoading } = useAuthContext();

  useEffect(() => {
    const fetchUser = async () =>
      supabase.auth.getSession().then(({ data: { session } }) => {
        handleSetUserId(session?.user);
        setIsLoading(false);
      });
    fetchUser();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSetUserId(session?.user);
    });

    return () => subscription.unsubscribe();
  }, [handleSetUserId, setIsLoading]);

  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ka") {
      document.body.classList.add("font-ka");
      document.body.classList.remove("font-en");
    } else {
      document.body.classList.add("font-en");
      document.body.classList.remove("font-ka");
    }
  }, [i18n.language]);

  return (
    <ThemeProvider defaultTheme="system">
      <Routes>
        <Route path="/:lang" element={<RootLayout />}>
          <Route
            path="home"
            element={
              <Suspense fallback={<Spinner size="large" />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Spinner size="large" />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="vacancies"
            element={
              <Suspense fallback={<Spinner size="large" />}>
                <VacanciesPage />
              </Suspense>
            }
          />
          <Route
            path="vacancies/:vac_id"
            element={
              <Suspense fallback={<Spinner size="large" />}>
                <SingleVacancy />
              </Suspense>
            }
          />
          <Route
            path="my-vacancies"
            element={
              <Suspense fallback={<Spinner size="large" />}>
                <MyVacancies />
              </Suspense>
            }
          />
          <Route
            path="favorites"
            element={
              <Suspense fallback={<Spinner size="large" />}>
                <FavoritesPage />
              </Suspense>
            }
          />
          <Route
            path="add-vacancies"
            element={
              <Suspense fallback={<Spinner size="large" />}>
                <AddVacanciesPage />
              </Suspense>
            }
          />
          <Route
            path="edit-vacancies/:id"
            element={
              <Suspense fallback={<Spinner size="large" />}>
                <EditVacanciesPage />
              </Suspense>
            }
          />
          <Route
            path="companies"
            element={
              <Suspense fallback={<Spinner size="large" />}>
                <CompaniesPage />
              </Suspense>
            }
          />
          <Route
            path="companies/:company_id"
            element={
              <Suspense fallback={<Spinner size="large" />}>
                <CompaniesVacancies />
              </Suspense>
            }
          />
          <Route element={<IsAuthGuard />}>
            <Route
              path="register"
              element={
                <Suspense fallback={<Spinner size="large" />}>
                  <RegisterPage />
                </Suspense>
              }
            />
            <Route
              path="login"
              element={
                <Suspense fallback={<Spinner size="large" />}>
                  <LoginPage />
                </Suspense>
              }
            />
          </Route>
          <Route element={<IsUnAuthGuard />}>
            <Route
              path="profile"
              element={
                <Suspense fallback={<Spinner size="large" />}>
                  <ProfilePage />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path="/" element={<Navigate to="/en/home" />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner size="large" />}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
