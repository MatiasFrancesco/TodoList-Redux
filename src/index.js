import * as actions from "./ReduxStore/action";
import { store } from "./ReduxStore/store";

const unsubscribe = store.subscribe(() => console.log("store changed!!", store.getState()));

store.dispatch(actions.bugAdder("BUG 1"));
store.dispatch(actions.bugAdder("BUG 2 to modify desc"));
store.dispatch(actions.bugAdder("BUG 3 to set resolved"));
store.dispatch(actions.bugAdder("BUG 4 to delete with no alert"));

store.dispatch(actions.bugModifier(2, "BUG 2 desc modified"));
store.dispatch(actions.bugResolver(3));

unsubscribe();

store.dispatch(actions.bugRemover(4));

console.log(store.getState())