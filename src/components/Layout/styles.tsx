import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(var(--primary), var(--secondary));
  color: var(--white);
  position: relative;

  > img {
    margin-top: 1rem;
    height: 50px;
    width: 50px;
    margin-left: 7%;
  }
`;
export const Wrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 10%;
  margin-left: 15%;
  position: relative;

  > h1 {
    font-size: 70px;
    margin: 10px 0;
    font-weight: 100;
  }
  > h2 {
    font-size: 80px;
    margin: 10px 0;
    opacity: 0.6;
  }
  > p {
    font-size: 12px;
    margin: 18px 0;
    color: var(--gray);
    line-height: 18px;
  }
`;

const AfterStyle = css`
  content: "";
  background: var(--white);
  height: 1px;
  width: 60px;
  position: absolute;
  top: 50%;
  left: 110%;
  transform: translateY(-50%);
  transition: 0.5s;
`;

export const Link = styled.div`
  > a {
    color: var(--white);
    text-decoration: none;
    display: inline-block;
    margin: 20px 0;
    position: relative;
    &::after {
      ${AfterStyle}
    }
    &:hover::after {
      width: 100px;
    }
  }
`;

export const SocialMedia = styled.span`
  position: absolute;
  left: -150px;
  top: 200px;
  transform: rotate(-90deg);
  letter-spacing: 2px;
  opacity: 0.6;
  padding-right: 1rem;
  &::after {
    ${AfterStyle}
  }
  &:hover::after {
    width: 100px;
  }

  img {
    width: 40px;
  }
`;

export const ImagePrincipal = styled.div`
  > img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60%;
    max-width: 680px;
  }
`;
