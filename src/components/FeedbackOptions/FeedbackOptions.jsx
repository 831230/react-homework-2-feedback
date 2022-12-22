const handlingStatistics= (event, state) => {
    // event.button("Good").onClick();
    if (event.target.outerText === 'Good') {
      state.good=state.good+1;
      console.log(state.good);
    }
    if (event.target.outerText === 'Neutral') {
      this.neutralIncrement();
    }
    if (event.target.outerText === 'Bad') {
      this.badIncrement();
    }
  };

  const  goodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + this.props.step,
      };
    });
  };

const FeedbackOptions = ({ options, onLeaveFeedback, state}) => (
  <>
    <div onClick={handlingStatistics}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  </>
);

export default FeedbackOptions;
