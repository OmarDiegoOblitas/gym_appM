import React from 'react';
import {Box, Typography,Stack} from "@mui/material";
import Logo from '../assets/images/Logo-1.png'
import Image from "next/image";

const Footer = () => {
    return (
       <Box mt='80px' bgcolor='#fff3f4'>
           <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
               <Image src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
               <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
                   Made with ❤️ by Omar Diego
               </Typography>
           </Stack>
       </Box>
    );
};

export default Footer;
