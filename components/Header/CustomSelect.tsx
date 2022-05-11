import Select from '@mui/material/Select';
import { FC, memo } from 'react';

const commonStyles = {
    border: 0,
    m: 1,
    width: '5rem',
    height: '5rem',
  };

const CustomSelect: FC = memo(() => {
    return (
            <Select sx={{ ...commonStyles, border: 0 }}
    );
});

export default CustomSelect;