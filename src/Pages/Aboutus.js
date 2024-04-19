import React from "react";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//import ScrollAnimation from 'react-animate-on-scroll';
//import AboutUS from "./../Asserts/Images/AboutUS.jpg";
export default function Aboutus() {
  const styles = {
    main: {
      //backgroundImage:`url(${AboutUS})`,
      //backgroundColor:"lightgrey",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      height: "100%",
      padding: "20px",
      borderRadius: "45px 45px 45px 45px",
    },
    header: {
      color: "Black",
    },
    paraText: {
      fontSize: 20,
      color: "#306844",
      fontWeight: "bold",
      color: "Black",
    },
  };
  return (
    <div>
      <Navbar />
      <Box m={2} style={styles.main}>
        <div>
          <Typography style={styles.header} variant="h3" gutterBottom>
            About us
          </Typography>

          <Box mt={2}>
            <Typography style={styles.paraText} variant="h4" gutterBottom>
		Students of KL University 2020- 2024 batch : 
            </Typography>
          </Box>
	<Box m={2}><Typography style={styles.paraText} variant="h6" gutterBottom>
		Manichand - 2010030455 
            </Typography>
	</Box>
	<Box m={2}>
<Typography style={styles.paraText} variant="h6" gutterBottom>
		Sreevarun - 2010030451
            </Typography>	
</Box>
	<Box m={2}>
	<Typography style={styles.paraText} variant="h6" gutterBottom>
		Jashwanth reddy - 2010030455
            </Typography>
	</Box>
        </div>
      </Box>
    </div>
  );
}
