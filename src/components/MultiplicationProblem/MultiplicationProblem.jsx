import css from "./MultiplicationProblem.module.css"

const MultiplicationProblem = ({ factor1, factor2 }) => {
    return (
      <div className={css.factors}>
        {factor1} × {factor2} =
      </div>
    );
  };
  
  export default MultiplicationProblem;