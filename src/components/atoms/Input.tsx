import { ChangeEvent, memo } from 'react';

type Props = {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const InputBase = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      className="w-full appearance-none leading-tight focus:outline-none p-1 bg-gray-50 border-2 border-gray-400 rounded-sm"
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export const Input = memo(InputBase);
