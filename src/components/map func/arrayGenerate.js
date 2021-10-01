export function MapArray() {

    let names = ["Ahsan", "Zain", "Hassam", "Adnan", "Ali"];

    function sayhi(name) {
        alert("Hi " + name);
    }

    return <div>

        <ol>
        {
            names.map((name)=>{
                return<li>{name}</li>
            })
        }
        </ol>

        <table border = "1">
            {
                names.map((name)=>{
                    return <tr>
                        <td onClick={()=>{
                            sayhi(name)
                        }}>{name}</td>
                    </tr>
                })
            }
        </table>
    </div>
}