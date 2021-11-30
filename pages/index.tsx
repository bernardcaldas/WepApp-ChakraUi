
import  WithBackgroundImage from '../components/Hero';
import  WithSpeechBubbles from '../components/Testimonials';
import Simple from "../components/Contact";
import SmallCentered from "../components/Footer";
import BmiTest from '../components/bmi-test';
import BMR from '../components/bmr2';

const IndexPage = () => {
  return(
    <>
      <WithBackgroundImage />
      <BMR />
      <BmiTest />
      <WithSpeechBubbles />
      <Simple />
      <SmallCentered />
    </>
  )
}

export default IndexPage
