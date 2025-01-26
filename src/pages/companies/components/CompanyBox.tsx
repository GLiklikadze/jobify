import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CompanyBoxProps } from "./CompanyBox.types";

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
