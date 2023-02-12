import * as S from "./styles";
import { HeaderTitleProps } from "./types";

export function HeaderTitle({ children }: HeaderTitleProps) {
  return (
    <S.Container>
      <h1>{children}</h1>
    </S.Container>
  );
}
