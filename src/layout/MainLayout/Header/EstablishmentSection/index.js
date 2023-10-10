import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Chip, ClickAwayListener, Divider, Grid, Paper, Popper, Stack, Typography } from '@mui/material';

// ui-component
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';

// components
import CompanyCard from './CompanyCard';

const EstablishmentSection = () => {
    const theme = useTheme();

    const { companies } = useSelector((state) => state.auth);

    const [open, setOpen] = useState(false);

    const [company, setCompany] = useState('');
    const [establishment, setEstablishment] = useState('');
    const [icon, setIcon] = useState('');

    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    // useEffect(() => {
    //     setCompany(companies[0].name);
    //     setEstablishment(companies[0].establishments[0].name);
    //     setIcon(companies[0].logo);
    // }, [companies]);
    return (
        <div>
            <Chip
                sx={{
                    height: '48px',
                    alignItems: 'center',
                    transition: 'all .2s ease-in-out',
                    borderRadius: '8px',
                    borderColor: theme.palette.secondary.light,
                    backgroundColor: theme.palette.secondary.light,
                    px: '8px',
                    mr: '24px',
                    '&[aria-controls="menu-list-grow"], &:hover': {
                        borderColor: theme.palette.secondary.main,
                        background: `${theme.palette.secondary.main}!important`,
                        color: theme.palette.secondary.light,
                        '& svg': {
                            stroke: theme.palette.secondary.light
                        }
                    },
                    '& .MuiChip-label': {
                        lineHeight: 1,
                        padding: '11px',
                        borderRadius: '2px'
                    },
                    '& .MuiTypography-root': {
                        color: open ? theme.palette.secondary.light : theme.palette.text
                    },
                    '&:hover .MuiTypography-root': {
                        color: theme.palette.secondary.light
                    }
                }}
                icon={
                    <Grid container direction="column" className="list-container">
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item>
                                    <Typography sx={{ lineHeight: 1 }} variant="subtitle1">
                                        {company}
                                    </Typography>
                                    <Typography variant="subtitle2">{establishment}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                }
                label={
                    <Avatar
                        src={icon}
                        sx={{
                            ...theme.typography.mediumAvatar,
                            cursor: 'pointer'
                        }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        color="inherit"
                    />
                }
                variant="outlined"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="primary"
            />
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 14]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                                    <Box sx={{ px: 2, py: 2 }}>
                                        <Stack>
                                            <Stack direction="row" spacing={0.5} alignItems="center">
                                                <Typography variant="h3">Mis empresas</Typography>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                    <Divider />
                                    <PerfectScrollbar style={{ height: '100%', overflowX: 'hidden' }}>
                                        {companies.map((company) => {
                                            return (
                                                <CompanyCard
                                                    name={company.name}
                                                    icon={company.logo}
                                                    establishments={company.establishments}
                                                    key={`card_company_${company.uid}`}
                                                />
                                            );
                                        })}
                                    </PerfectScrollbar>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </div>
    );
};

export default EstablishmentSection;
