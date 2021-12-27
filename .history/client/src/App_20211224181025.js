import axios from "axios";

function App() {
  const obj = { a: "a", b: "b" };
  const sendDataToServer = async () => {
    await axios.post("/api/", obj).then((resp) => console.log(resp.data));
    // console.log(text);
  };

  return (
    <div className="App">
      <button onClick={() => sendDataToServer()}>Get the /api request</button>
    </div>
  );
}

export default App;
