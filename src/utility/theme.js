import { cyan } from '@material-ui/core/colors';
export default {
    palette: {
  
      primary: cyan,
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      }
  
    },
    typography:{
      userNextVariants:true
    },
  spreadIt:{
    form: {
      textAlign: 'center',
    },
    image: {
      width: '120px',
      height: '120px',
      margin: '10px auto 10px auto',
    },
    textFeild: {
      margin: '10px auto 10px auto'
    },
    pageTitle: {
      margin: '20px auto 20px auto'
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
      position: 'relative'
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem'
    },
    progress: {
      position: 'absolute'
    }
  },
  profileCss:{
    paper: {
      padding: 20
    },
    profile: {
      '& .image-wrapper': {
        textAlign: 'center',
        position: 'relative',
        '& button': {
          position: 'absolute',
          top: '80%',
          left: '70%'
        }
      },
      '& .profile-image': {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
      },
      '& .profile-details': {
        textAlign: 'center',
        '& span, svg': {
          verticalAlign: 'middle'
        },
        '& a': {
          color: '#00bcd4'
        }
      },
      '& hr': {
        border: 'none',
        margin: '0 0 10px 0'
      },
      '& svg.button': {
        '&:hover': {
          cursor: 'pointer'
        }
      }
    },
    buttons: {
      textAlign: 'center',
      '& a': {
        margin: '20px 10px'
      }
    }

  }
  };