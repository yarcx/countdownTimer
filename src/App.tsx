import Countdown, { CountdownRenderProps } from "react-countdown";

const nnpcLogo = "./nnpc-logo.png";

const Completed = () => (
  <>
    <h1>Congrats!!! Countdown Completed</h1>
    <h2>0 Day : 0 Hr : 0 Min : 0 Sec</h2>
  </>
);

const renderer = (props: CountdownRenderProps) => {
  const { hours, minutes, seconds, completed, days } = props;
  if (completed) {
    return <Completed />;
  } else {
    return (
      <h1>
        {days} Days : {hours} Hrs : {minutes} Mins : {seconds} Secs
      </h1>
    );
  }
};

function App() {
  return (
    <div className='container'>
      <nav>
        <img src={nnpcLogo} alt='Nnpc Logo' className='logo' />
      </nav>
      <div className='countDownBox'>
        <Countdown date={new Date(2024, 0, 1)} renderer={renderer} />
      </div>
    </div>
  );
}

export default App;
