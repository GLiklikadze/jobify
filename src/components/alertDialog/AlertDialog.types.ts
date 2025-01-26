import { ReactNode } from "react";

export type AlertDialogComponentProps = {
  question: string;
  description: string;
  cancelLabel: string;
  continueLabel: string;
  onClickAction: () => void;
  children: ReactNode;
};
