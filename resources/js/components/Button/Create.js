import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';


export default function Create(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to={props.url}
    >
      Create
    </Button>
  );
}
