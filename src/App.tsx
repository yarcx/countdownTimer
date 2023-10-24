import Countdown, { CountdownRenderProps } from "react-countdown";

const Completed = () => (
  <>
    <h1>Congrats!!! Countdown Completed</h1>
    <h2>0 day : 0 hr : 0 min : 0 sec</h2>
  </>
);

function App() {
  const renderer = (props: CountdownRenderProps) => {
    const { hours, minutes, seconds, completed, days } = props;
    if (completed) {
      return <Completed />;
    } else {
      return (
        <h1>
          {days} days : {hours} hrs : {minutes} mins : {seconds} secs
        </h1>
      );
    }
  };
  return (
    <>
      <Countdown date={new Date("2024-1-1")} renderer={renderer} />
      {/* <Countdown date={Date.now() + 5000} renderer={renderer} /> */}
    </>
  );
}

export default App;
