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

type languagesObj = { code: string; name: string };

const languages: languagesObj[] = [
  { code: "ka", name: "ქართული" },
  { code: "en", name: "English" },
];

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const handleLanguageChange = (language: languagesObj) => {
    setCurrentLanguage(language);
    if (currentLanguage.code === "ka") {
      i18next.changeLanguage("en");
    } else {
      i18next.changeLanguage("ka");
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
