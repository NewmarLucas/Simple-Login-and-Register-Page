export const styles = {
  container: {
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
  bottomContent: {
    position: 'absolute',
    bottom: 0,
    height: 160,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}