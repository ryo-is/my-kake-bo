import { CalendarCellBox } from '@atoms/CalendarCellBox';

export const CalendarDayOfWeek = () => {
  return (
    <div className="flex border-r border-gray-400">
      <CalendarCellBox>
        <div className="text-red-500 p-2">Sun</div>
      </CalendarCellBox>
      <CalendarCellBox>
        <div className="p-2">Mon</div>
      </CalendarCellBox>
      <CalendarCellBox>
        <div className="p-2">Tue</div>
      </CalendarCellBox>
      <CalendarCellBox>
        <div className="p-2">Wed</div>
      </CalendarCellBox>
      <CalendarCellBox>
        <div className="p-2">Thu</div>
      </CalendarCellBox>
      <CalendarCellBox>
        <div className="p-2">Fri</div>
      </CalendarCellBox>
      <CalendarCellBox>
        <div className="text-blue-500 p-2">Sat</div>
      </CalendarCellBox>
    </div>
  );
};
