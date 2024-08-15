import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

export default function() {
  const c = useSelector((s: RemoteTwo.State) => s.remote_two.counter.value);
  return (
    <Grid container>
      <Grid item xs={12}><p>Remote Two: {c}</p></Grid>
    </Grid>
  );
}
