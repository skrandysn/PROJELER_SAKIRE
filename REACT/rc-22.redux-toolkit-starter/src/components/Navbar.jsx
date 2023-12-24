import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //todo user bilgilerini global state'ten al
  // const user = true;
  // const user = useSelector((state)=>state.auth.user);
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const handleLogout = () => {
    //todo user global state verilerini sil
    navigate("/login");
    dispatch(clearUser());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Eypes News
          </Typography>

          {!user?.email && !user?.password && (
            <Button onClick={() => navigate("/login")} color="inherit">
              Login
            </Button>
          )}
          {user?.email && user?.password && (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
