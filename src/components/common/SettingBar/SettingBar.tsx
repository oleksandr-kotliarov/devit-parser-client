// Redux
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  changeOrder,
  setSearch,
  setSortBy,
} from '@/features/searchSettings/searchSettingsSlice';

// Components
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Styles
import styles from './SettingBar.module.scss';
import classNames from 'classnames';

function SettingBar() {
  const { sortBy, order, search } = useAppSelector(
    (state) => state.searchSettings
  );
  const dispatch = useAppDispatch();

  const changeSortBy = (event: SelectChangeEvent<string>) => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <div className={styles.mainContainer}>
      <Box display={'flex'} alignItems={'center'} gap={'20px'}>
        <FormControl className={styles.select}>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Sort By"
            onChange={changeSortBy}
          >
            <MenuItem value={'title'}>Title</MenuItem>
            <MenuItem value={'creator'}>Creator</MenuItem>
            <MenuItem value={'pubDate'}>Publish Date</MenuItem>
            <MenuItem value={'content'}>Content</MenuItem>
          </Select>
        </FormControl>
        <IconButton
          title="Change sorting order"
          onClick={() => {
            dispatch(changeOrder());
          }}
          className={classNames({ [styles.orderDesc]: order === -1 })}
        >
          <ArrowDownwardIcon />
        </IconButton>
      </Box>
      <TextField
        id="filled-basic"
        label="Search"
        variant="filled"
        placeholder="Search..."
        value={search}
        onChange={(event) => {
          dispatch(setSearch(event.target.value));
        }}
      />
    </div>
  );
}

export default SettingBar;
