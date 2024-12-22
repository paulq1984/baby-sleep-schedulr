import React from "react";

interface ScheduleDisplayProps {
  schedule: { name: string; napTimes: string[]; bedtime: string } | null;
  error?: string;
}

const ScheduleDisplay: React.FC<ScheduleDisplayProps> = ({
  schedule,
  error,
}) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (!schedule) {
    return null;
  }

  return (
    <div>
      <h2>{schedule.name}'s Sleep Schedule</h2>
      <ul>
        {schedule.napTimes.map((time, index) => (
          <li key={index}>
            Nap {index + 1}: {time}
          </li>
        ))}
      </ul>
      <p>Bedtime: {schedule.bedtime}</p>
    </div>
  );
};

export default ScheduleDisplay;
