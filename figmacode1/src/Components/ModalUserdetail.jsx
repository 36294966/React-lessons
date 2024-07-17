import { useMediaQuery, useTheme } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { X, } from "lucide-react";
import React, { useRef, useState } from "react";


function ReusableInput({
  label,
  type,
  value,
  setValue,
  showPassword,
  setShowPassword,
  error
}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword && setShowPassword(!showPassword);
  };

  return (
    <FormControl sx={{ marginTop: -2, m: 2, width: "100%", maxWidth: 1200 }}>
      <TextField
        label={label}
        variant="outlined"
        type={
          showPassword !== undefined
            ? showPassword
              ? "text"
              : "password"
            : type
        }
        value={value}
        onChange={handleChange}
        error={error}
        helperText={error ? "Password must be at least 8 characters." : ""}
        InputProps={{
          style: {
            color: "white",
            borderColor: "white",
            whiteSpace: "nowrap"
          },
          endAdornment: showPassword !== undefined && (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {/* <Eye /> */}
              </IconButton>
            </InputAdornment>
          )
        }}
        InputLabelProps={{
          style: { color: "white", whiteSpace: "nowrap" }
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white"
            },
            "&:hover fieldset": {
              borderColor: "white"
            },
            "&.Mui-focused fieldset": {
              borderColor: "white"
            }
          }
        }}
      />
    </FormControl>
  );
}

function Modal({ onClose }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const modalRef = useRef();
  const [inputs, setInputs] = useState([
    { label: "Address ", type: "text", value: "NY 11379,USA", showPassword: false },
    { label: "ZIP code", type: "text", value: "1234", showPassword: false  },
    { label: "Date of birth", type: "password", value: "19/02/1984", showPassword: false },
    { label: "Nationality", type: "password",value: "ARE",showPassword: false},
    {
      label: "Country of Residence)",
      type: "text",
      value: "Wakanda",
      showPassword: false
    },
  ]);
  const [errors, setErrors] = useState({});
  const [checkboxes, setCheckboxes] = useState({
    newsUpdates: false,
    termsAgree: false
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);

    if (newInputs[index].label === "Password" && value.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: true
      }));
    } else if (newInputs[index].label === "Password" && value.length >= 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: false
      }));
    }
  };

  const handleShowPasswordToggle = (index) => {
    const newInputs = [...inputs];
    newInputs[index].showPassword = !newInputs[index].showPassword;
    setInputs(newInputs);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black flex flex-nowrap bg-opacity-30 backdrop-blur-sm mx-0-sm 
      justify-center items-center z-50"
    >
      <div
        className="absolute bg-black border-2 w-[900px] h-[610px] border-white rounded-xl px-28 
        py-4 flex flex-col gap-0 items-center"
        // style={{
        //   width: isSmallScreen ? "90%" : "auto",
        //   maxWidth: isSmallScreen ? "100%" : "900px",
        //   margin: isSmallScreen ? "0 16px" : "32px 0"
        // }}
      >
        <div onClick={onClose} className="absolute top-4 right-4 cursor-pointer">
          <X size={28} className="text-white" />
        </div>

        <h1 className="text-3xl font-extrabold h-full underline decoration-red-600 text-white">
          User Details
        </h1>

        {inputs.map((input, index) => (
          <ReusableInput
            key={`input-${index}`}
            label={input.label}
            type={input.type}
            value={input.value}
            setValue={(value) => handleInputChange(index, value)}
            showPassword={
              input.type === "password" ? input.showPassword : undefined
            }
            setShowPassword={
              input.type === "password"
                ? () => handleShowPasswordToggle(index)
                : undefined
            }
            error={input.label === "Password" && errors.password}
          />
        ))}
        <form>
          <button
            className="mt-4 flex items-center justify-center rounded-full bg-gray-600 w-[250px] h-[65px] text-white"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;