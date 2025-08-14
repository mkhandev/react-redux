import { Button } from "@/components/ui/button";

const Count = ({ bgColor, btnText, handelClick }) => {
  return (
    <Button
      onClick={handelClick}
      className={`text-white text-[15px] p-3 cursor-pointer ${
        bgColor ? bgColor : "bg-blue-500"
      }`}
    >
      {btnText}
    </Button>
  );
};

export default Count;
