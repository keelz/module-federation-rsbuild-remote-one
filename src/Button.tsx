import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { increment } from './features/counter.slice';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export default function ButtonUsoage() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.remote_one.counter.value);
  const handleClick = () => dispatch(increment());

  return (
    <Button onClick={handleClick}>increment</Button>
  );
}
