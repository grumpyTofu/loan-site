import { Grid, Card, Typography } from "@mui/material";

const Root: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={11}>
        <Card>
          <Typography>Loan Application</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Root;