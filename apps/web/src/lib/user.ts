import { useSuspenseQuery } from "@tanstack/react-query";
import { useUsersServiceFindMe } from "~/api/queries";
import { UsersService } from "~/api/requests";

export const userFindMeQueryOptions = {
  queryKey: [useUsersServiceFindMe],
  queryFn: () => UsersService.findMe(),
};

export const useMe = () => useSuspenseQuery(userFindMeQueryOptions);
