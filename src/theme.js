import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Catamaran', 'sans-serif'].join(',')
    },
    palette: {
        primary: {
            main: '#008000'
        },
        secondary: {
            main: '#008078'
        },
        success: {
            main: '#008000'
        }
    }
});

theme.overrides = {
    MuiButton: {
        root: {
            borderRadius: '8px',
            textTransform: 'none',
            color: '#000000',
            fontSize: '16px'
        },
        contained: {
            backgroundColor: '#008000',
            color: '#000000',
            '&:hover': {
                backgroundColor: '#008000',
                boxShadow: 'none'
            }
        }
    },
    MuiTextField: {
        root: {
            'label + &': {
                marginTop: theme.spacing(3)
            },
            '& .MuiInputAdornment-root .MuiSvgIcon-root': {
                color: '#008078'
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderRadius: `8px`
                },
                '&.Mui-disabled': {
                    '& input': {
                        zIndex: 1
                    },
                    '& fieldset': {
                        border: 0,
                        background: 'gray'
                    }
                }
            },
            '& .MuiInputLabel-outlined': {
                color: '#008000'
            },
            '&:hover .MuiInputLabel-outlined': {
                color: '#008000'
            },
            '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#008000'
            },
            '& .MuiInputLabel-outlined.Mui-focused': {
                color: '#008000'
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#008000'
            }
        }
    },
    MuiRadio: {
        colorSecondary: {
            '&.Mui-checked': {
                color: theme.palette.primary.main
            }
        }
    },
    MuiTab: {
        root: {
            '& .MuiTab-wrapper': {
                alignItems: 'flex-start'
            }
        }
    },
    MuiSwitch: {
        colorSecondary: {
            '&.Mui-checked': {
                color: '#008000',
                '& + .MuiSwitch-track': {
                    backgroundColor: `${'#008000'} !important`
                }
            }
        }
    }
};

export default theme;
