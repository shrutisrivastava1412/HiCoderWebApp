import React from "react";
import Navbar from "./components/Navbar";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import WaveContent from "./components/WaveContent";
import WhatYouLearn from "./components/WhatYouLearn";
import ThoughtsDiv from "./components/ThoughtsDiv";
import Partners from "./components/Partners";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Content1 />
      <WaveContent />
      <Content2 />
      <WhatYouLearn />
      <ThoughtsDiv />
      <Partners />
      <News />
      <Footer />
    </>
  );
}

export default App;
