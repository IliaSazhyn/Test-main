import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ImageProvider from "./context/imageProvider";
import Home from "./pages/home/home";
import Image from "./pages/image/image";

function App() {
  return (
    <ImageProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/:imageId" component={Image} />
          </Switch>
        </Router>
      </div>
    </ImageProvider>
  );
}

export default App;
