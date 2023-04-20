import { useEffect } from "react";
import { socketConnect } from "./core/socket";

import "./App.css";

const App = () => {
  useEffect(() => {
    console.log('App useEffect render');

    socketConnect();
  }, []);

  console.log('App render');

  return (
    <div className="App">
      App is Run!
    </div>
  );
};

export default App;
