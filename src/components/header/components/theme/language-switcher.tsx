"use client";

import { useState } from "react";
import { Check, Globe } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import i18next from "i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type languagesObj = { code: string; name: string };

const languages: languagesObj[] = [
  { code: "ka", name: "ქართული" },
  { code: "en", name: "English" },
];

export default function LanguageSwitcher() {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  console.log(location);
  const handleLanguageChange = (language: languagesObj) => {
    let newPath;
    setCurrentLanguage(language);
    if (currentLanguage.code === "ka") {
      i18next.changeLanguage("en");
      newPath = location.pathname.replace(`/${lang}`, `/en`);
      navigate(newPath);
    } else if (currentLanguage.code === "en") {
      i18next.changeLanguage("ka");
      newPath = location.pathname.replace(`/${lang}`, `/ka`);
      navigate(newPath);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="p-4  border-2">
          <Globe />
          {currentLanguage.name.slice(0, 3)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-30">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="flex items-center justify-between"
          >
            {language.name}
            {language.code === currentLanguage.code && (
              <Check className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
