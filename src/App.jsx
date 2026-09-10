import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

const App = () => {
  let dispatch = useDispatch();
  let { count } = useSelector((store) => store.counter);
  return (
    <div className="bg-black h-screen w-screen text-white text-6xl flex flex-col justify-center items-center gap-6">
      <h1>My Count is {count}</h1>
      <button
        className="border py-3 px-[6%] rounded-2xl cursor-pointer hover:bg-white hover:text-black"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="border py-3 px-[6%] rounded-2xl cursor-pointer hover:bg-white hover:text-black"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
