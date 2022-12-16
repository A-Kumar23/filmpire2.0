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
            // filter: theme.palette.mode === 'light' && 'invert(1)',
            
            [theme.breakpoints.down('sm')]: {
               marginTop: '-10px',
               marginBottom: '10px',
              
            },
            filter: theme.palette.mode === 'light' ? 'light' : 'invert(1)',
            color: theme.palette.mode === 'light' ? 'light' : 'black',
        }
       }
        
    }
);

export default useStyles;