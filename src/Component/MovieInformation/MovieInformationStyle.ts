import { height } from '@mui/system';
import { makeStyles } from 'tss-react/mui';



const useStyles = makeStyles()(
    (theme) => {
    return {
        
        containerSpaceAround: {
            display: 'flex',
            justifyContent: 'space-around',
            margin: '10px 0 !important',
            [theme.breakpoints.down('sm')]:{
                flexDirection: 'column',
                flexWrap: 'wrap',
            }
        },
        poster:{
            borderRadius: '25px',
            boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
            width: '80%',
            [theme.breakpoints.down('md')]:{
                margin: '0 auto',
                width: '50%',
                // height: '350px',
            },
            [theme.breakpoints.down('sm')]:{
                margin: '0 auto',
                width: '100%',
                // height: '350px',
                marginBottom: '30px',
            }
        },
        genreContainer: {
            margin: '10px 0 !important',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
        },
        genreImage: {
            marginRight: '10px',
            filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'invert(0)',
        },
        links: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            [theme.breakpoints.down('sm')]:{
                padding: '0.5em 1em'
            }
        },
        castImage: {
            width: '100%',
            maxWidth: '7em',
            height: '8em',
            objectFit: 'cover',
            borderRadius: '10px',
        },
        textDecorationNone: {
            textDecoration: 'none',
        },
        buttonContainer:{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            [theme.breakpoints.down('sm')]:{
                flexDirection: 'column',
            }
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
        },
        video: {
            width: '50%',
            height: '50%',
            [theme.breakpoints.down('sm')]:{
                width: '90%',
                height: 'auto'
            }
        }
    };
  });

  export default useStyles;