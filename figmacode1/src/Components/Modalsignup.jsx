import { useMediaQuery, useTheme } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { X } from "lucide-react"; // Assuming you have an Eye icon for password visibility
import React, { useRef, useState } from "react";

const ITEM_HEIGHT = 24;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {}
};

function ReusableInput({
  label,
  type,
  value,
  setValue,
  showPassword,
  setShowPassword
}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword && setShowPassword(!showPassword);
  };

  return (
    <FormControl sx={{ marginTop: -2, m: 1, width: "100%", maxWidth: 1200 }}>
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
        InputProps={{
          style: {
            color: "white",
            borderColor: "white",
            whiteSpace: "nowrap"
          },
          endAdornment: showPassword !== undefined && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                edge="end"
                style={{ color: "white" }}
              >
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
    { label: "Email address ", type: "text", value: "", showPassword: false },
    { label: "Username", type: "password", value: "", showPassword: false },
    { label: "Password", type: "text", value: "", showPassword: false },
    {
      label: "Confirm password",
      type: "password",
      value: "",
      showPassword: false
    },
    {
      label: "Referral code(Optional)",
      type: "text",
      value: "",
      showPassword: false
    }
  ]);

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
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm mx-0-sm flex justify-center items-center z-50"
    >
      <div
        className="relative bg-black border-2 border-white rounded-xl px-4 py-4 flex flex-col gap-0 items-center"
        style={{
          width: isSmallScreen ? "90%" : "auto",
          maxWidth: isSmallScreen ? "100%" : "900px",
          margin: isSmallScreen ? "0 16px" : "32px 0"
        }}
      >
        <div
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <X size={28} className="text-white" />
        </div>

        <h1 className="text-3xl font-extrabold h-full underline decoration-red-600 text-white">
          Sign In
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
          />
        ))}

        <FormGroup
          sx={{ marginTop: 4, alignItems: "flex-start", width: "100%" }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxes.newsUpdates}
                onChange={handleCheckboxChange}
                name="newsUpdates"
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white"
                  },
                  "& .MuiSvgIcon-root": {
                    backgroundColor: "black",
                    borderRadius: "50%" // Makes the checkbox round
                  }
                }}
              />
            }
            label="I want to receive the latest news and updates by email from Affyn"
            sx={{ color: "white", whiteSpace: "nowrap" }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxes.termsAgree}
                onChange={handleCheckboxChange}
                name="termsAgree"
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white"
                  },
                  "& .MuiSvgIcon-root": {
                    backgroundColor: "black",
                    borderRadius: "50%" // Makes the checkbox round
                  }
                }}
              />
            }
            label="I have read and agree to the Terms of Use and Privacy"
            sx={{ color: "white", whiteSpace: "nowrap" }}
          />
        </FormGroup>

        <form>
          <button
            className="mt-4 flex items-center justify-center rounded-full bg-blue-400 
                    w-[250px] h-[65px] text-white"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
