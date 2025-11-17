import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { registerBlogger } from "../../services/blogger";
import { Grid, Paper, TextField, Button } from "@mui/material";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      const result = await registerBlogger(name, mobile, email, password);
      console.log(result);

      if (result.status) {
        toast.success("Register successfully");
        navigate("/");
      } else {
        toast.error("Something went wronge");
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={2} style={{ borderRadius: "12px" }}>
        <Grid
          container
          spacing={2}
          style={{ display: "flex", flexDirection: "column", padding: "2rem" }}
        >
          <div style={{ fontWeight: 600, fontSize: "20px" }}>Sign up</div>

          <TextField
            id="name"
            label="Full name"
            type="text"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <TextField
            id="mobile"
            label="Phone no"
            type="text"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />

          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            size="small"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button variant="contained" onClick={signup}>
            Sign in
          </Button>

          <div>
            Already registered?{" "}
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Login
            </Link>
          </div>
        </Grid>
      </Paper>
    </div>
  );
}

export default Register;
