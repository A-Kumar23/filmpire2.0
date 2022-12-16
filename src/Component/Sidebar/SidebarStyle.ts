import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
    (theme) => {
    return {
       imageLink: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10% 0',
        textDecoration: 'none',
       },
       image: {
          width: '70%'
       },
       links: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
       },
       genreImage:{
        filter: theme.palette.mode === 'light' ? 'light' : 'invert(1)',
       }
    };
  });

  export default useStyles;