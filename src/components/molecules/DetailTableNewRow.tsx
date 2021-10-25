import { ChevronDownIcon } from '@heroicons/react/solid';

export const DetailTableNewRow = () => {
  return (
    <tr className="text-sm">
      <td width="25%" className="py-2 px-1">
        <div className="inline-block relative w-full">
          <select className="block appearance-none w-full bg-gray-50 border-2 border-gray-400 p-1 rounded-sm leading-tight focus:outline-none cursor-pointer">
            <option></option>
            <option>食費</option>
            <option>雑費</option>
            <option>その他</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1">
            <ChevronDownIcon className="fill-current h-4 w-4" />
          </div>
        </div>
      </td>
      <td width="45%" className="py-2 px-1">
        <input
          type="text"
          className="w-full appearance-none leading-tight focus:outline-none p-1 bg-gray-50 border-2 border-gray-400 rounded-sm"
        />
      </td>
      <td width="30%" className="py-2 px-1">
        <input
          type="text"
          className="w-full appearance-none leading-tight focus:outline-none p-1 bg-gray-50 border-2 border-gray-400 rounded-sm"
        />
      </td>
    </tr>
  );
};
