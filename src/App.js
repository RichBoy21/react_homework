import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import AboutUs from "./pages/About_us";
import Contacts from "./pages/Contacts";
import History from "./pages/History";

function App() {
  const [currentPage, setCurrentPage] = useState(null);

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div>
        <Button onClick={() => navigateToPage("About us")} label="About us" />
        <Button onClick={() => navigateToPage("Contacts")} label="Contacts" />
        <Button onClick={() => navigateToPage("History")} label="History" />
      </div>
      <AboutUs isVisible={currentPage === "About us"} />
      <Contacts isVisible={currentPage === "Contacts"} />
      <History isVisible={currentPage === "History"} />
    </div>
  );
}

export default App;
