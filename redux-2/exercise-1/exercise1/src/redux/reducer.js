import { produce } from "immer";

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "INCREMENT":
        draft.count++;
        break;
      case "DECREMENT":
        draft.count--;
        break;
      case "RESET":
        draft.count = 0;
        break;
      default:
        draft = state;
    }
  });
