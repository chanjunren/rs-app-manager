import { makeStyles } from '@material-ui/styles';
export const NewProductSectionStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',           
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
    background: '#FFF',          
    maxWidth: '100%',
  },
  header: {
    padding: '30px',
    color: 'rgba(0, 0, 0, 1)'
  },
  appsContainer: {
    borderWidth: '1px',
    borderRadius: '10px',
    borderStyle: 'solid',
    borderColor: 'rgba(200, 200, 200, 0.12)',
    background: '#f0f0f08d',
  },
  appCard: {
    padding: '15px',
  },
  description: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)'
  },
  contact: {
    textAlign: 'center',
    paddingBottom: '30px'
  }
}));

export const NewProductCardStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    background: 'rgba(0, 0, 0, .5)',
    boxSizing: 'border-box', // ✅ important
  },
  media: {
    height: 0,
    paddingTop: '56.25%', //16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#fff',
    height: '70px',
    width: '70px',
    padding: '15px',
    objectFit: 'contain',
  },
}));
