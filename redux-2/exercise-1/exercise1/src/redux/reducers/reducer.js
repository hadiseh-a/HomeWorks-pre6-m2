import { produce } from "immer";
import { INCREMENT, DECREMENT, RESET } from "../actions/actions";

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case INCREMENT:
        draft.count++;
        break;
      case DECREMENT:
        draft.count--;
        break;
      case RESET:
        draft.count = 0;
        break;
      default:
        draft = state;
    }
  });
