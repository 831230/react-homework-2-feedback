import titleStyles from './WidgetTitle.module.css';
import PropTypes from 'prop-types';
import Feedback from 'components/Feedback/Feedback';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import StatsResult from 'components/StatsResult/StatsResult';

const WidgetTitle = ({ title, state}) => {
  return (
      <section>
        <h2>{title}</h2>

        <Feedback step={1} initialGood={0} initialNeutral={0} initialBad={0} />
        <FeedbackOptions options onLeaveFeedback state={state} />
        <StatsResult good neutral bad totalValue={1} positiveValue={1} title={'Statistics'}/>
      </section>
  );
};

WidgetTitle.propTypes = {
  title: PropTypes.string,
};

export default WidgetTitle;
