import { Grid } from '@mui/material';
import Button from './Button';
import RemoteTwoStateComponent from './RemoteTwoStateComponent';

export default function() {
  return(
    <Grid container>
      <Grid item xs={12}><h2>Remote One</h2></Grid>
      <Grid item xs={12}>
        <Button />
      </Grid>
      <Grid item xs={12}>
        <RemoteTwoStateComponent />
      </Grid>
    </Grid>
  )
}