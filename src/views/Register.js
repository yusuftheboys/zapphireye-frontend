import { React, useRef, useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { register } from '../service/auth';
import { useNavigate } from 'react-router';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,24}$/

const Register = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    }
  });
    const userRef = useRef()
    const errRef = useRef()
    let navigate = useNavigate()

    const [user, setUser] = useState('')
    const [validUser, setValidUser] = useState(false)

    const [password, setPassword] = useState('')
    const [validPwd, setValidPwd] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)

    const [role, setRole] = useState('');
    const [validRole, setValidRole] = useState(false)
    console.log(role)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setValidUser(USER_REGEX.test(user))
        console.log(user)
    }, [user])
    
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password))
        setValidMatch(password === matchPwd)
        console.log(password)
    }, [password, matchPwd])
    
    useEffect(() => {
        setErrMsg('')
    }, [user, password, matchPwd, role])
    

    const handleChange = (event) => {
      setRole(event.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await register(user, password, role)
        console.log(response)
        if(response) {
          navigate('/login');
        }
    }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Please Create Your Account
          </Typography>
          <Typography component="h1" variant="h5" ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
            {errMsg}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              ref={userRef}
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              aria-invalid={validUser ? "false" : "true"}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Matchpassword"
              label="Repeat Password"
              type="password"
              id="Matchpassword"
            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Role"
                onChange={handleChange}
                >
                <MenuItem value={'admin'}>Admin</MenuItem>
                <MenuItem value={'reviewer'}>Reviewer</MenuItem>
                <MenuItem value={'guest'}>Guest</MenuItem>
                </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body1">
                  {"Already have an account?   Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Register