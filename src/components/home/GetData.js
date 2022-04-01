import React from "react";
import { useSelector } from "react-redux";

function GetData() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <p>Data</p>
      <p>{count}</p>
    </>
  );
}
export default GetData;
