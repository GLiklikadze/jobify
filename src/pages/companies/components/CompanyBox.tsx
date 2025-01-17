import { Card } from "@/components/ui/card";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

type CompanyBoxProps = PropsWithChildren<{
  company_id: string;
}>;

const CompanyBox: React.FC<CompanyBoxProps> = ({ company_id, children }) => {
  const navigate = useNavigate();
  const handleNavigate = (id: string) => {
    navigate(`${id}`);
  };
  return (
    <Card
      className="mx-auto w-64 cursor-pointer p-4 hover:bg-secondary dark:hover:bg-gray-800 sm:w-96"
      onClick={() => handleNavigate(company_id)}
    >
      {children}
    </Card>
  );
};

export default CompanyBox;
