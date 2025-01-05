import { Card } from "@/components/ui/card";
import { PropsWithChildren } from "react";

export const VacancyBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Card className="p-4 max-w-5xl mx-auto hover:bg-secondary dark:hover:bg-gray-800">
      {children}
    </Card>
  );
};
