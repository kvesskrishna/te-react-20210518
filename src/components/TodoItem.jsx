import './TodoItem.css'
import TodoDate from './TodoDate'
const TodoItem = () => {
    const todoInfo = {
        created: new Date(2020, 7, 2),
        target: new Date(2021, 8, 12),
        task: 'Buy Groceries',
        status: 'Not Started'
    }
    const created_year = todoInfo.created.toLocaleDateString('en-US', { year: 'numeric' })
    const created_day = todoInfo.created.toLocaleDateString('en-US', { day: '2-digit' })
    const created_month = todoInfo.created.toLocaleDateString('en-US', { month: 'long' })
    const target_year = todoInfo.target.toLocaleDateString('en-US', { year: 'numeric' })
    const target_month = todoInfo.target.toLocaleDateString('en-US', { month: 'long' })
    const target_day = todoInfo.target.toLocaleDateString('en-US', { day: '2-digit' })

    return (
        <div className="todo_item">
            <TodoDate dateType="todo_created" date={todoInfo.created} day={created_day} year={created_year} month={created_month}></TodoDate>
            <div className="todo_task">
                <div>Buy Groceries</div>
            </div>
            <TodoDate dateType="todo_target" date={todoInfo.target} day={target_day} year={target_year} month={target_month}></TodoDate>

            <div className="todo_status">
                <div>
                    Not Started
                </div>
            </div>
        </div>
    )
}

export default TodoItem;