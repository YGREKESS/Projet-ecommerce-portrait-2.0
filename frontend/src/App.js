import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./4-css/App.css";
import User_Account from "./3-pages/User_Account";
import Navbar from "./3-pages/components/Navbar";
import Home from "./3-pages/Home";
import Shop from "./3-pages/shop/Shop";
import Modele_Page from "./3-pages/shop/Modele_Page";

function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="App-body">
          <Route path="/" exact component={Home} />
          <Route path="/mon-compte" component={User_Account} />
          <Route path="/boutique" component={Shop} />
          <Route path="/modele/:product_slug" component={Modele_Page} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
