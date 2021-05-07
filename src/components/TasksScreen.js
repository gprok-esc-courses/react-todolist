import { useEffect, useState } from 'react'
import Task from './Task';
import {Link} from "react-router-dom";

function TasksScreen() {

    const [tasks, setTasks] = useState([])

    function getTasks() {
        fetch('http://localhost/websys/php/api/tasks.php')
            .then(response => response.json())
            .then(data => setTasks(data));
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div>
            <h2>Tasks</h2>
            <div>
                <form>
                    <input type='text' placeholder='Add new task' />
                    <input type='submit'/>
                </form>
            </div>
            <Link to={`/completed`}>Completed Tasks</Link>
            {tasks.map((task, index) => {
                return <Task task={task.task} tid={task.id} key={index} />
            })}
        </div>
    )
}

export default TasksScreen;