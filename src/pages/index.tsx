import type { NextPage } from 'next';
import { useUser } from '@hooks/useUser';

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex justify-center items-center h-screen flex-col">
      {user && (
        <>
          <strong>{user.name}</strong>
          <div>{user.permission}</div>
        </>
      )}
    </div>
  );
};

export default Home;
