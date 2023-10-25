import Axios  from "axios";
import {Link} from "react-router-dom";

function StudentListRow(props) {
    // Object Destruction
    const {_id, name, email, rollNo} = props.obj;

    const handleDelete = () => {
        Axios.delete("https://crud-backend-dn6l.onrender.com/studentRoute/delete-student/" + _id)
        .then((res) => {
            if (res.status === 200) {
                alert("Record deleted successfully");
                window.location.reload();   // Reload the page
            }
            else Promise.reject();
        })
        .catch((err) => alert(err))
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td>
                <button className="btn btn-success">
                    <Link class="text-decoration-none text-light" to={"/edit-student/" + _id}> Edit </Link>
                </button>   
                <button onClick={handleDelete} className="btn btn-danger mx-3">Delete</button>   
            </td>
        </tr>
    )
}
export default StudentListRow;