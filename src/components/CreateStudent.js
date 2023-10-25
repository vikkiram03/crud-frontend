import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent() {
    const [arr, setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = {name: arr[0], email: arr[1], rollNo: arr[2]};
        Axios.post("https://crud-backend-dn6l.onrender.com/studentRoute/create-student", data)
        .then((res) => {
            if (res.status === 200) alert("Record added successfully");
            else Promise.reject();
        })
        .catch((err) => alert(err));
    }

    return (
        <div>
            <h1 className="display-3 my-1"> Create Student </h1>
            <form onSubmit={handleSubmit} className="my-5">
                <StudentForm getState = {getState} nameValue="" emailValue="" rollNoValue=""> 
                    Create Student
                </StudentForm>
            </form>
        </div>
    )
}
export default CreateStudent;