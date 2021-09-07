import { TEMPLATE_ACTION } from "../utils/ActionTypes";
import produce from "immer";

let initState: TemplateState = {
  templateArr: [{ id: 0 }],
};

const templateReducer = (state = initState, action: Action) => {
  let stateCopy: TemplateState;

  switch (action.type) {
    case TEMPLATE_ACTION:
      stateCopy = produce(state, (newState: TemplateState) => {
        newState.templateArr[0].id = action.payload.id;
      });

      return stateCopy;
    default:
      return state;
  }
};

export default templateReducer;
