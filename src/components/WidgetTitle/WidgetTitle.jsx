import titleStyles from './WidgetTitle.module.css';
import PropTypes from 'prop-types';

const WidgetTitle = ({title}) => {
  return (
    <h2>{title}</h2>
  )
};

WidgetTitle.propTypes = {
  title: PropTypes.string,
}

export default WidgetTitle;