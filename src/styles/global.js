import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  div#root {
    width: 100%;
    height: 100%;
  }

  h1 {
    font: ${({ theme }) => theme.font.title};
  }

  h2, h3, h4, h5, h6 {
    font: ${({ theme }) => theme.font.title};
    font-size: 2rem;
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;
