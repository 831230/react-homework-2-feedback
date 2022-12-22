import { Component } from 'react';
import PropTypes from 'prop-types';
import StatsResult from 'components/StatsResult/StatsResult';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: props.initialGood,
      neutral: props.initialNeutral,
      bad: props.initialBad,
    };
  }

  static defaultProps = {
    step: 1,
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    title: PropTypes.string,
    step: PropTypes.number,
    initialGood: PropTypes.number,
    initialNeutral: PropTypes.number,
    initialBad: PropTypes.number,
  };

  handlingStatistics = event => {
    // event.button("Good").onClick();
    if (event.target.outerText === 'Good') {
      this.goodIncrement();
    }
    if (event.target.outerText === 'Neutral') {
      this.neutralIncrement();
    }
    if (event.target.outerText === 'Bad') {
      this.badIncrement();
    }
  };

  goodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + this.props.step,
      };
    });
  };

  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + this.props.step,
      };
    });
  };

  badIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + this.props.step,
      };
    });
  };

  countTotalFeedback = () => {
    if (this.state.good || this.state.neutral || this.state.bad) {
      return (
        <StatsResult
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          totalValue={this.state.good + this.state.neutral + this.state.bad}
          positiveValue={Math.round(
            (this.state.good /
              (this.state.good + this.state.neutral + this.state.bad)) *
              100
          )}
          title={'Statistics'}
        />
      );
    } else {
      return (
        <StatsResult
          totalValue={this.state.good + this.state.neutral + this.state.bad}
          positiveValue={0}
          title={'Statistics'}
        />
      );
    }
  };

  render() {
    return (
      <>
        <div onClick={this.handlingStatistics}>
          <button id="Good">Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        {/* <div>{this.countTotalFeedback()}</div> */}
      </>
    );
  }
}

export default Feedback;
