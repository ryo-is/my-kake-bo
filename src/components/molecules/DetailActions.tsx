import { Button } from '@atoms/Button';
import { PlusIcon } from '@heroicons/react/solid';

export const DetailActions = () => {
  const handleClick = () => {
    console.log('handleClick');
  };

  return (
    <div className="flex justify-end px-3">
      <Button
        handleClick={handleClick}
        addClass="bg-indigo-600 hover:bg-indigo-800"
      >
        <PlusIcon className="fill-current w-4 h-4 mr-2" />
        <span>追加する</span>
      </Button>
    </div>
  );
};
