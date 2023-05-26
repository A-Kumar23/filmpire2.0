import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
    (theme) => {
        return {
            searchContainer: {
                [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }
            },
            input: {
                color: theme.palette.mode === 'light' ? 'dark' : 'white',
                filter: theme.palette.mode === 'light' ? 'dark' : 'white',
                // color: theme.palette.mode === 'light' && 'black',
            }
        };
    });

export default useStyles;