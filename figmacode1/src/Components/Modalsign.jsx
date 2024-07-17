import { X, Eye } from "lucide-react"; // Assuming you have an Eye icon for password visibility
import React, { useRef, useState } from "react";
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function MultipleSelect({ personEmail, setPersonEmail }) {
    const theme = useTheme();

    const handleChange = (event) => {
        setPersonEmail(event.target.value);
    };

    return (
        <FormControl sx={{ m: 2, width: 500 }}>
            <TextField
                label="Email address"
                variant="outlined"
                value={personEmail}
                onChange={handleChange}
                InputProps={{
                    style: {
                        color: 'white',
                        borderColor: 'white'
                    }
                }}
                InputLabelProps={{
                    style: { color: 'white' }
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white'
                        },
                        '&:hover fieldset': {
                            borderColor: 'white'
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white'
                        }
                    }
                }}
            />
        </FormControl>
    );
}

function PasswordInput({ password, setPassword, showPassword, setShowPassword }) {
    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormControl sx={{ m:1, width: 500 }}>
            <TextField
                label="Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handleChange}
                InputProps={{
                    style: {
                        color: 'white',
                        borderColor: 'white'
                    },
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                edge="end"
                                style={{ color: 'white' }}
                            >
                                {/* <Eye /> */}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                InputLabelProps={{
                    style: { color: 'white' }
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white'
                        },
                        '&:hover fieldset': {
                            borderColor: 'white'
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white'
                        }
                    }
                }}
            />
        </FormControl>
    );
}

function Modal({ onClose }) {
    const modalRef = useRef();
    const [personEmail, setPersonEmail] = React.useState('example@gmail.com');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <div
            ref={modalRef}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm mx-0-sm flex justify-center items-center z-50"
        >
            <div className="relative bg-black border-2 border-white rounded-xl px-12 py-10 flex flex-col gap-5 items-center mx-72">
                <div
                    onClick={onClose}
                    className="absolute top-4 right-4 cursor-pointer"
                >
                    <X size={28} className="text-white" />
                </div>

                
                <h1 className="text-3xl font-extrabold h-full underline decoration-red-600 text-white">
                    Sign In
                </h1>
                <MultipleSelect personEmail={personEmail} setPersonEmail={setPersonEmail} />
                <PasswordInput password={password} setPassword={setPassword} showPassword={showPassword} setShowPassword={setShowPassword} />
                

                <div className="text-green-600">
                    <p className="text-left p-0 m-0">forgot Password?</p>
                </div>
                <form>
                    <button className="mt-4 flex items-center justify-center rounded-full bg-blue-400 w-[265px] h-[70px] text-white">
                        Continue
                    </button>
                    <div className="mt-10 text-lg">
                        <p className="text-white inline">New user?</p>
                        <p className="text-green-400 inline">Create an account</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;



