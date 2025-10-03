import UserCard from "../components/UserCard.jsx";
import UsersToolbar from "../components/UsersToolbar.jsx";
import {deleteUser, selectFilteredUsers, setUsers} from "../store/usersSlice.js";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersApi} from "../service/userService.js";
import DeleteConfirmModal from "../components/DeleteConfirmModal.jsx";


export default function UsersListPage() {
    const dispatch = useDispatch();
    const users = useSelector(selectFilteredUsers);

    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        (async () => {
            if (users.length === 0) {
                try {
                    const data = await getUsersApi();
                    dispatch(setUsers(data));
                } catch (e) {
                    console.error("Failed to load users:", e);
                }
            }
        })();
    }, [dispatch, users.length]);


    const handleConfirmDelete = () => {
        if (selectedUser) dispatch(deleteUser(selectedUser.id));
        setSelectedUser(null);
    };

    return (
        <div className="container py-4">
            <h1 className="h4 mb-3">Users</h1>
            <UsersToolbar/>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {users.map((u) => (
                    <div className="col" key={u.id}>
                        <UserCard
                            user={u}
                            onRequestDelete={(user) => setSelectedUser(user)}
                        />
                    </div>
                ))}
            </div>

            <DeleteConfirmModal
                userId={selectedUser?.id}
                userName={selectedUser?.name}
                onConfirm={handleConfirmDelete}
            />
        </div>
    );
}