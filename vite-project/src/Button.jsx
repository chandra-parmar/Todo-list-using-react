function Hello()
{
    alert('hello chinu')
}
export default function Button()
{
    return (
        <div>
            <button onClick={Hello}>Click me </button>
        </div>
    )
}