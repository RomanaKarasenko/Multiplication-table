import css from "./SubmitButton.module.css";

const SubmitButton = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      Підтвердити
    </button>
  );
};

export default SubmitButton;
