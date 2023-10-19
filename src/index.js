import * as actions from "./ReduxStore/action";
import { store } from "./ReduxStore/store";
import App from "./components/app";
import React from "react";
import  ReactDOM  from "react-dom/client";
import { Provider } from "react-redux";



const unsubscribe = store.subscribe(() => console.log("store changed!!", store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)














// store.dispatch(actions.todoAdder("todo 1"));
// store.dispatch(actions.todoAdder("todo 2 to modify desc"));
// store.dispatch(actions.todoAdder("todo 3 to set resolved"));
// store.dispatch(actions.todoAdder("todo 4 to delete with no alert"));

// store.dispatch(actions.todoModifier(2, "todo 2 desc modified"));
// store.dispatch(actions.todoResolver(3));

// unsubscribe();

// store.dispatch(actions.bugRemover(4));

// console.log(store.getState())