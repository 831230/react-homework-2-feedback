import WidgetTitle from "components/WidgetTitle/WidgetTitle";
import WidgetSubitle from "components/WidgetSubtitle/WidgetSubtitle";
import Feedback from "components/Feedback/Feedback"

const App = () => (
  <>
    <WidgetTitle title="Please leave feedback"/>

    <WidgetSubitle subtitle="Statistics"/>

    <Feedback 
    title={"Statistics"} 
    step={1} 
    initialValueGood={0}
    initialValueNeutral={0}
    initialValueBad={0} 
    initialTotalStats={0}
    initialPositiveFeedback={0}
    />
  </>
);

export default App;