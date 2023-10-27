import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../redux/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(""); // State to hold the input value
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const handleIncrement = () => {
    if (amount === "") {
      alert("Please provide the amount");
    } else {
      // Dispatch the incrementByAmount action with the value from the input field
      dispatch(incrementByAmount(Number(amount)));
      // Clear the input field after dispatching the action
      setAmount("");
    }
  }

  return (
    <div
      style={{ height: "70vh" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <div className="w-25 d-flex justify-content-center align-items-center border rounded p-5 flex-column">
        <h1 style={{ fontSize: "100px" }}>{count}</h1>
        <div className="d-flex justify-content-between w-100 mt-5">
          <button onClick={() => dispatch(decrement())} className="btn btn-warning">Decrement</button>
          <button onClick={() => dispatch(reset())} className="btn btn-danger">Reset</button>
          <button onClick={() => dispatch(increment())} className="btn btn-success">Increment</button>
        </div>
        <div className="d-flex mt-5">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)} // Update the 'amount' state
            style={{ backgroundColor: 'white', color: "black" }}
            type="text"
            placeholder="Enter the Amount to be Incremented"
          />
          <button onClick={handleIncrement} className="btn btn-primary ms-3">
            Incremented by amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
