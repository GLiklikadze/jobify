import { Briefcase } from "lucide-react";

const VacancyBoxImg: React.FC<{ logo_url: string }> = ({ logo_url }) => {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-full">
      {logo_url ? (
        <img
          src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${logo_url}`}
          className="h-20 w-28 overflow-hidden rounded-full object-cover"
        />
      ) : (
        <Briefcase
          size="5rem"
          className="rounded-full border-2 text-orange-300"
        />
      )}
    </div>
  );
};

export default VacancyBoxImg;
