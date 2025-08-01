import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { BASE_URL } from "../constant/base_url";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate= useNavigate()
  const [error, setError] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const onSubmit = async () => {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!firstName || !lastName || !email || !password) {
      setError("Check Submmited Data !")
      return;
    }
    const res = await fetch(`${BASE_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });
    if (!res.ok) {
      setError("Unbale to register user , please try diffirent credientiles");
      return;
    }
    const token = await res.json();
    if (!token) {
      setError("incorect token");
      return;
    }
    login(email, token);
    navigate('/')
  };
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography variant="h6">Register New Account</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 3,
            gap: 2,
            border: 1,
            borderColor: "#f5f1f5",
            p: 2,
          }}
        >
          <TextField
            inputRef={firstNameRef}
            label="First Name"
            name="firstname"
          />
          <TextField inputRef={lastNameRef} label="Last name" name="lastname" />
          <TextField inputRef={emailRef} label="Email" name="email" />
          <TextField
            inputRef={passwordRef}
            type="password"
            label="Password"
            name="password"
          />
          <Button variant="contained" onClick={onSubmit}>
            Register
          </Button>
          {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        </Box>
      </Box>
    </Container>
  );
}
