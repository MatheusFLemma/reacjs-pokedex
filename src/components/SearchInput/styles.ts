import styled from "styled-components";

export const SearchInputContainer = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    flex: 1;
    background-color: rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 1rem;
    font-size: 1rem;
    height: 2.5rem;
    font-weight: bold;
    font-family: "Noto Sans", sans-serif;

    transition: background 0.5s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }

    &:focus::placeholder {
      opacity: 0;
    }
  }

  button {
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    height: 2.5rem;
    padding: .5rem 1rem;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
