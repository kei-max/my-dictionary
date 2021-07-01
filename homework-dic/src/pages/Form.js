import styled from "styled-components";
import { useRef } from "react";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { createWord, createDictionary } from "../redux/moudules/dictionary";
import { useDispatch } from "react-redux";

function Form(props) {
  const wordList = useSelector((store) => store.dictionary.word_list);
  const dispatch = useDispatch();

  const wordRef = useRef();
  const descRef = useRef();
  const exampleRef = useRef();

  function handleCreate() {
    const wordData = wordRef.current.value;
    const descData = descRef.current.value;
    const exampleData = exampleRef.current.value;

    const newData = {
      word: wordData,
      desc: descData,
      example: exampleData,
    };

    const action = createDictionary(newData);
    dispatch(action);
    props.history.push("/");
  }
  return (
    <Container>
      <Title>단어 추가하기</Title>
      <InputBox>
        <Label>단어</Label>
        <Input ref={wordRef}></Input>
      </InputBox>
      <InputBox>
        <Label>설명</Label>
        <Input ref={descRef}></Input>
      </InputBox>
      <InputBox>
        <Label>예시</Label>
        <Input ref={exampleRef}></Input>
      </InputBox>
      <CreateButton onClick={handleCreate}>추가하기</CreateButton>
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

const InputBox = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const CreateButton = styled.button``;
export default withRouter(Form);
