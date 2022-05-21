export const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    width: '80%',
    height: 600,
    maxWidth: 960,
    display: 'flex',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    borderRadius: '2rem',
    overflow: 'hidden',
  },
  section1Title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
      objectFit: 'cover',
      width: 80,
      height: 80
    }
  },
  content1: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'relative',
  },
  content2: {
    width: '50%',
    position: 'relative',
    '& img': {
      position: 'absolute',
      right: 0,
      left: 0,
      top: 0,
      objectFit: 'cover',
      width: '100%',
      height: 440
    }
  },
  section1Container: {
    display: 'flex',
    height: '70%',
    width: 'calc(100% - 6rem)',
    padding: '0 3rem',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  inputContent: {
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  submitButton: {
    borderRadius: '2rem'
  },
  registerButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    position: 'absolute',
    bottom: 15,
    '& button': {
      marginLeft: '5px'
    }
  },
  section2TextContainer: {
    position: 'absolute',
    bottom: 0,
    height: 160,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}