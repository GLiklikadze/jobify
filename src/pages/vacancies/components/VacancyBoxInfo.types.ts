export type VacancyBoxInfoProps = {
  vacancyId: number;
  created_at: string;
  handleEmailClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => void;
};
