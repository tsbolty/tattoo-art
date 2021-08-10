import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  activeChat: {
    height: '100%',
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 20px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    height: '100%',
    overflowY: 'scroll',
  },
}));

export default useStyles;
