import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

type Props = {
  mode: 'past' | 'now';
  setMode: Dispatch<SetStateAction<'past' | 'now'>>;
};

export const GraphHeader = ({ mode, setMode }: Props) => {
  const isSelectedModeClass = (key: 'past' | 'now') => {};

  return (
    <div className="flex items-center px-2 pt-2">
      <div className="text-xl flex-1">📈 収支グラフ</div>
      <div className="flex text-sm border border-gray-600 rounded">
        <div
          className={clsx(
            'py-1 px-2 border-r border-gray-600 cursor-pointer',
            mode === 'now' && 'bg-gray-600 text-gray-100'
          )}
          onClick={() => setMode('now')}
        >
          今月の支出
        </div>
        <div
          className={clsx(
            'py-1 px-2 cursor-pointer',
            mode === 'past' && 'bg-gray-600 text-gray-100'
          )}
          onClick={() => setMode('past')}
        >
          過去の支出
        </div>
      </div>
    </div>
  );
};
