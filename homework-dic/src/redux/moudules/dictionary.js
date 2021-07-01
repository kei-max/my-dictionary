// dictionary.js
import { firestore } from "../../firebase";
// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";

const initialState = {
  word_list: [
    {
      word: "새 단어",
      desc: "단어 설명",
      example: "단어 예시",
    },
    {
      word: "새 단어",
      desc: "단어 설명",
      example: "단어 예시",
    },
    {
      word: "새 단어",
      desc: "단어 설명",
      example: "단어 예시",
    },
  ],
};

export const loadDictionary = (dictionary) => {
  return { type: LOAD, dictionary };
};

export const createDictionary = (dictionary) => {
  return { type: CREATE, dictionary };
};

// thunks
const dbdictionary = firestore.collection("dictionary");
export const loadDictionaryDB = (dictionary) => {
  return (dispatch, getState) => {
    const wordList = [];
    dbdictionary.get().then((docs) => {
      docs.forEach((doc) => {
        wordList.push(doc.data());
      });
    });
    dispatch(loadDictionary(wordList));
  };
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "dictionary/LOAD": {
      if (action.dictionary) {
        return { word_list: action.dictionary };
      }
      return state;
    }

    case "dictionary/CREATE": {
      const new_word_list = [...state.word_list, action.dictionary];
      return { word_list: new_word_list };
    }
    default:
      return state;
  }
}
