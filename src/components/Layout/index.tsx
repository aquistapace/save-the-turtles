import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import ImgPrincipal from "../../assets/turtle.png";
import ButtonUp from "../../assets/button_up.png";
import ButtonDown from "../../assets/button_down.png";
import { FiInstagram } from "react-icons/fi";
import {
  Container,
  Wrapper,
  Link,
  SocialMedia,
  ImagePrincipal,
} from "./styles";
import { ThemeName } from "../../styles/Theme";

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Layout: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [isLight, setIsLight] = useState(true);
  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
    setIsLight(!isLight);
  }
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Wrapper>
        <h1>SAVE</h1>
        <h2>THE TURTLES</h2>
        <p>
          Asperiores nobis expedita veniam nostrum, nisi tempora eos facilis
          debitis maiores, odio voluptas quibusdam nihil repudiandae est animi
          facere corrupti iusto reprehenderit necessitatibus praesentium tempore
          vitae, error exercitationem molestias. Nesciunt!
        </p>
        <Link>
          <a href="#">DISCOVER MORE</a>
        </Link>
        <SocialMedia>
          {isLight ? (
            <button onClick={() => toggleTheme()}>
              <img src={ButtonDown} alt="dark" />
            </button>
          ) : (
            <button onClick={() => toggleTheme()}>
              <img src={ButtonUp} alt="dark" />
            </button>
          )}
          {/* <button onClick={() => toggleTheme()}>
            <FiInstagram size={25} />
          </button> */}
        </SocialMedia>
      </Wrapper>
      <ImagePrincipal>
        <img src={ImgPrincipal} alt="image principal" />
      </ImagePrincipal>
    </Container>
  );
};

export default Layout;
