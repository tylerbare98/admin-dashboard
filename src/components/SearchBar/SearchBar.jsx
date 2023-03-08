import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField, IconButton, Typography } from '@material-ui/core';
import Search from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    borderRadius: theme.shape.borderRadius,
  },
  searchInput: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
}));

export default function SearchBar() {
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
    </div>
  );
}