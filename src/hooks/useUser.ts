import { useEffect, useState } from 'react';
import { apiHelper } from '@infrastructures/helper';

export type User = {
  name: string;
  permission: string;
};

export const useUser = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    apiHelper.get<User>({ path: '/mock/user' }).then((res) => {
      setUser({ ...res });
    });
  }, []);

  return {
    user,
  };
};
