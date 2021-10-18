import type { NextPage } from 'next';
import { Calendar } from '@templates/Calendar';
import { Detail } from '@templates/Detail';
import { Analytics } from '@templates/Analytics';

const Index: NextPage = () => {
  return (
    <div className="min-h-screen h-screen flex flex-wrap min-w-screen w-screen bg-gray-100">
      <Calendar />
      <Detail />
      <Analytics />
    </div>
  );
};

export default Index;
