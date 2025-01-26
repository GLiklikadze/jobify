import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "../ui/card";

export function SkeletonCard() {
  return (
    <Card className="mx-auto p-4 dark:hover:bg-gray-800 sm:max-w-4xl">
      <div className="flex h-[8.4rem] flex-row gap-12 overflow-hidden sm:h-[5.1rem] sm:gap-8">
        <div className="flex items-center gap-4">
          <Skeleton className="h-20 w-20 rounded-full bg-[#2D333B]" />
        </div>
        <div className="flex w-full flex-col justify-between md:flex-row">
          <div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton className="sm-w-52 h-4 w-24 bg-[#2D333B]" />
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="sm-60 h-4 w-28 bg-[#2D333B]" />
                <Skeleton className="h-4 w-14 bg-[#2D333B]" />
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Skeleton className="h-4 w-24 bg-[#2D333B] sm:w-48" />
                <Skeleton className="h-4 w-20 bg-[#2D333B]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between md:flex-col">
            <Skeleton className="hidden h-9 w-28 bg-[#2D333B] md:block" />
            <Skeleton className="h-4 w-28 bg-[#2D333B] sm:block" />
          </div>
        </div>
      </div>
    </Card>
  );
}
