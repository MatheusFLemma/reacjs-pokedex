import styled, { css } from "styled-components";

interface CardProps {
  pokemonPrincipalType: string;
}

interface CardContainerProps {
  isSingle?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div<CardContainerProps>`
  ${({ isSingle }) => {
    if (isSingle) {
      return css`
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    } else {
      return css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

        @media screen and (max-width: 992px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 768px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
      `;
    }
  }}

  margin-top: 2rem;
`;

export const Card = styled.div<CardProps>`
  display: flex;
  row-gap: 0.5rem;
  border-radius: 25px;
  max-width: 22.5rem;

  padding: 1.375rem 2rem;
  background-color: ${({ theme, pokemonPrincipalType }) => theme.colors[pokemonPrincipalType]};

  @media screen and (max-width: 768px) {
    max-width: initial;
    width: 100%;
  }
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
