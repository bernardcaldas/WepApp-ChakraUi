
import  WithBackgroundImage from '../components/Hero';
import  WithSpeechBubbles from '../components/Testimonials';
import Simple from "../components/Contact";
import SmallCentered from "../components/Footer";
import BmiCard from '../components/Bmi';

const IndexPage = () => {
  return(
    <>
      <WithBackgroundImage />
      <BmiCard />
      <WithSpeechBubbles />
      <Simple />
      <SmallCentered />
    </>
  )
}

export default IndexPage
