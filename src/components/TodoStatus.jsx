const TodoStatus = (props) => {
    return (
        <div className="todo_status">
            <div>
                {props.status}
            </div>
        </div>
    )
}

export default TodoStatus