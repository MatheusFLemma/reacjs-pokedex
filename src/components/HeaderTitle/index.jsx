import Container from "./styles";

function HeaderTitle(props) {
  return (
    <Container>
      <h1>{props.children}</h1>
    </Container>
  );
}

export default HeaderTitle;
