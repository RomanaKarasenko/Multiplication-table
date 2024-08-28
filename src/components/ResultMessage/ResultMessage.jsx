import css from "./ResultMessage.module.css"
const ResultMessage = ({ isCorrect }) => {
    return (
      <div className={css.result}>
        {isCorrect === null ? '' : isCorrect ? 'Ти молодець!' : 'Даринко, спробуй ще!'}
      </div>
    );
  };
  
  export default ResultMessage;