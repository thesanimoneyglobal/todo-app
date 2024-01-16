import ToDoForm from "./ToDoForm.tsx";
import { useState } from "react";
import {uid} from "uid";
import TodoList from "./TodoList.tsx";

export interface Task {
    task: string,
    id: string,
    isEditing: boolean,
    checked: boolean
}


function Todo() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const onSubmit = (data: Task) => {
        setTasks([...tasks, {task: data.task, id: uid(4), isEditing: false, checked: false}])
        console.log(tasks)
    }

    const onDelete = (id: string) => {
        const newTasks = tasks.filter(item => item.id != id);
        setTasks([...newTasks])
    }

    const onChecked = (id: string) => {
        setTasks((prevTasks) => {
            return prevTasks.map((el) =>
                el.id === id ? {...el, checked: !el.checked} : el
            );
        });
    };

    const handleEdit = (id: string) => {
        setTasks((prevState) => {
           return prevState.map(el => el.id === id ? {...el, isEditing: !el.isEditing} : el
            )
        });
    }

    const editTask = (value: string, id: string) => {
        setTasks((prevState) => {
            return prevState.map((el) =>
                el.id === id ? { ...el, task: value, isEditing: !el.isEditing } : el
            );
        });
    };


    return <>
        <div className="todo-wrapper">
            <h1 className={'mb-lg-5 fw-bold heading'}>Task Tracker</h1>
            <ToDoForm onSubmit={onSubmit}></ToDoForm>
        </div>
        <div className="todo-list">
            <TodoList tasks={tasks}
                      onDelete={onDelete} onChecked={onChecked} handleEdit={handleEdit} editTask={editTask}>
            </TodoList>
        </div>

    </>
}

export default Todo;