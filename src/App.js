function App() {
  const minutes = new Date().getMinutes();
  const isEven = minutes % 2 === 0;
  return <MinuteDisplay isEven={isEven} />;
}

function MinuteDisplay(props) {
  if (props.isEven) {
    return <h1>Четная минута</h1>;
  } else {
    return <h1>Нечетная минута</h1>;
  }
}

export default App;
