import PropTypes from 'prop-types';

const StatsResult = ({ totalValue, positiveValue }) => (
  <>
    <p>Total&#58; {totalValue}</p>
    <p>Positive feedback&#58; {positiveValue} &#37;</p>
  </>
);

StatsResult.propTypes = {
  totalValue: PropTypes.number,
  positiveValue: PropTypes.number,
};

export default StatsResult;
