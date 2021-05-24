const TodoDate = (props) => {
    const date = props.date;
    const year = date.toLocaleDateString('en-US', { year: 'numeric' })
    const day = date.toLocaleDateString('en-US', { day: '2-digit' })
    const month = date.toLocaleDateString('en-US', { month: 'long' })

    return (
        <div className={props.dateType + " todo_date"}>
            <div>
                {year}
            </div>
            <div>
                {day}
            </div>
            <div>
                {month}
            </div>
        </div>
    )
}

export default TodoDate;