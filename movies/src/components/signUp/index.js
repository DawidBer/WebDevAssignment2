import React, { useState, useContext} from "react";
import { AuthContext } from "../../contexts/authContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const SignUp = ({handleSignUp}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const context = useContext(AuthContext);

    const handleSubmit = async () => {
      try {
        
    
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const isValidPassword = passwordRegEx.test(password);
        console.log("isValidPassword",isValidPassword);

        if (isValidPassword) {
          console.log("userEmail:", email);
        console.log("password:", password);
    
          const registrationSuccess = await context.register(email, password);

  
          console.log(registrationSuccess)
          if (registrationSuccess) {
            navigate('/signin');
          } else {
            setError('Registration unsuccessful');
          }
        } else {
          setError('password must meet req: 8chars, >1 letter, >1 digit, >special char');
        }
      } catch (error) {
        console.error('Error signing up:', error.message);
        setError((error.code) || 'registration error');
      }
    };

    return (
        <Card style={{ maxWidth: 500, margin: 'auto', marginTop: 100 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Create Account
        </Typography>
        <div>
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
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 25 }}
            onClick={handleSubmit}
          >
           Join Community!
          </Button>
             {error && <p style={{ color: 'yellow' }}>{error}</p>}
         </div>
      </CardContent>
    </Card>
        
    );
    };
export default SignUp;