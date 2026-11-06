export const Test = () =>{
    const time = new Date();
    console.log(time.toLocaleTimeString());
    
    return (
        <>
        <h2>Vine Test</h2>
        <p>{time.toLocaleTimeString()}</p>
        </>
    )
}