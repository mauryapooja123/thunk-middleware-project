import React from "react";
import { useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";
function AllData() {
  //const navigate = useNavigate();
  const res = useSelector((state) => state.handle.register);
  console.log(res, "hello");
  return (
    <>
      <p> show Data</p>
      <p> {res.firstname}</p>
      <p> {res.lastname}</p>
      <p> {res.email}</p>
      <p> {res.password}</p>

      {/* <button type="click" onClick={() => navigate("viewdata")}>
        view Data
      </button> */}
    </>
  );
}
export default AllData;
