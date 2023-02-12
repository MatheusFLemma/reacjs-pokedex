import styled from "styled-components";

interface CardProps {
  pokemonPrincipalType: string;
}

export const Container = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  margin-top: 2rem;
`;

export const Card = styled.div<CardProps>`
  display: flex;
  row-gap: 0.5rem;
  border-radius: 25px;
  max-width: 22.5rem;

  padding: 1.375rem 2rem;
  background-color: ${({ theme, pokemonPrincipalType }) => theme.colors[pokemonPrincipalType]};
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  > p {
    font-weight: bold;
    font-family: "Noto Sans", sans-serif;
    font-size: 1.125rem;
    opacity: 0.5;
  }
`;

export const CardTypes = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    font-family: "Noto Sans", sans-serif;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.75rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
  }
`;

export const CardImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;

  > img {
    max-width: 6.875rem;
  }
`;
