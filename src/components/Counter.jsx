import { Card, CardContent } from "@/components/ui/card";
import Count from "./Count";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <Card className="bg-white w-[300px]">
        <CardContent>
          <div className="font-bold text-center text-[20px] mb-3">{count}</div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Count btnText="Increment" handelClick={onIncrement} />
            <Count
              bgColor="bg-red-500"
              btnText="Decrement"
              handelClick={onDecrement}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Counter;
