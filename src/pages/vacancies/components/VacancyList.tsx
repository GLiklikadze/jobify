import { Heart, Mail, MapPin } from "lucide-react";
import { VacancyBox } from "./VacancyBox";
import { Button } from "@/components/ui/button";

const VacancyList = () => {
  return (
    <div className="mt-4 space-y-2">
      <VacancyBox>
        <div className="flex flex-row justify-between">
          <div className="rounded-2xl border-2 border-primary overflow-hidden">
            <img
              src="https://thumbs.dreamstime.com/z/employment-partnership-vector-symbol-graphic-logo-icon-design-employment-partnership-symbol-logo-icon-design-121548628.jpg?ct=jpeg"
              className="w-24 h-20"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex flex-row space-x-2 items-center">
              <h1 className="text-primary font-bold">დაკრედიტების ექსპერტი </h1>
              <Heart
                className="text-primary hover:fill-primary"
                size="1.2rem"
              />
            </div>
            <p>თიბისი ბანკი</p>
            <p className="flex items-center space-x-1 text-primary text-sm">
              <MapPin className="inline-flex" size="1rem" />
              <span> საქართველო, თბილისი</span>
            </p>
          </div>
          <div className="flex flex-col space-y-8">
            <div>ანაზღაურება - 1500 $</div>
            <div>05 იან 2025</div>
          </div>
          <div className="flex flex-col justify-between">
            <Button variant="default" className="p-6">
              <Mail />
              რეზიუმეს გაგზავნა
            </Button>
          </div>
        </div>
      </VacancyBox>
    </div>
  );
};

export default VacancyList;
