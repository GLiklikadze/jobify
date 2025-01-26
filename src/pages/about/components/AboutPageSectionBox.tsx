import React, { ReactNode } from "react";

type AboutPageSectionBoxProps = {
  children: ReactNode;
  boxTitle: string;
  boxDescription: string;
};

const AboutPageSectionBox: React.FC<AboutPageSectionBoxProps> = ({
  children,
  boxTitle,
  boxDescription,
}) => {
  return (
    <div className="space-y-4 rounded-lg bg-muted p-6">
      {children}
      <h4 className="text-xl font-bold">{boxTitle}</h4>
      <p className="text-muted-foreground">{boxDescription}</p>
    </div>
  );
};

export default AboutPageSectionBox;
