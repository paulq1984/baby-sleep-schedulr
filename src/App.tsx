import React, { useState } from "react";
import { generateSchedule } from "./utils/generateSchedule";
import AgeInput from "./components/AgeInput";
import ScheduleDisplay from "./components/ScheduleDisplay";

const App: React.FC = () => {
  const [schedule, setSchedule] = useState<{
    name: string;
    napTimes: string[];
    bedtime: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = (data: {
    name: string;
    age: string;
    wakeUpTime: string;
  }) => {
    const result = generateSchedule(data.age, data.wakeUpTime);
    if ("error" in result) {
      setError(error);
      setSchedule(null);
    } else {
      setSchedule({ ...result, name: data.name });
      setError(null);
    }
  };

  return (
    <div>
      <h1>Baby Sleep Scheduler</h1>
      <AgeInput onSubmit={handleGenerate} />
      <ScheduleDisplay schedule={schedule} error={error} />
    </div>
  );
};

export default App;
