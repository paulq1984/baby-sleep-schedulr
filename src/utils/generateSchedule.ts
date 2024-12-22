import sleepSchedules from "../data/sleepSchedules";

const parseAge = (age: string): number | null => {
  const match = age.match(/(\d+)\s*months?/i);
  return match ? parseInt(match[1], 10) : null;
};

export const generateSchedule = (age: string, wakeUpTime: string) => {
  const ageInMonths = parseAge(age);
  if (ageInMonths === null) {
    return { error: "Invalid age format. Please use 'X months'." };
  }

  const schedule = sleepSchedules.find(
    (item) => item.ageInMonths === ageInMonths
  );

  if (!schedule) {
    return { error: "No schedule found for this age!" };
  }

  const { naps, wakeTime, sleepTime } = schedule;

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
