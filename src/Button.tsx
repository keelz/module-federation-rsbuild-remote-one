import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const handleClick = () => console.warn('remote one, checking in');

export default function ButtonUsoage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={handleClick}>Remote One</Button>
      </Grid>
    </Grid>
  );
}
