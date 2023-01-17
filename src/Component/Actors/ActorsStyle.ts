import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
    (theme) => {
    return {
        poster:{
            borderRadius: '25px',
            boxShadow: '0.5em 0.5em 1em rgb(64, 64, 70)',
            maxWidth: '80%',
            objectFit: 'cover',
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
        container:{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }
    };
  });

  export default useStyles;
