import Counter from "./components/Counter";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counters/countersSlice.js";
import Posts from "./components/Posts.jsx";

function App() {
  //const [counters1, setCounters] = useState(initialData);

  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  const total = counters.reduce((acc, item) => acc + item.value, 0);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-5 bg-gray-100">
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

        <div>
          <Posts />
        </div>
      </div>
    </>
  );
}

export default App;
