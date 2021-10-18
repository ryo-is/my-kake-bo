import { CalendarDayBox } from '@atoms/CalendarDayBox';

export const CalendarDayOfWeek = () => {
  return (
    <div className="flex border-r border-gray-400">
      <CalendarDayBox>
        <div className="text-red-500">Sun</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div>Mon</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div>Tue</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div>Wed</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div>Thu</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div>Fri</div>
      </CalendarDayBox>
      <CalendarDayBox>
        <div className="text-blue-500">Sat</div>
      </CalendarDayBox>
    </div>
  );
};
