import Axios from 'axios';
import {useEffect, useState} from 'react';
import StudentListRow from './StudentListRow';

function StudentList() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("https://crud-backend-dn6l.onrender.com/studentRoute")
        .then((res) => {
            if (res.status === 200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err) => alert(err));
    }, [])

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <StudentListRow obj={val} />
        })
    }

    return (
        <div>
            <h1 className="display-3 my-1"> Students List </h1>
            <center>
                <table className="text-center my-3 table table-striped table-bordered table-success" style={{maxWidth: "80%"}}>
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Roll Number</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListItems()}
                    </tbody>
                </table>
            </center>
        </div>
    )
}
export default StudentList;