import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/header/components/theme/theme-provider";
import RootLayout from "./components/layout/RootLayout";
import VacanciesPage from "./pages/vacancies/VacanciesPage";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<VacanciesPage />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
