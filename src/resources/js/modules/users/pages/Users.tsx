import React from 'react';
import { useGetUsersQuery } from '../../../features/users/usersApiSlice';
import { User } from '../../../features/users/users.types';

export default function Users() {
  const { data, isLoading, error } = useGetUsersQuery(undefined, {
    // refetchOnMountOrArgChange: true
    // useEffect gibi çalışır. verilen argüman değişirse refetch yapar
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!error && data && (
        <div>
          <h1 className="mb-4 text-5xl text-center">Users</h1>
          <div className="flex flex-wrap items-center justify-center max-w-lg gap-3 mx-auto">
            {data.map((user: User) => (
              <div key={user.id} className="p-2 rounded shadow-md bg-slate-200">
                {user.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
