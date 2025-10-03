import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSearch, selectSearch} from "../store/usersSlice";

export default function UsersToolbar() {
    const dispatch = useDispatch();
    const search = useSelector(selectSearch);

    return (
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">

            <div style={{minWidth: "220px", maxWidth: "300px"}}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                />
            </div>

            <Link to="/users/create" className="btn btn-success">
                + Add User
            </Link>
        </div>
    );
}
