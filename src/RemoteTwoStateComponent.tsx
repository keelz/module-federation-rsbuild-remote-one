import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

export default function() {
  const c = useSelector((s: RemoteTwo.State) => s.remote_two.counter.value);
  return (
    <p>Remote Two: {c}</p>
  );
}
