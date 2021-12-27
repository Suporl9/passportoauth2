import axios from "axios";

function App() {
  const sendDataToServer = async () => {
    const text = await axios.get("/api/").then((resp) => resp.data);
  };

  return <div className="App"></div>;
}

export default App;
