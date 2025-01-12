import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/header/components/theme/theme-provider";
import RootLayout from "./components/layout/RootLayout";
import VacanciesPage from "./pages/vacancies/VacanciesPage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import { useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
import { useAuthContext } from "./context/hooks/useAuthContext";
import IsAuthGuard from "./route-guards/isAuthGuard";
import ProfilePage from "./pages/profile/ProfilePage";
import IsUnAuthGuard from "./route-guards/isUnAuthGuard";
import AddVacanciesPage from "./pages/add-vacancies/AddVacanciesPage";
import CompaniesPage from "./pages/companies/CompaniesPage";
import SingleVacancy from "./pages/vacancies/views/single/SingleVacancy";
import HomePage from "./pages/home/HomePage";
import MyVacancies from "./pages/my-vacancies.tsx/MyVacancies";
import ErrorPage from "./pages/error/ErrorPage";

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

  return (
    <ThemeProvider defaultTheme="system">
      <Routes>
        <Route path="/:lang" element={<RootLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="vacancies" element={<VacanciesPage />} />
          <Route path="vacancies/:vac_id" element={<SingleVacancy />} />
          <Route path="my-vacancies" element={<MyVacancies />} />
          <Route path="add-vacancies" element={<AddVacanciesPage />} />
          <Route path="companies" element={<CompaniesPage />} />
          <Route element={<IsAuthGuard />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<IsUnAuthGuard />}>
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>
        <Route path="/" element={<Navigate to="/ka/home" />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
