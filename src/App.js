import React from "react";
import { Provider } from "./react-redux";

import store from "./store";
import Count1 from "./constainers/count1";
import Count2 from "./constainers/count2";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Count1 />
        <Count2 />
      </Provider>
    </div>
  );
}

export default App;
