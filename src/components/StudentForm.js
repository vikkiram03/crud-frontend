import { useState, useEffect } from "react";

function StudentForm(props) {
    const [name, setName] = useState(props.nameValue);
    const [email, setEmail] = useState(props.emailValue);
    const [rollNo, setRollNo] = useState(props.rollNoValue);

    useEffect(() => {
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    }, [props.nameValue, props.emailValue, props.rollNoValue])

    // We need to transfer arr to CreateStudent
    const arr = [name, email, rollNo];  // arr = ['raj','raj@gmail.com',1]

    const handleClick = () => {
        props.getState(arr);
    }

    return (
        <div  style={{maxWidth:"40%", margin:"0px auto"}}>
            <input defaultValue={name} type="text" onChange={(event) => setName(event.target.value)} className="form-control my-3" placeholder="Enter your name" required/>
            <input defaultValue={email} type="email" onChange={(event) => setEmail(event.target.value)} className="form-control my-3" placeholder="Enter your email" required/>
            <input defaultValue={rollNo} type="number" onChange={(event) => setRollNo(event.target.value)} className="form-control my-3" placeholder="Enter your roll number" required/>
            <button onClick={handleClick} className="btn btn-success my-3 d-block mx-auto" type="submit"> {props.children} </button>
        </div>
    )
}
export default StudentForm;