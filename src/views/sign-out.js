import { Autocomplete, Avatar, Button, TextField } from '@mui/material'
import React from 'react'

function SignOut() {
    return (
        <div className='sign_out'>
            <div className='box_center'>
                <div className='box_center_top'>
                    <Avatar src='./img/kel.jpg'className='avt-logo'/> 
                    <h5 className='title-box'>Welcome back, Kelvin!</h5>
                    <p className='des-box'>Sign in to your account to continue</p>
                </div>
                <div className='box_center_content'>
                    <Autocomplete
                        freeSolo
                        options={[]}
                        className='input-box'
                        renderInput={(params) => <TextField className='text-input-title' {...params} label="Email" />}
                    />
                    <Autocomplete
                        freeSolo
                        options={[]}
                        className='input-box'
                        renderInput={(params) => <TextField className='text-input-title' {...params} label="Password" />}
                    />
                    <div>
                        <Button className='button-submit-box' variant="contained">Sign In</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignOut