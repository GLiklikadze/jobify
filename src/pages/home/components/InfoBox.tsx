import { Trans } from "react-i18next";
import { InfoBoxProps } from "./InfoBox.types";

const InfoBox: React.FC<InfoBoxProps> = ({ boxNumber, boxName, children }) => {
  return (
    <div className="flex h-28 w-52 flex-row items-center justify-around rounded-sm border-2 border-secondary p-1">
      <div className="rounded-sm border-8 border-blue-200">
        <div className="flex h-14 w-16 items-center justify-center bg-blue-100">
          <Trans>{children}</Trans>
        </div>
      </div>
      <div>
        <p className="text-center font-bold text-primary">{boxNumber}</p>
        <p className="text-sm font-semibold text-gray-500">{boxName}</p>
      </div>
    </div>
  );
};

export default InfoBox;
