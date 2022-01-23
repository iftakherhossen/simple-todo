import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <Typography sx={{ fontSize: '1.09em', fontWeight: 600 }}>
                Simple Todo Created by <a href="https://iftakher-hossen.vercel.app/" target="_blank" rel="noreferrer" className="Link">Iftakher Hossen</a>
            </Typography>
        </footer>
    );
};

export default Footer;