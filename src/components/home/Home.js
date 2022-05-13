import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrement, increment } from "../../store/reducer/counterSlice";

function Home() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Increment and Decrement counter</p>

      <div className="container">
        <button onClick={() => dispatch(increment())}>+</button>
        <input id="counting" value={count}></input>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        <button onClick={() => navigate("/getdata")}>Click</button>
      </div>
    </div>
  );
}
export default Home;
