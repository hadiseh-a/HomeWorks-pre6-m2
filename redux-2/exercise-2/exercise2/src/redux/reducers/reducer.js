import { produce } from "immer";
import { CHANGE_PRICE } from "../actions/actions";

const initialState = { price: 0.0, numberOfProduct: 0 };

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    if (action.type === CHANGE_PRICE) {
      draft.price = draft.price + parseFloat(action.payload);
      draft.numberOfProduct++;
    } else draft = state;
  });
export default reducer;
