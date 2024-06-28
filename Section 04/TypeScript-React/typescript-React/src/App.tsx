import bgVideo from "./assets/bg_video.mp4";
import Counter from "./components/Counter";
import Heading from './components/Heading';
import { Section } from "./components/Section";
import { useState } from "react"
import List from "./components/List";
function App() {
  const currentDate = new Date().toLocaleDateString();
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title={"Coming Soon..."} />
      <Section>This is a Value That Passing Just Passing</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="bold">{item}</span>} />



      {/* The Page Work */}
      <video autoPlay loop muted style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%,-50%)",
        zIndex: "-1"
      }}>
        <source src={bgVideo} type='video/mp4' />
      </video>
      {/* <div className='centered-main-title'>
        <h1>
          Coming Soon
        </h1>
      </div>
      <div className='footer'>
        <h3 className="centered-title">
          Website by<a href="https://www.ranulgamage.tech" target="_blank" rel="noopener noreferrer">
            <img src='logo-rgdev.png' height={50} />
          </a>
        </h3>
        <h5 className='mobileResizeH5'>Page Last Updated: {currentDate}||Website Developer: Ranul Gamage</h5>
        <a href="https://www.ranulgamage.tech" target="_blank" rel="noopener noreferrer">
          <h5>© 2024 RGDev. All rights reserved.</h5>
        </a>
      </div> */}
    </>
  )
}

export default App
