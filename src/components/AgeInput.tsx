import React, { useState } from "react";

interface AgeInputProps {
  onSubmit: (data: {
    name: string;
    ageInMonths: number;
    wakeUpTime: string;
  }) => void;
}

const AgeInput: React.FC<AgeInputProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | "">(0);
  const [wakeUpTime, setWakeUpTime] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age && wakeUpTime) {
      onSubmit({ name, age, wakeUpTime });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Baby's Name: </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='age'>Baby's Age (in months): </label>
        <input
          type='number'
          id='age'
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          min='0'
          required
        />
      </div>
      <div>
        <label htmlFor='wakeUpTime'>Wake Up Time: </label>
        <input
          type='time'
          id='wakeUpTime'
          value={wakeUpTime}
          onChange={(e) => setWakeUpTime(e.target.value)}
          required
        />
      </div>
      <button type='submit'>Generate Schedule</button>
    </form>
  );
};

export default AgeInput;
