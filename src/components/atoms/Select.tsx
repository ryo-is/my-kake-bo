import { ChangeEvent } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; text: string }>;
};

export const Select = ({ value, onChange, options }: Props) => {
  return (
    <div className="inline-block relative w-full">
      <div className="inline-block relative w-full">
        <select
          className="block appearance-none w-full bg-gray-50 border-2 border-gray-400 p-1 rounded-sm leading-tight focus:outline-none cursor-pointer"
          value={value}
          onChange={(e) => onChange(e)}
        >
          {options.map((o) => (
            <option value={o.value} key={o.value}>
              {o.text}
            </option>
          ))}
        </select>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1">
        <ChevronDownIcon className="fill-current h-4 w-4" />
      </div>
    </div>
  );
};
