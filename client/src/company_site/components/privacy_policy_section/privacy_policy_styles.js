import { makeStyles } from "@material-ui/styles";
const PrivacyPolicyStyles = makeStyles((theme) => ({
  privacyPolicyContainer: {
    width: '100%',
    padding: '20px',
    alignContent: 'left',
    justifyItems: 'left',
    textAlign: 'center',
    '@media (min-width: 940px)': {
      paddingLeft: '20vw',
      paddingRight: '20vw',
    }
  },
  privacyPolicyTitle: {
    paddingTop: '30px',
    fontWeight: 'bold',
  },
  privacyPolicyHeader: {
    paddingBottom: '10px',
  },
  privacyPolicyText: {
    paddingBottom: '40px',
    textAlign: 'justify'
  },
  privacyPolicyImage: {
    // width: '100%',
    maxWidth: '100%', 
    borderRadius: '20px'
  },
  doubleImage: {
    // height: '100%',
    maxWidth: '100%',
    borderRadius: '20px'
  },
  DoubleImageContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  WebsiteLink: {
    color: '#01bf71',
    textDecoration: 'underline',
    cursor: 'pointer',
    '&:hover': {
      color: '#0c7634ff',
      textDecoration: 'underline',
    },
  },
  ExtraInfo:{
    fontSize: '16px'
  }
}));

export default PrivacyPolicyStyles;