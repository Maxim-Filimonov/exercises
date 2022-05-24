import React from "react";
function App() {
  const minutes = new Date().getMinutes();
  const isEven = minutes % 2 === 0;

  return (
    <>
      <MinuteDisplay isEven={isEven} />
      <FingerCounter />
    </>
  );
}

function MinuteDisplay(props) {
  if (props.isEven) {
    return <h1>Четная минута</h1>;
  } else {
    return <h1>Нечетная минута</h1>;
  }
}

class FingerCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    let counter;
    if (this.state.count <= 10) {
      counter = <span>Можно посчитать по пальцам до {this.state.count}</span>;
    } else {
      counter = null;
    }
    return (
      <>
        <h1>Счетчик</h1>
        <p>{counter}</p>
        {/* ЗДЕСЬ нужно отобразить кнопку сбросить счетчик ТОЛЬКО когда счетчик больше 10 */}
        <button onClick={() => this.handleIncrement()}>Добавить</button>
      </>
    );
  }
}

export default App;
