// const TodoTask = (props) => {
//     return (
//         <div className="todo_task">
//             <div>{props.task}</div>
//         </div>
//     )
// }
import React from 'react';
class TodoTask extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="todo_task">
                <div>{this.props.task}</div>
            </div>
        )
    }
}

export default TodoTask;