import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;

  > form {
    width: 50%;
    margin: 0 auto;

    label {
      width: 100%;

      input {
        width: 100%;
        background: rgba(0, 0, 0, 0.2);
        color: ${({ theme }) => theme.colors.text};
        border: none;
        border-radius: 25px;
        padding: 1rem;
        font: ${({ theme }) => theme.font.highlightedText};

        transition: background 0.5s;

        &:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        &:focus::placeholder {
          opacity: 0;
        }
      }
    }
  }

  .pokemon {
    display: flex;
    row-gap: 0.5rem;
    border-radius: 25px;
    max-width: 22.5rem;

    padding: 1.375rem 2rem;

    &__infos {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;

      > p {
        font: ${({ theme }) => theme.font.highlightedText};
        font-size: 1.125rem;
        opacity: 0.5;
      }
    }

    .type {
      display: flex;
      gap: 0.5rem;

      &__name {
        font: ${({ theme }) => theme.font.text};
        color: ${({ theme }) => theme.colors.text};
        font-size: 0.5rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 1.125rem;
        padding: 0.1875rem 0.5rem;
      }
    }

    &__image {
      display: flex;
      align-items: center;
      justify-content: end;
      width: 100%;

      > img {
        max-width: 6.875rem;
      }
    }
  }

  .bug {
    background: ${({ theme }) => theme.colors.bug};
  }

  .dragon {
    background: ${({ theme }) => theme.colors.dragon};
  }

  .fairy {
    background: ${({ theme }) => theme.colors.fairy};
  }

  .fire {
    background: ${({ theme }) => theme.colors.fire};
  }

  .ghost {
    background: ${({ theme }) => theme.colors.dragon};
  }

  .ground {
    background: ${({ theme }) => theme.colors.ground};
  }

  .normal {
    background: ${({ theme }) => theme.colors.normal};
  }

  .psychic {
    background: ${({ theme }) => theme.colors.psychic};
  }

  .steel {
    background: ${({ theme }) => theme.colors.steel};
  }

  .dark {
    background: ${({ theme }) => theme.colors.dark};
  }

  .electric {
    background: ${({ theme }) => theme.colors.electric};
  }

  .fighting {
    background: ${({ theme }) => theme.colors.fighting};
  }

  .flying {
    background: ${({ theme }) => theme.colors.flying};
  }

  .grass {
    background: ${({ theme }) => theme.colors.grass};
  }

  .ice {
    background: ${({ theme }) => theme.colors.ice};
  }

  .poison {
    background: ${({ theme }) => theme.colors.poison};
  }

  .rock {
    background: ${({ theme }) => theme.colors.rock};
  }

  .water {
    background: ${({ theme }) => theme.colors.water};
  }
`;

export default Container;
