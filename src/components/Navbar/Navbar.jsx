import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField, IconButton, Typography } from '@material-ui/core';
import Language from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.5, 1),
  },
  searchInput: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        className={classes.searchInput}
        variant="outlined"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <IconButton>
        <Language />
      </IconButton>
      <Typography variant="body1">English</Typography>
    </div>
  );
}