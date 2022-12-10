import styled from "styled-components";
import { Heading } from "../../components";
import Navbar from "../../containers/Navbar/Navbar";
import Image from 'next/image'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <Wrapper>
      <Heading textAlign="center">
      <Image
              src={logo}
            />

      </Heading>
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
`;
