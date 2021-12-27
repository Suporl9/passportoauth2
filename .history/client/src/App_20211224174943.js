import axios from "axios";

function App() {
  const sendDataToServer = async () => {
    const text = await axios
      .get("/api/")
      .then((resp) => console.log(resp.data));
    // console.log(text);
  };

  return (
    <div className="App">
      <button onClick={() => sendDataToServer()}>Get the /api request</button>
    </div>
  );
}

export default App;
