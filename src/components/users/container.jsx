import { Users } from "./component";
import { useGetUsersQuery } from "../../redux/service/api/api";
import { selectUserFromResult } from "../../redux/service/api/selectors";

export const UsersContainer = ({ id }) => {
  const { data: users, isFetching } = useGetUsersQuery(undefined, {
    selectFromResult: selectUserFromResult(id),
  });

  if (isFetching) {
    return <div>Пользователи загружаются</div>;
  }

  return <Users users={users} />;
};
