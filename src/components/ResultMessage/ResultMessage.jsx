const ResultMessage = ({ isCorrect }) => {
    return (
      <div>
        {isCorrect === null ? '' : isCorrect ? 'Ти молодець!' : 'Даринко, спробуй ще!'}
      </div>
    );
  };
  
  export default ResultMessage;