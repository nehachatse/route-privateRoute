import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Form, Input, Button } from "./LoginForm.styled";

export default function LoginForm() {
  const [formData, setFormData] = React.useState({ uname: "", pass: "" });
  const { handleAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.currentTarget;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateUser = async (e) => {
    e.preventDefault();
    if (
      formData.uname === "" ||
      formData.uname.length < 0 ||
      formData["pass"].length < 0 ||
      formData.pass === ""
    ) {
      alert("Alle fields are required!!!");
    } else {
      await handleAuth(formData.uname);
      navigate("/dashboard");
    }
  };

  return (
    <Form>
      <div style={{ marginBottom: "1.5rem" }}>
        <Input
          type="text"
          name="uname"
          value={formData.uname}
          onChange={handleChange}
          placeholder="Enter Username"
        />
      </div>
      <div>
        <Input
          type="password"
          name="pass"
          value={formData.pass}
          onChange={handleChange}
          placeholder="Enter Password"
        />
      </div>
      <Button onClick={(e) => validateUser(e)}>LOGIN</Button>
    </Form>
  );
}
