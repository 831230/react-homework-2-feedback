import subtitleStyles from './WidgetSubtitle.module.css';
import PropTypes from 'prop-types';

const WidgetSubitle = ({subtitle}) => {
  return (
    <h3>{subtitle}</h3>
  )
};

WidgetSubitle.propTypes = {
  subtitle: PropTypes.string,
};

export default WidgetSubitle;