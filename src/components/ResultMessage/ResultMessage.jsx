import css from "./ResultMessage.module.css";
import catImage from "../../assets/cat.png";

const ResultMessage = ({ isCorrect }) => {
  return (
    <div className={css.result}>
      {isCorrect === null ? (
        ""
      ) : isCorrect ? (
        <div>
          <p>Ти молодець!</p>
          <img src={catImage} alt="Котик" className={css.catImage} />
        </div>
      ) : (
        "Даринко, спробуй ще!"
      )}
    </div>
  );
};

export default ResultMessage;
