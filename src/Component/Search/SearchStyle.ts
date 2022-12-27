import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles() (
    (theme) => {
       return{
        searchContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
            }
        },
        input:{
            // color: theme.palette.mode === 'light' && 'black',
            [theme.breakpoints.down('sm')]: {
               marginTop: '-10px',
               marginBottom: '10px',
              
            },
            filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
            color: theme.palette.mode === 'light' ? 'light' : 'white',
        }
       }
        
    }
);

export default useStyles;