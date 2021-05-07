import { BrowserRouter as Router, Route } from 'react-router-dom';
import TasksScreen from "./components/TasksScreen";
import CompletedScreen from "./components/CompletedScreen";

function App() {
    return (
        <Router>
            <div>
                <h1>TODO LIST</h1>
                <Route path={`/`} component={TasksScreen} exact></Route>
                <Route path={`/completed`} component={CompletedScreen}></Route>
            </div>
        </Router>
    );
}

export default App;
