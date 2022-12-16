import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
    (theme) => {
    return {
        movie: {
            padding: '10px',
        },
        link: {
            alignItems: 'center',
            fontWeight: 'bolder',
            textDecoration: 'none',
            [theme.breakpoints.up('xs')]:{
                display: 'flex',
                flexDirection: 'column',
            },
            '&:hover': {
                cursor: 'pointer',
                textDecoration: 'none',
            },

        },
        image: {
            borderRadius: '20px',
            height: '300px',
            marginBottom: '10px',
            '&:hover': {
                transform: 'scale(1.09)',
            },
        },
        title: {
            color: theme.palette.text.primary,
            textOverflow: 'ellipsis',
            width: '240px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            marginTop: '10px',
            marginBottom: 0,
            textAlign: 'center',
        }
    };
  });

  export default useStyles;
