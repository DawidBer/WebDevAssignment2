import React, { useState, useContext} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import { AuthContext } from "../../contexts/authContext";

const SignIn = () => {
  const context = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await context.authenticate(email,password);
            console.log("Sign in Successfull");
           navigate("/");
        } catch (error) {
            console.error("Sign in Error:", error.message);
            setError(error.message);
        }
        };
    return (
        <Card style={{ maxWidth: 500, margin: 'auto', marginTop: 100 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={(e) => handleSignIn(e)}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
          onClick={handleSignIn}
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 25 }}
            type="submit"
          >
            Login
          </Button>
          {error && <p style={{ color: 'yellow' }}>{error}</p>}
        </form>
      </CardContent>
    </Card>
    );
    };
export default SignIn;