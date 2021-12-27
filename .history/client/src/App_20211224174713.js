import axios from "axios";

function App() {
  const sendDataToServer = async () => {
    await axios.get("/api/");
  };

  return <div className="App"></div>;
}

export default App;
