import React from 'react';
import { useGetUsersQuery } from '../../../features/users/usersApiSlice';
import { User } from '../../../features/users/users.types';

export default function Users() {
  const { data, isLoading, error, refetch } = useGetUsersQuery(undefined, {
    // refetchOnMountOrArgChange: true
    // useEffect gibi çalışır. verilen argüman değişirse refetch yapar
  });

  console.log({ data, isLoading, error });

  return (
    <div className="text-4xl">
      {isLoading && <div>Loading...</div>}
      {data && (
        <div>
          {data.map((user: User) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}
