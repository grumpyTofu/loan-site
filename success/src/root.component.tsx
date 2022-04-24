import React, { useState, useEffect } from "react";
import { Container, Card, Typography } from "@mui/material";

// How do I share this across MFEs
interface Applicant {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  loanAmount?: number | null;
  note?: string | null;
}

const useApplicantInfo = () => {
  const [applicant, setApplicant] = useState<Applicant>({ firstName: null });

  useEffect(() => {
    const applicantInfo = window.location.search
      .replace("?", "")
      .split("&")
      .reduce<Applicant>((applicant, param) => {
        const [key, value] = param.split("=");
        if (key === "firstName" && value && value.trim().length > 0) {
          return { ...applicant, firstName: value };
        }
        return applicant;
      }, {} as Applicant);
    setApplicant(applicantInfo);
  }, [window.location.search]);

  return { applicant };
};

const Root: React.FC = () => {
  const { applicant } = useApplicantInfo();

  return (
    <Container>
      <Card sx={{ minHeight: "15vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "3rem" }}>
        <Typography>Congrats{applicant && applicant.firstName ? ` ${applicant.firstName}` : ""}, you submitted the form successfully</Typography>
      </Card>
    </Container>
  );
};

export default Root;
