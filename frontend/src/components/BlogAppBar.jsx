import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router";

export default function BlogAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h3>BlaBla Blogs</h3>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                textDecoration: "none",
                listStyleType: "none",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "50%",
              }}
            >
              <li
                style={{
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Link to={"/blog/home"}>Home</Link>
              </li>
              <li
                style={{
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                <Link to={"/blog/blog"}>Add Blog</Link>
              </li>
              <li
                style={{
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Link to={"/blog/category"}>Add Category</Link>
              </li>
              <li
                style={{
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                  lineHeight: "45px",
                }}
              >
                <Link to={"/blog/myblogs"}>Add Category</Link>
              </li>
            </ul>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                color="inherit"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
                style={{ textDecoration: "none" }}
              >
                Logout
              </Button>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
