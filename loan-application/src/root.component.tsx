import { Container, Grid, Card, CardContent, CardActions, Typography, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { navigateToUrl } from "single-spa";

// How can I share this across MFEs
interface Applicant {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  loanAmount?: number | null;
  note?: string | null;
}

const Root: React.FC = () => {
  const { isSubmitting, dirty, touched, errors, values, handleSubmit, handleChange, handleReset, handleBlur } = useFormik<Applicant>({
    initialValues: { firstName: "", lastName: "", email: "", loanAmount: null, note: "" },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      navigateToUrl(`/success?firstName=${values.firstName}`);
    },
    // validationSchema: Yup.object().shape({
    //   title: Yup.string().min(2, 'Too Short!').max(80, 'Too Long!').required('Required'),
    //   description: Yup.string().min(2, 'Too Short!').max(1000, 'Too Long!').required('Required'),
    // }),
  });

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={11}>
          <Card>
            <CardContent>
              <Typography>Loan Application</Typography>
            </CardContent>
            <CardContent>
              <TextField
                autoFocus
                id="firstName"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                margin="normal"
                autoComplete="off"
                variant="outlined"
                // error={errors.title && touched.title ? true : false}
                // helperText={errors.title && touched.title && errors.title}
                label="First Name"
                fullWidth
              />
              <TextField
                autoFocus
                id="lastName"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                margin="normal"
                autoComplete="off"
                variant="outlined"
                // error={errors.title && touched.title ? true : false}
                // helperText={errors.title && touched.title && errors.title}
                label="Last Name"
                fullWidth
              />
              <TextField
                autoFocus
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                margin="normal"
                autoComplete="off"
                variant="outlined"
                // error={errors.title && touched.title ? true : false}
                // helperText={errors.title && touched.title && errors.title}
                label="Email Address"
                fullWidth
              />
              <TextField
                autoFocus
                id="loanAmount"
                name="loanAmount"
                value={values.loanAmount}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                margin="normal"
                autoComplete="off"
                variant="outlined"
                // error={errors.title && touched.title ? true : false}
                // helperText={errors.title && touched.title && errors.title}
                label="Loan Amount"
                fullWidth
              />
              <TextField
                id="note"
                name="note"
                value={values.note}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                margin="normal"
                autoComplete="off"
                variant="outlined"
                // error={errors.description && touched.description ? true : false}
                // helperText={errors.description && touched.description && errors.description}
                label="Notes"
                fullWidth
                multiline
                rows={4}
              />
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              {/* disabled={!dirty || !isEmpty(errors) || isSubmitting} */}
              <Button onClick={handleSubmit as any} color="primary">
                Submit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Root;
