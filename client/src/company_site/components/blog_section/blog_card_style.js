import { makeStyles } from '@material-ui/styles';

export const useBlogStyles = makeStyles((theme) => ({
  root: {
    padding: '24px',
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
  },
  mapContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    padding: '30px',
  },
}));

export const useBlogCardStyles = makeStyles((theme) => ({
  blogButton: {
    display: 'flex',
    alignContent: 'center',
    borderRadius: '30px',
    textDecoration: 'none',
    backgroundColor: '#424242',
    border: 'transparent',
    cursor: 'pointer',
    transition: "border-color 0.5s, background-color 0.5s",
    overflow: 'hidden',
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      backgroundColor: '#000',
    },
    '@media (max-width: 570px)': {
      flexDirection: 'column',
    }
  },
  blogItem: {
    width: '100%',
  },
  gradient: {
    overflow: 'hidden',
    maxWidth: '20vw',
    '@media (max-width: 570px)': {
      maxWidth: '100%',
    }
  },
  blogImage: {
    width: '100%',
    minHeight: '100%',
    objectFit: 'cover',
  },
  blogText: {
    textAlign: 'left',
    textOverflow: 'clip',
  },
  blogDescription: {
    padding: '20px'
  }
}));