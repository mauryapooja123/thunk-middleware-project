import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../store/reducer/UserData";

function User() {
  const navigate = useNavigate();
  const res = useSelector((state) => state.handle.register);
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
    navigate("/alldata");
    console.log(user);
  };

  return (
    <div>
      {console.log(res, "pppppppppppp")}
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          onChange={handleChange}
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          onChange={handleChange}
          placeholder="Your last name.."
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email.."
          onChange={handleChange}
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password.."
          onChange={handleChange}
        />
        {/* <input type="submit" value="Submit" /> */}
        <button type="submit"> submit</button>
      </form>
    </div>
  );
}
export default User;
