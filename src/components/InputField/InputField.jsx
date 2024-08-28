import { useState } from 'react';
import css from "./InputField.module.css";

const InputField = ({ value, onChange, ...props }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Перевірка, чи введене значення є цифрою
    if (/^\d*$/.test(inputValue)) {
      setError(''); // Очищуємо помилку, якщо введено цифру
      onChange(e);  // Викликаємо onChange, щоб передати значення батьківському компоненту
    } else {
      setError('Введіть тільки цифри!'); // Помилка при введенні не цифри
    }
  };

  const handleBlur = () => {
    // Перевірка, чи поле не пусте при втраті фокусу
    if (!value) {
      setError('Потрібно вказати відповідь!');
    } else {
      setError('');
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
