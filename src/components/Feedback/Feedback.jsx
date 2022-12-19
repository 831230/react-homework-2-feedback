import { Component } from 'react';
import PropTypes from 'prop-types';
import StatsResult from 'components/StatsResult/StatsResult';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statsGoodValue: props.initialValueGood,
      statsNeutralValue: props.initialValueNeutral,
      statsBadValue: props.initialValueBad,
      totalStats: props.initialTotalStats,
      positiveFeedback: props.initialPositiveFeedback,
    }
  };

  static defaultProps = {
    step: 1,
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
    initialTotalStats: 0,
    initialPositiveFeedback: 0,
  };

  static propTypes = {
    title: PropTypes.string,
    step: PropTypes.number,
    initialValueGood: PropTypes.number,
    initialValueNeutral: PropTypes.number,
    initialValueBad: PropTypes.number,
  };

  handlingStatistics = (event) => {
    // console.log(event);
    if(event.target.outerText==="Good"){
      console.log("Good");
      this.goodIncrement();
    };
    if(event.target.outerText==="Neutral"){
      console.log("Neutral");
      this.neutralIncrement();
    };
    if(event.target.outerText==="Bad"){
      console.log("Bad");
      this.badIncrement();
    };
    if(event.target.nodeName==="BUTTON"){
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
    };
  };

  goodIncrement = () => {
    this.setState((prevState)=>{
      return {
        statsGoodValue: prevState.statsGoodValue+this.props.step,
      }
    })
  };

  neutralIncrement = () => {
    this.setState((prevState)=>{
      return {
        statsNeutralValue: prevState.statsNeutralValue+this.props.step,
      }
    })
  };

  badIncrement = () => {
    this.setState((prevState)=>{
      return {
        statsBadValue: prevState.statsBadValue+this.props.step
      }
    })
  };

  countTotalFeedback = () => {
    console.log(this.state.statsGoodValue+this.state.statsNeutralValue+this.state.statsBadValue+1)
    this.setState((prevState)=>{
      return {
        totalStats: prevState.totalStats + 1,
      }
    })
  };

  countPositiveFeedbackPercentage = () => {
    console.log("I am here - countPositiveFeedbackPercentage");
    console.log("positive feedback: ", this.state.positiveFeedback);
    console.log("good stats: ", this.state.statsGoodValue);
    this.setState(()=>{
      return {
        positiveFeedback: (this.state.statsGoodValue+1)/(this.state.totalStats+1)*100
      }
    })
  };

  render() {
    return (
      <section>
        <div onClick={this.handlingStatistics}>
          <button >Good</button>
          <button >Neutral</button>
          <button >Bad</button>
        </div>
        <h3>{this.props.title}</h3>
        <div>
          <p>Good&#58; {this.state.statsGoodValue}</p>
          <p>Neutral&#58; {this.state.statsNeutralValue}</p>
          <p>Bad&#58; {this.state.statsBadValue}</p>
          <StatsResult totalValue={this.state.totalStats} positiveValue={this.state.positiveFeedback}/>
        </div>
      </section>
    );
  }
}

export default Feedback;
