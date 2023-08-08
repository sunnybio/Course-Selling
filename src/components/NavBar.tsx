import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const NavBar = () => {
    const navigate = useNavigate();


    return <>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 5
        }}>
            <Button variant="text" color="primary" onClick={() => {
                navigate("/")
            }}>

                <Typography variant="h6" color="#0057d3" sx={{ fontWeight: "bold" }}>Coursera</Typography> </Button>
            <div>
                <Button style={{ margin: 3 }} variant="contained" size="small" onClick={() => {
                    navigate("/signup")
                }}>SignUp</Button>
                <Button variant="contained" size="small" onClick={() => { navigate("/signin") }}>SignIn</Button>
            </div>
        </div>

    </>
};

export default NavBar;