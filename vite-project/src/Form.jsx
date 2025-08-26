function submit()
{
    console.log("form submitted successfully")
}
export default function Form()
{
    return(
        <form>
            <input placeholder="write something"></input>
            <button onClick={submit}>Submit</button>
        </form>
    )
}