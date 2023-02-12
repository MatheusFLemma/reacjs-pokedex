import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-top: 1rem;
  padding: 0.5rem 1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
