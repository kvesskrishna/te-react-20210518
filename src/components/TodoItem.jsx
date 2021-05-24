import './TodoItem.css'
import TodoDate from './TodoDate'
import TodoTask from './TodoTask'
import TodoStatus from './TodoStatus'
const TodoItem = (props) => {
    // const todoInfo = {
    //     created: new Date(2020, 7, 2),
    //     target: new Date(2021, 8, 12),
    //     task: 'Buy Groceries',
    //     status: 'Not Started'
    // }
    // const created_year = todoInfo.created.toLocaleDateString('en-US', { year: 'numeric' })
    // const created_day = todoInfo.created.toLocaleDateString('en-US', { day: '2-digit' })
    // const created_month = todoInfo.created.toLocaleDateString('en-US', { month: 'long' })
    // const target_year = todoInfo.target.toLocaleDateString('en-US', { year: 'numeric' })
    // const target_month = todoInfo.target.toLocaleDateString('en-US', { month: 'long' })
    // const target_day = todoInfo.target.toLocaleDateString('en-US', { day: '2-digit' })
    const todoInfo = props.info;
    return (
        <div className="todo_item">
            <TodoDate dateType="todo_created" date={todoInfo.created} ></TodoDate>
            <TodoTask task={todoInfo.task}></TodoTask>
            <TodoDate dateType="todo_target" date={todoInfo.target} ></TodoDate>
            <TodoStatus status={todoInfo.status}></TodoStatus>

        </div>
    )
}

export default TodoItem;