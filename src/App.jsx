
import Description  from './components/description/description';
import Options from './components/options/FeedbackOptions';



  class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  handleButtonClick = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render(){
    const { good, neutral, bad } = this.state;
return (
<>

  < Description/>
  <Options
 options={Object.keys(this.state)}
 onButtonClick={this.handleButtonClick}
/> 

          
          
   </>
    );
  }}
  


export default App;



