import Counter from "./components/Counter";

import initialData from "../data.js";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState(initialData);

  const handleIncrement = (id) => {
    setCounters((prev) => {
      const newCounters = [...prev];
      const index = newCounters.findIndex((c) => c.id === id);
      if (index !== -1) {
        newCounters[index] = {
          ...newCounters[index],
          value: newCounters[index].value + 1,
        };
      }

      return newCounters;
    });
  };
  const handleDecrement = (id) => {
    setCounters((prev) => {
      const newCounters = [...prev];
      const index = newCounters.findIndex((c) => c.id === id);

      if (index !== -1) {
        newCounters[index] = {
          ...newCounters[index],
          value: newCounters[index].value - 1,
        };
      }

      return newCounters;
    });
  };

  const total = counters.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5 bg-gray-100">
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.value}
          onIncrement={() => handleIncrement(counter.id)}
          onDecrement={() => handleDecrement(counter.id)}
        />
      ))}
      <div className="flex flex-col items-center justify-center bg-white w-[300px] py-5 text-[15px] font-bold">
        {total}
      </div>
    </div>
  );
}

export default App;
