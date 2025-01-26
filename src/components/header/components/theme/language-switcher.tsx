"use client";

import { useEffect, useState } from "react";
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

  const [currentLanguage, setCurrentLanguage] = useState<languagesObj>(
    languages.find((language) => language.code === lang) || languages[0],
  );
  useEffect(() => {
    const selectedLanguage =
      languages.find((language) => language.code === lang) || languages[0];
    setCurrentLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage.code);
  }, [lang]);

  const handleLanguageChange = (language: languagesObj) => {
    const newPath = location.pathname.replace(`/${lang}`, `/${language.code}`);
    navigate(newPath);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="border-2 px-2">
          <Globe />
          <span className="text-xs">{currentLanguage.name.slice(0, 3)}</span>
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
