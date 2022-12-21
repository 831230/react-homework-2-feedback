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
          totalValue={this.state.good + this.state.neutral + this.state.bad}
          positiveValue={Math.round(
            (this.state.good /
              (this.state.good + this.state.neutral + this.state.bad)) * 100
          )}
        />
      );
    } else {
      return (
        <StatsResult
          totalValue={this.state.good + this.state.neutral + this.state.bad}
          positiveValue={0}
        />
      );
    }
  };

  render() {
    return (
      <section>
        <div onClick={this.handlingStatistics}>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h3>{this.props.title}</h3>
        <div>
          <p>Good&#58; {this.state.good}</p>
          <p>Neutral&#58; {this.state.neutral}</p>
          <p>Bad&#58; {this.state.bad}</p>
          {this.countTotalFeedback()}
        </div>
      </section>
    );
  }
}

export default Feedback;
