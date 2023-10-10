import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { Box, Grid, Avatar, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Divider } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';

const CompanyCard = ({ name, icon, establishments }) => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 2 }}>
            <Grid container direction="column" className="list-container">
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item>
                            <MainCard border={true} content={false} elevation={5}>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{ py: 1, px: 2 }}>
                                    <Typography variant="h4" mr={2}>
                                        {name}
                                    </Typography>
                                    <Avatar
                                        src={icon}
                                        sx={{
                                            ...theme.typography.mediumAvatar,
                                            cursor: 'pointer'
                                        }}
                                        aria-haspopup="true"
                                        color="inherit"
                                    />
                                </Box>
                                <Divider />
                                <FormControl sx={{ display: 'block', py: 1, px: 2 }}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        {establishments.map((establishment) => {
                                            return (
                                                <FormControlLabel
                                                    value={establishment.id}
                                                    control={<Radio sx={{ p: 0 }} />}
                                                    label={establishment.name}
                                                    labelPlacement="start"
                                                    key={`radio_establishment_${establishment.id}`}
                                                    sx={{ display: 'flex', justifyContent: 'space-between', margin: 0, mt: '10px' }}
                                                />
                                            );
                                        })}
                                    </RadioGroup>
                                </FormControl>
                            </MainCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

CompanyCard.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    establishments: PropTypes.array
};

export default CompanyCard;
