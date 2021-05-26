import { useState } from "react";
import GlassesStore from "./Negozio/GlassesStore";
import CartList from "./Negozio/CartList";

function App() {
  const [screen, setScreen] = useState(0);

  const setView = (scr) => {
    setScreen(scr);
  };

  return (
    <div className="App">
      {screen == 0 && <GlassesStore setScreen={setView} />}
      {screen == 1 && <CartList setScreen={setView} />}
    </div>
  );
}

export default App;
