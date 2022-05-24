function App() {
  const minutes = new Date().getMinutes();
  console.log(minutes);
  if (minutes % 2 === 0) {
    return <h1>Четная минута</h1>;
  } else {
    return <h1>Нечетная минута</h1>;
  }
}

export default App;
