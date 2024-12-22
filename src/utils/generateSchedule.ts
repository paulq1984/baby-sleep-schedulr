import sleepSchedules from "../data/sleepSchedules";

export const generateSchedule = (ageInMonths: number, wakeUpTime: string) => {
  const schedule = sleepSchedules.find(
    (item) => item.ageInMonths === ageInMonths
  );

  if (!schedule) {
    return { error: "No schedule found for this age!" };
  }

  const { naps, wakeTime, sleepTime } = schedule;

  // Convert wake-up time to a Date object
  const wakeUpDate = new Date(`1970-01-01T${wakeUpTime}`);
  const napTimes = Array.from({ length: naps }, (_, i) => {
    const napStart = new Date(wakeUpDate);
    napStart.setMinutes(wakeUpDate.getMinutes() + (i + 1) * wakeTime);
    return napStart.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  });

  return {
    napTimes,
    bedtime: sleepTime,
  };
};
