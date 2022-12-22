import WidgetTitle from 'components/WidgetTitle/WidgetTitle';
import { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
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

  // const App = () => (
  //   <>
  //     <WidgetTitle title="Please leave feedback"/>
  //   </>
  // );

  render() {
    return (
      <>
        <WidgetTitle title="Please leave feedback" state={this.state}/>
      </>
    );
  }
}

export default App;
