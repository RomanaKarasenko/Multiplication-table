const InputField = ({ value, onChange, ...props }) => {
    return <input value={value} onChange={onChange} {...props} />;
  };
  
  export default InputField;