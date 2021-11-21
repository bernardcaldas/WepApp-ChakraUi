
import  WithBackgroundImage from '../components/Hero';
import  WithSpeechBubbles from '../components/Testimonials';
import Simple from "../components/Contact";
import SmallCentered from "../components/Footer";

const IndexPage = () => {
  return(
    <>
      <WithBackgroundImage />
      <WithSpeechBubbles />
      <Simple />
      <SmallCentered />
    </>
  )
}

export default IndexPage
