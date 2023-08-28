import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
// import { RootState } from "./redux/store";
// import { useSelector, useDispatch } from "react-redux"

function App() {
 
  // const {count} = useSelector((state : RootState) => state.counter);
  const {count} = useAppSelector((state) => state.counter);
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  return (
    <div className="mt-5">
      <div className="flex gap-6">

        <button className="border-2 border-green-500 rounded-md px-2 py-3" onClick={() => dispatch(increment())}>Increment</button>

        <div>{count}</div>

        <button className="border-2 border-red-500 rounded-md px-2 py-3" onClick={() => dispatch(decrement())}>Decrement</button>

        <button className="border-2 border-blue-500 rounded-md px-2 py-3" onClick={() => dispatch(incrementByAmount(5))}>Increment By Value</button>

      </div>
    </div>
  )
}

export default App;



