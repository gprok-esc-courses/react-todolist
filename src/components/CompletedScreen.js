import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CompletedTask from "./CompletedTask";

function CompletedScreen() {

    const [tasks, setTasks] = useState([])

    function getTasks() {
        fetch('http://localhost/websys/php/api/completed.php')
            .then(response => response.json())
            .then(data => setTasks(data));
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div>
            <h2>Completed Tasks</h2>
            <Link to={`/`}>Tasks</Link>
            {tasks.map((task, index) => {
                return <CompletedTask task={task.task} tid={task.id} key={index} />
            })}
        </div>
    )
}

export default CompletedScreen;