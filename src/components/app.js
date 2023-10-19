import React, { useState } from "react";
import Todos from "./todos";

import { Form, Button } from "react-bootstrap";

import { store } from "../ReduxStore/store";
import * as actions from "../ReduxStore/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",

        }
    }

    render() {
        return (
            <div>
                <h2 id='title'>Todo List 1!!</h2>
                <Form className="insertTodoForm">
                    <Form.Group>
                        <Form.Control
                            className="itf-textBar"
                            type="text"
                            placeholder="Write here the description of your todo"
                            onChange={e => this.setState({ description: e.target.value })}>
                        </Form.Control>
                        <Button
                            className='itf-subBtn'
                            onClick={() => store.dispatch(actions.todoAdder(store.getState()))}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Form.Group>
                </Form>

                <Todos todos={store.getState()} />
            </div>
        )
    }
}
export default App;