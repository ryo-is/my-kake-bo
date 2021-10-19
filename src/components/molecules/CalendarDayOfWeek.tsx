import { CalendarDayBox } from '@atoms/CalendarDayBox';

export const CalendarDayOfWeek = () => {
  return (
    <div className="flex border-r border-gray-400">
      <CalendarDayBox>
        <div className="text-red-500 p-2">Sun</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div className="p-2">Mon</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div className="p-2">Tue</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div className="p-2">Wed</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div className="p-2">Thu</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div className="p-2">Fri</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div className="text-blue-500 p-2">Sat</div>
      </CalendarDayBox>
    </div>
  );
};
