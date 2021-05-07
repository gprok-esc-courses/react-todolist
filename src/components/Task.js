import { useState } from 'react'

function Task({ task, tid }) {

    const [id, setId] = useState(tid);
    const [active, setActive] = useState(true);

    function handleChange() {
        fetch('http://localhost/websys/php/api/complete.php?tid=' + id)
            .then(response => response.json())
            .then(data => {
                if(data == 'success') {
                    setActive(false);
                }
            })
    }

    return (
        <div>
            {active ? (<div>
            <input type='checkbox' onChange={handleChange} /> { task }
            </div>) : (' ') }
        </div>
    )
}

export default Task;