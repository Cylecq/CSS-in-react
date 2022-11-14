import styled from "styled-components";

const Card = styled.div`
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 300px;
`;

const DescriptionContainer = styled.div`
  border-bottom: 1px solid grey;
`;

const Title2 = styled.h2`
  font-family: Arial;
  font-size: 2rem;
`;

const Span = styled.span`
  font-family: Arial;
  font-size: 1.5rem;
`;

const Para = styled.p`
  font-family: Arial;
  font-size: 1rem;
`;

const Title3 = styled.h3`
  font-family: Arial;
  font-size: 1.5rem;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const Li = styled.li`
  background-color: lightgrey;
  padding: 7px;
  margin-right: 15px;
  border-radius: 15px;
  font-family: Arial;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;

  &:hover {
    background-color: red;
  }
`;

function App() {
  return (
    <Card>
      <img src="https://picsum.photos/300" alt="lorem" />
      <DescriptionContainer>
        <Title2>Title</Title2>
        <Span>Secondary text</Span>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni et
          distinctio eum, blanditiis sint non perspiciatis autem. Officia
          temporibus expedita libero eaque totam similique.
        </Para>
      </DescriptionContainer>
      <Title3>Subtitle</Title3>
      <Ul>
        <Li>Item 1</Li>
        <Li>Item 2</Li>
        <Li>Item 3</Li>
        <Li>Item 4</Li>
      </Ul>
      <Button>Action !</Button>
    </Card>
  );
}

export default App;
