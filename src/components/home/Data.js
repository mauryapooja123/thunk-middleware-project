import React from "react";
import { useSelector } from "react-redux";

function Data() {
  const user = useSelector((state) => state.register.register);
  return (
    <div>
      <p> Data</p>
      <p>{user[0].number}</p>
      <p>{user[0].email}</p>
      <p>{user[0].name}</p>
      <p>{user[0].number}</p>
      {/* <button>Edit</button> */}

      {console.log(user[0].name, "pppppppp")}
      {console.log(user, "llll")}
    </div>
  );
}
export default Data;
