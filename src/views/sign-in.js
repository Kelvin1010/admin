import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Autocomplete, Avatar, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react';

function SignIn() {

    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
        ...values,
        showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='sign_in'>
            <div className='box_center'>
                <div className='box_center_top'>
                    <Avatar src='./img/kel.jpg'className='avt-logo'/> 
                    <h5 className='title-box'>Welcome back, Kelvin!</h5>
                    <p className='des-box'>Sign in to your account to continue</p>
                </div>
                <div className='box_center_content'>
                    <FormControl fullWidth className='form-input'>
                        <InputLabel htmlFor="outlined-username">Username</InputLabel>
                        <OutlinedInput
                            id="outlined-username"
                            value={values.username}
                            onChange={handleChange('username')}
                            label="Username"
                        />
                    </FormControl>
                    <FormControl fullWidth className='form-input'>
                        <InputLabel className='input-box' htmlFor="outlined-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <VisibilityOff color='white' /> : <Visibility color='white' />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <div>
                        <Button className='button-submit-box' variant="contained">Sign In</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn