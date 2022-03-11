import "./App.css";
import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";

function App() {
  let countDownDate = new Date("Apr 1, 2022 09:15:00").getTime();

  return (
    <div className="App">
      <CountdownTimer countDownDate={countDownDate} />
    </div>
  );
}

export default App;
