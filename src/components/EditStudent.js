import { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import Axios from 'axios';

function EditStudent() {

    const {id} = useParams();

    const [data, setData] = useState({name:"",email:"",rollNo:""});
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://crud-backend-dn6l.onrender.com/studentRoute/update-student/" + id)
        .then((res) => {
            if (res.status === 200) {
                const {name, email, rollNo} = res.data;
                setData({name, email, rollNo});
            }
            else Promise.reject();
        })
        .catch((err) => alert(err))
    },[id]);

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleEdit = () => {
        const data = {name: newData[0], email: newData[1], rollNo: newData[2]}
        Axios.put("https://crud-backend-dn6l.onrender.com/studentRoute/update-student/" + id, data)
        .then((res) => {
            if (res.status === 200) {
                alert("Record updated successfully");
                window.location.reload();
            }
            else Promise.reject();
        })
        .catch((err) => alert(err))
    }

    return (
        <div>
            <h1 className="display-3 my-1"> Update Student </h1>
            <form onSubmit={handleEdit}>
                <StudentForm getState={getState} nameValue = {data.name} 
                            emailValue = {data.email} 
                            rollNoValue = {data.rollNo}>
                    Update Student
                </StudentForm>
            </form>
        </div>
    )
}
export default EditStudent;