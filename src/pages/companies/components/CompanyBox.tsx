import { Card } from "@/components/ui/card";
import { PropsWithChildren } from "react";

const CompanyBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Card className="mx-auto max-w-xl p-4 hover:bg-secondary dark:hover:bg-gray-800">
      {children}
    </Card>
  );
};

export default CompanyBox;
