import { Box, Button, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { auto } from '@popperjs/core'
import { useNavigate } from 'react-router'

const LandingPage = () => {
    const navigate = useNavigate()
    return <>
        <div style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}>
            <Box sx={{ bgcolor: '#cfe8fc', height: "80vh", display: "flex" }}>
                <div style={{ margin: 40 }}>
                    <Typography variant="h4" color="initial" style={{ marginBottom: 20 }}>

                        Unlimited access to 7,000+ world-class courses, hands-on projects, and job-ready certificate programs—all included in your subscription
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => { navigate("/signup") }}>
                        SignUp
                    </Button>
                </div>
                <div style={{ maxHeight: "100%", maxWidth: auto, alignContent: "center", padding: 20 }}>
                    <img style={{ maxHeight: "80%", maxWidth: auto }} src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/e80434394ca08796a7fb9303a331720a.png?auto=format%2Ccompress&dpr=1&w=476&h=429" alt="" />

                </div>





            </Box>
        </div>

    </>
}
export default LandingPage