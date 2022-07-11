import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

const colorTool = createTheme({
    palette: {
        primary: {
            main: '#fe4279', //메인 분홍이
            light: '#828DF8',
            dark: '#3832A0',
            contrastText: '#ffebee'
        },
    }
});

function Title(props) {
    return (
        <Typography theme={colorTool} component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}

Title.propTypes = {
    children: PropTypes.node,
};

export default Title;