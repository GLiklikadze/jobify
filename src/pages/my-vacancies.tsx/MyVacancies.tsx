import { Eye, ListCollapse, Pencil, Trash2 } from "lucide-react";
import { useGetVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
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

const MyVacancies = () => {
  const { data: vacanciesList } = useGetVacanciesList();
  const navigate = useNavigate();
  const { lang } = useParams();
  // const handleClick = (vac_id: number) => {
  //   navigate(`${vac_id}`);
  // };

  const handleEditClick = (id: number) => {
    navigate(`/${lang}/edit-vacancies/${id}`);
  };
  return (
    <>
      <Card className="mx-auto max-w-4xl space-y-9 px-4 pb-9 pt-6">
        <div className="mx-auto flex items-center justify-center gap-2 text-center text-xl font-bold text-primary">
          <ListCollapse />
          <h1>My Vacancies</h1>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Job Type</TableHead>
              <TableHead>Salary ₾</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {vacanciesList?.map((announcement) => (
              <TableRow className="h-16" key={announcement?.id}>
                <TableCell className="font-medium">
                  {announcement?.id}
                </TableCell>
                <TableCell>{announcement?.title}</TableCell>
                <TableCell>{announcement?.jobType}</TableCell>
                <TableCell>
                  {announcement?.salaryMin} - {announcement?.salaryMax}{" "}
                </TableCell>
                <TableCell>{announcement?.location}</TableCell>
                <TableCell className="mt-2 flex justify-center">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex w-9 justify-center rounded-md border-2 p-1 hover:bg-blue-200">
                      <Eye className="h-4 w-5 text-green-500" />
                    </div>
                    <div
                      className="flex w-9 justify-center rounded-md border-2 p-1 hover:bg-blue-200"
                      onClick={() => handleEditClick(announcement?.id)}
                    >
                      <Pencil className="h-4 w-5 text-primary" />
                    </div>
                    <div className="flex w-9 justify-center rounded-md border-2 p-1 hover:bg-blue-200">
                      <Trash2 className="h-4 w-5 text-red-600" />
                    </div>
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
