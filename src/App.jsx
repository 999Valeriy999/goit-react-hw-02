
import Description  from './components/description/description';
import { useEffect, useState } from "react";
import Options from './components/options/Options';
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {

  const [values, setValues] = useState(() => {    
    
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"))

    if (savedFeedback !== null) {
      return savedFeedback
    }

    return{
      good: 0,
      neutral: 0,
      bad:0
    }

  });
  
  const onLeaveFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(values))
  }, [values])
  
  const { good, neutral, bad } = values;
  const totalFeedback = bad + good + neutral;
  const positiveFeedback = Math.round((good / totalFeedback) * 100)

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad:0
    })
  }
    
    
    
   
 return <>

  < Description/>
  <Options feedback={onLeaveFeedback} totalFeedback={totalFeedback}  resetFeedback={resetFeedback} ></Options>
    <>{totalFeedback === 0 ? <Notification message={"No feedback yet"} /> : <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback } />}</>
   
  </>;
 }   
  
  
export default App;



