import '../styles/Letters.scss';

const SolutionsLetters = (props) => {
  const renderSolutionLetters = () => {
    const wordLetters = props.word.split('');
    return wordLetters.map((letter, index) => {
      const exists = props.userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className="letter">
          {exists ? letter : ''}
        </li>
      );
    });
  };
  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
};

export default SolutionsLetters;
