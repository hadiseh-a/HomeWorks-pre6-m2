import { produce } from "immer";

const initialState = { price: 0.0, numberOfProduct: 0 };

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    if (action.type === "CHANGE-PRICE") {
      draft.price = draft.price + parseFloat(action.payload);
      draft.numberOfProduct++;
    } else draft = state;
  });
export default reducer;
