import { Eye, ListCollapse, Pencil, Trash2 } from "lucide-react";
import { useGetMyVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { useNavigate, useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { useDeleteVacancy } from "@/react-query/mutation/vacancies/vacanciesMutation";
import { useAuthContext } from "@/context/hooks/useAuthContext";
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
import { getFormattedDate } from "@/utils/dateFormatter";

const MyVacancies = () => {
  const { user } = useAuthContext();
  const { data: vacanciesList } = useGetMyVacanciesList(user?.id ?? "");
  const navigate = useNavigate();
  const { lang } = useParams();
  const { mutate: mutateVacancyDelete } = useDeleteVacancy();

  const handleClickView = (vac_id: number) => {
    navigate(`/${lang}/vacancies/${vac_id}`);
  };
  const handleDeleteClick = (id: number) => {
    mutateVacancyDelete(id);
  };
  const handleEditClick = (id: number) => {
    navigate(`/${lang}/edit-vacancies/${id}`);
  };

  return (
    <>
      <Card className="mx-4 max-w-4xl space-y-9 px-4 pb-9 pt-6 md:mx-auto">
        <div className="mx-auto flex items-center justify-center gap-2 text-center text-xl font-bold text-primary">
          <ListCollapse />
          <h1>My Vacancies</h1>
        </div>
        <Table className="x-4 whitespace-nowrap text-xs sm:text-sm md:text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="sm:w-24">ID</TableHead>
              <TableHead className="max-w-24 sm:w-40">Title</TableHead>
              <TableHead className="hidden md:table-cell">Job Type</TableHead>
              <TableHead className="hidden md:table-cell">Salary ₾</TableHead>
              <TableHead className="hidden sm:table-cell sm:w-28">
                Date
              </TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {vacanciesList?.map((announcement) => (
              <TableRow className="h-16" key={announcement?.id}>
                <TableCell className="font-medium">
                  {announcement?.id}
                </TableCell>
                <TableCell className="p-0 md:p-6">
                  {announcement?.title}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {announcement?.jobType}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {announcement?.salaryMin} - {announcement?.salaryMax}{" "}
                </TableCell>
                <TableCell className="hidden whitespace-normal p-2 sm:table-cell md:whitespace-nowrap md:p-6">
                  {getFormattedDate(announcement?.created_at)}
                </TableCell>
                <TableCell className="mt-2 flex justify-center">
                  <div className="flex flex-col items-center gap-2 md:flex-row">
                    <div
                      className="flex w-9 justify-center rounded-md border-2 p-1 hover:bg-blue-200"
                      onClick={() => handleClickView(announcement?.id)}
                    >
                      <Eye className="h-4 w-5 text-green-500" />
                    </div>
                    <div
                      className="flex w-9 justify-center rounded-md border-2 p-1 hover:bg-blue-200"
                      onClick={() => handleEditClick(announcement?.id)}
                    >
                      <Pencil className="h-4 w-5 text-primary" />
                    </div>
                    {/* <div
                      className="flex w-9 justify-center rounded-md border-2 p-1 hover:bg-blue-200"
                      onClick={() => handleDeleteClick(announcement?.id)}
                    >
                      <Trash2 className="h-4 w-5 text-red-600" />
                    </div> */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <div className="flex w-9 justify-center rounded-md border-2 p-1 hover:bg-blue-200">
                          <Trash2 className="h-4 w-5 text-red-600" />
                        </div>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="pt-2">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex flex-row items-center justify-between">
                            Are you sure?
                            <img
                              src={delete_illustration}
                              className="m-0 h-16 w-20 p-0"
                            />
                          </AlertDialogTitle>

                          <AlertDialogDescription>
                            This will permanently delete your vacancy and remove
                            your data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteClick(announcement?.id)}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default MyVacancies;
