import React from 'react'
import { TextField, Button, FormControl, Box, Typography } from '@mui/material';

const InputField = ({ label, rows }) => {
    const [name, setName] = React.useState('');
    return (
        <div>
            <Box
                component="form"
                sx={{ width: 500, maxWidth: '100%', margin: 'auto', marginTop: '15px' }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label={label}
                    value={name}
                    rows={rows}
                    multiline
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </Box>
        </div>
    )
}

export default InputField
