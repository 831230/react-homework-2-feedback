import PropTypes from 'prop-types';

const StatsResult = ({ good, neutral, bad, totalValue, positiveValue, title }) => (
  <>
    <h3>{title}</h3>
    <p>Good&#58; {good}</p>
    <p>Neutral&#58; {neutral}</p>
    <p>Bad&#58; {bad}</p>
    <p>Total&#58; {totalValue}</p>
    <p>Positive feedback&#58; {positiveValue} &#37;</p>
  </>
);

StatsResult.propTypes = {
  totalValue: PropTypes.number,
  positiveValue: PropTypes.number,
};


export default StatsResult;
