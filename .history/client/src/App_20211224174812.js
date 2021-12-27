import axios from "axios";

function App() {
  const sendDataToServer = async () => {
    const text = await axios.get("/api/").then((resp) => resp.data);
    console.log(text);
  };

  return (
    <div className="App">
      <button>Get the /api request</button>
    </div>
  );
}

export default App;
