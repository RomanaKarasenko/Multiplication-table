import { useState } from "react";
import css from "./InputField.module.css";

const InputField = ({ value, onChange, ...props }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue)) {
      setError("");
      onChange(e);
    } else {
      setError("Введіть тільки цифри!");
    }
  };

  const handleBlur = () => {
    if (!value) {
      setError("Потрібно вказати відповідь!");
    } else {
      setError("");
    }
  };

  return (
    <div className={css.inputContainer}>
      <input
        className={css.input}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {error && <div className={css.error}>{error}</div>}
    </div>
  );
};

export default InputField;
