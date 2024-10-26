import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import RouterComp from "./Pages/RouterComp";
import "../src/Components/Media.css/Media.css";

function App() {
  return (
    <>
      <Header />
      <RouterComp />
      <Footer />
    </>
  );
}

export default App;
