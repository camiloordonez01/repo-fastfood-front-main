import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { Grid } from '@mui/material';

import { gridSpacing } from 'store/constant';

const Panel = () => {
    const { accessToken } = useSelector((state) => state.auth);

    useEffect(() => {
        console.log(accessToken);
    }, [accessToken]);
    return (
        <Grid container spacing={gridSpacing}>
            <h1>Hola</h1>
        </Grid>
    );
};

export default Panel;
