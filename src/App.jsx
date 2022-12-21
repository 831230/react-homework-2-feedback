import WidgetTitle from "components/WidgetTitle/WidgetTitle";
import Feedback from "components/Feedback/Feedback"

const App = () => (
  <>
    <WidgetTitle title="Please leave feedback"/>

    <Feedback 
    title={"Statistics"} 
    step={1} 
    initialGood={0}
    initialNeutral={0}
    initialBad={0} 
    />
  </>
);

export default App;