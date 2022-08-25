import { forwardRef, useRef } from "react";

// Components
import { InputAdornment, TextField } from "@mui/material";
import { FiX } from "react-icons/fi";

// Styles

// Hooks & Context

// Redux

// Types

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput: (id: string) => void;
  defaultValue?: string | number | null;
  value: string;
  id: string;
  type: string;
  label: string;
  error: boolean;
  helperText?: string;
  required?: boolean;
  clearIcon?: boolean;
};

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <TextField
      sx={{
        "& .Mui-focused .MuiIconButton-root": { color: "primary.main" },
      }}
      ref={ref}
      required={props.required}
      id={props.id}
      label={props.label}
      variant="standard"
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      error={props.error}
      helperText={props.helperText}
      InputProps={{
        endAdornment: props.clearIcon && (
          <InputAdornment
            position="end"
            sx={{
              cursor: "pointer",
              visibility: props.value ? "visible" : "hidden",
            }}
            onClick={() => {
              props.clearInput(props.id);
              inputRef.current?.focus();
            }}
          >
            <FiX />
          </InputAdornment>
        ),
      }}
    />
  );
});

Input.displayName = "Input";

export default Input;
