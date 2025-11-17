import { Paper, TextField, Button, Grid } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginBlogger } from "../../services/blogger";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const signin = async () => {
    try {
      const result = await loginBlogger(email, password);
      console.log("Testing ", result);
      if (result.status) {
        localStorage.setItem("token", JSON.stringify(result.data.token));
        setUser({
          name: result.data.full_name,
          email: result.data.email,
          mobile: result.data.phone_no,
        });
        toast.success(`Hi ${result.data.full_name}! Welcome to BlaBla Blogs😊`);
        navigate("/blog/home");
      } else {
        toast.error(result.error);
        navigate("/");
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
          <div style={{ fontWeight: 600, fontSize: "20px" }}>Sign in</div>
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

          <Button variant="contained" onClick={signin}>
            Sign in
          </Button>

          <div>
            Don't have an account ?{" "}
            <Link to={"/register"} style={{ textDecoration: "none" }}>
              Register
            </Link>
          </div>
        </Grid>
      </Paper>
    </div>
  );
}

export default Login;
