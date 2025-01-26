import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import delete_illustration from "@/assets/delete_illustration.svg";
import { AlertDialogComponentProps } from "./AlertDialog.types";

const AlertDialogComponent: React.FC<AlertDialogComponentProps> = ({
  question,
  description,
  cancelLabel,
  continueLabel,
  onClickAction,
  children,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="pt-2">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-row items-center justify-between">
            {question}
            <img src={delete_illustration} className="m-0 h-16 w-20 p-0" />
          </AlertDialogTitle>

          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction onClick={onClickAction}>
            {continueLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
