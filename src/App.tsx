import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/header/components/theme/theme-provider";
import RootLayout from "./components/layout/RootLayout";
import VacanciesPage from "./pages/vacancies/VacanciesPage";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<VacanciesPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
