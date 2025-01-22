import { HowWorksBoxProps } from "./HowWorksBox.types";

const HowWorksBox: React.FC<HowWorksBoxProps> = ({
  boxTitle,
  boxDescription,
  children,
}) => {
  return (
    <div className="flex w-72 flex-col items-center rounded-md bg-blue-200 p-8 text-center dark:bg-blue-300">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        {children}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-primary">{boxTitle}</h3>
      <p className="text-xs text-gray-600">{boxDescription}</p>
    </div>
  );
};

export default HowWorksBox;
