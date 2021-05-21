const TodoDate = (props) => {
    return (
        <div className={props.dateType + " todo_date"}>
            <div>
                {props.year}
            </div>
            <div>
                {props.day}
            </div>
            <div>
                {props.month}
            </div>
        </div>
    )
}

export default TodoDate;