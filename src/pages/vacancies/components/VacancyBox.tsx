import { Card } from "@/components/ui/card";
import { PropsWithChildren } from "react";

export const VacancyBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Card className="mx-auto max-w-4xl p-4 hover:bg-secondary dark:hover:bg-gray-800">
      {children}
    </Card>
  );
};
