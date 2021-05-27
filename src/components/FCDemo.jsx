export const FCDemo = () => {
    let name = 'tom';
    const SecondFunction = () => {
        name = 'smith';
        console.log(name)
    }
    // SecondFunction();
    return (
        <div>{SecondFunction()}</div>
    )
}