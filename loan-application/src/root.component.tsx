import { Container, Grid, Card, CardContent, CardActions, Typography, Button, TextField, ThemeProvider } from "@mui/material";
import { useFormik } from "formik";
import { navigateToUrl } from "single-spa";
import { validateEmail, validateName, validateLoanAmount } from "@built-labs/validation";
//import * as Yup from "yup";
import { isEmpty } from "lodash";
import { theme } from "@built-labs/theme";

// How can I share this across MFEs
interface Applicant {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  loanAmount?: number | null;
  note?: string | null;
}

const validateInput = (values: Applicant) => {
  let errors: any = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (!validateName(values.firstName)) {
    errors.firstName = "Invalid Name";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (!validateName(values.lastName)) {
    errors.lastName = "Invalid Name";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.loanAmount) {
    errors.loanAmount = "Required";
  } else if (!validateLoanAmount(values.loanAmount)) {
    errors.loanAmount = "We cannot loan less than $10,000";
  }

  if (values.note !== "" && values.note.length > 1000) {
    errors.note = "Note must be less than 1000 characters";
  }

  return errors;
};

const Root: React.FC = () => {
  const { isSubmitting, dirty, touched, errors, values, handleSubmit, handleChange, handleReset, handleBlur } = useFormik<Applicant>({
    initialValues: { firstName: "", lastName: "", email: "", loanAmount: null, note: "" },
    enableReinitialize: true,
    onSubmit: (values) => {
      navigateToUrl(`/success?firstName=${values.firstName}`);
    },
    // validationSchema: Yup.object().shape({
    //   firstName: Yup.string().min(2, "Too Short!").max(80, "Too Long!").required("Required"),
    //   lastName: Yup.string().min(2, "Too Short!").max(80, "Too Long!").required("Required"),
    //   email: Yup.string().email().required("Required"),
    //   loanAmount: Yup.number().min(1, "We can't loan values less than $1.").required("Required"),
    //   note: Yup.string().min(2, "Too Short!").max(1000, "Too Long!"),
    // }),
    validate: validateInput,
  });

  // what other fields would you add?
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={11}>
            <Card>
              <CardContent>
                <Typography variant="h5">Loan Application</Typography>
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
                  error={errors.firstName && touched.firstName ? true : false}
                  helperText={errors.firstName && touched.firstName && errors.firstName}
                  label="First Name"
                  fullWidth
                />
                <TextField
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  margin="normal"
                  autoComplete="off"
                  variant="outlined"
                  error={errors.lastName && touched.lastName ? true : false}
                  helperText={errors.lastName && touched.lastName && errors.lastName}
                  label="Last Name"
                  fullWidth
                />
                <TextField
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  margin="normal"
                  autoComplete="off"
                  variant="outlined"
                  error={errors.email && touched.email ? true : false}
                  helperText={errors.email && touched.email && errors.email}
                  label="Email Address"
                  fullWidth
                />
                <TextField
                  id="loanAmount"
                  name="loanAmount"
                  value={values.loanAmount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  margin="normal"
                  autoComplete="off"
                  variant="outlined"
                  error={errors.loanAmount && touched.loanAmount ? true : false}
                  helperText={errors.loanAmount && touched.loanAmount && errors.loanAmount}
                  label="Loan Amount"
                  fullWidth
                />
                <TextField
                  id="note"
                  name="note"
                  value={values.note}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  autoComplete="off"
                  variant="outlined"
                  error={errors.note && touched.note ? true : false}
                  helperText={errors.note && touched.note && errors.note}
                  label="Notes"
                  fullWidth
                  multiline
                  rows={4}
                />
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleSubmit as any} disabled={!dirty || !isEmpty(errors) || isSubmitting} color="primary">
                  Submit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Root;
