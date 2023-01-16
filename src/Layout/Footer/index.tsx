import * as React from "react";
import { Box } from "@mui/material";
import { Footerstyles } from "./Foooter.styles";

const Footer = () => {
  return (
    <Footerstyles>
      <Box id="footer">
        <p>Copyright © 2023 bant.org.uk All Rights Reserved.</p>
        {/* <ul>
                    <li className="">
                        <a href="#">About</a>
                    </li>
                    <li className="">
                        <a href="#">Personalised Nutrition</a>
                    </li>
                    <li className="">
                        <a href="#">Resources</a>
                    </li>
                    <li className="">
                        <a href="#">Connect</a>
                    </li>
                    <li className="">
                        <a href="#">Media & News</a>
                    </li>
                    <li className="">
                        <a href="#">Contact</a>
                    </li>
                </ul> */}
      </Box>
    </Footerstyles>
  );
};

export default Footer;
