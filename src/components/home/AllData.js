import React from "react";
import { useSelector } from "react-redux";

function AllData() {
  const res = useSelector((state) => state.handle.register);
  console.log(res, "hello");
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
export default AllData;
