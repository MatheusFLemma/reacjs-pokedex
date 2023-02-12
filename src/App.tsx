import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Container } from "./components/Container";

function App() {
  useEffect(() => {
    // AOS INITIATION
    Aos.init({ duration: 1000 });
  }, []);

  return <Container />;
}

export default App;
