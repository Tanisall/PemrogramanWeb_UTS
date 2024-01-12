import styled from "styled-components";
import Header from "./componnts/Banner/Header";
import ProfComponent from "./componnts/Banner/ProfComponent";
import Hobi from "./componnts/Hobies/MyHobi";
import Footer from "./componnts/Footer/Footer";
import Galery from "./componnts/Galery/Galery.component";
import Skills from "./componnts/Skills/Skill";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Skills />
      <LightColor>
        <Galery />
      </LightColor>
      <Hobi />
      <LightColor>
        <Footer />
      </LightColor>

    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;