import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "../redux/balanceSlice";

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance.value);

  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Balance: {balance}</p>
      {
        <input
          type="number"
          value={value}
          onChange={e => setValue(Number(e.target.value))}></input>
      }
      <button onClick={() => dispatch(deposit(value))}>Deposit credits</button>
      <button onClick={() => dispatch(withdraw(value))}>
        Withdraw credits
      </button>
    </div>
  );
}
