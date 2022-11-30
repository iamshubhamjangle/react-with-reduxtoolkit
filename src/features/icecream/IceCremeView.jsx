import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IceCremeView = () => {
  const icecremes = useSelector((store) => store.icecream.numOfIcecreme);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of IceCremes: {icecremes}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCreme</button>
      <button onClick={() => dispatch(restocked(3))}>Restock IceCreme</button>
    </div>
  );
};

export default IceCremeView;
