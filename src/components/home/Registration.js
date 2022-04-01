import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/reducer/Submit";

const Registration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  console.log(data, "ddddd");
  const user = useSelector((state) => state.register.register);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(data));
    navigate("/data");
  };

  return (
    <div>
      {console.log(user, "jjjjjjjjjj")}
      <form>
        <p> Name</p>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        ></input>
        <p> email</p>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        ></input>
        <p> number</p>
        <input
          type="number"
          name="number"
          placeholder="Enter number"
          onChange={handleChange}
        ></input>
        <p> passsword</p>
        <input
          type="password"
          name="passsword"
          placeholder="Enter passsword"
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
