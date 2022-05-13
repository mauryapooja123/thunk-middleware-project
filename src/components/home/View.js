import React from "react";
import { useSelector } from "react-redux";

function View() {
  const res = useSelector((state) => state.handle.register);
  console.log(res, "ppppppp");
  return (
    <>
      <p> show Data</p>
      <p> {res.firstname}</p>
      <p> {res.lastname}</p>
      <p> {res.email}</p>
      <p> {res.password}</p>
    </>
  );
}
export default View;
