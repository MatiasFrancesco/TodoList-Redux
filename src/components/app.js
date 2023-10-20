import React, { useState } from "react";


import { Form, Button, FormControl } from "react-bootstrap";

import { store } from "../ReduxStore/store";
import * as actions from "../ReduxStore/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare, faFlag, faSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";


function App() {


    const state = useSelector((state) => state)
    console.log(state)

    return (
        <div>
            <h2 id='title'>Todo List 1!!</h2>
            <Form className="insertTodoForm">
                <Form.Group>
                    <Form.Control
                        className="itf-textBar"
                        type="text"
                        placeholder="Write here the description of your todo"
                        id="todoAdder"
                    //onChange={e => this.setState({ description: e.target.value })}
                    >
                    </Form.Control>
                    <Button
                        className='itf-subBtn'
                        onClick={() => store.dispatch(actions.todoAdder(document.getElementById("todoAdder").value))}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Form.Group>
            </Form>

            {/* <Todos /> */}
            <div>
                {
                    state.map(todo => {

                        let newDescription = ""
                        //console.log(todo.description, todo.resolved, todo.id)
                        return (
                            <Form.Group key={todo.id} className="todo-group">
                                <Form.Control
                                    placeholder={todo.description}
                                    onChange={e => newDescription = e.target.value}
                                ></Form.Control>

                                <Button
                                    className="modify-todo-btn"
                                    onClick={() => store.dispatch(actions.todoModifier(todo.id, newDescription))}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </Button>

                                <Button
                                    className="flag-todo-btn"
                                    onClick={() => store.dispatch(actions.todoResolver(todo.id))}
                                >
                                    <FontAwesomeIcon icon={todo.resolved === false ? faFlag : faFlagCheckered} />
                                </Button>

                                <Button 
                                    className="delete-todo-btn"
                                    onClick={() => store.dispatch(actions.todoRemover(todo.id))}
                                >
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </Button>
                            </Form.Group>


                        )
                    })
                }
            </div>
        </div>
    )

}
export default App;