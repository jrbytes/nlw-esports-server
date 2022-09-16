// 1080 -> 18:00
export function convertMinutesToHourString(timeInMinutes: number) {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;

  const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

  return timeString;
}