import styled from "styled-components";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

function Home(props) {
  const wordList = useSelector((store) => store.dictionary.word_list);

  return (
    <Container>
      <Title>My Dictionary</Title>
      <Cardlist>
        {wordList.map((w) => (
          <Card>
            <div>단어</div>
            <Word>{w.word}</Word>
            <Desc>{w.desc}</Desc>
            <Example>{w.example}</Example>
          </Card>
        ))}
      </Cardlist>
      <GoCreateButton onClick={() => props.history.push("/create")}>
        추가
      </GoCreateButton>
    </Container>
  );
}
const Container = styled.div`
  max-width: 350px;
  min-height: 50vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1``;

const Cardlist = styled.section``;

const Card = styled.div`
  max-width: 250px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Word = styled.div`
  padding-top: 2px;
  border: 1px solid black;
`;

const Desc = styled.div`
  height: 70px;
`;

const Example = styled.div`
  padding-bottom: 8px;
`;

const GoCreateButton = styled.button``;
export default withRouter(Home);
