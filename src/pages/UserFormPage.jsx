import {useMemo} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, updateUser, selectUserById} from "../store/usersSlice"; // ← adjust path if needed

export default function UserFormPage({mode}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();

    const computedMode = useMemo(() => {
        if (mode) return mode;
        return id ? "edit" : "add";
    }, [mode, id]);

    const title = computedMode === "edit" ? "Edit User" : "Add New User";

    const existing = useSelector((s) => (computedMode === "edit" && id ? selectUserById(s, id) : null));

    if (computedMode === "edit" && !existing) {
        return (
            <div className="container py-4">
                <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
                    ← Back
                </button>
                <div className="alert alert-warning">User not found.</div>
            </div>
        );
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const payload = {
            name: (data.get("name") || "").toString().trim(),
            username: (data.get("username") || "").toString().trim(),
            email: (data.get("email") || "").toString().trim(),
            phone: (data.get("phone") || "").toString().trim(),
            website: (data.get("website") || "").toString().trim(),
            company: {name: (data.get("company") || "").toString().trim()},
            address: {
                street: (data.get("street") || "").toString().trim(),
                suite: (data.get("suite") || "").toString().trim(),
                city: (data.get("city") || "").toString().trim(),
            },
        };

        if (computedMode === "edit" && id) {
            dispatch(updateUser({id, changes: payload}));
        } else {
            dispatch(addUser(payload));
        }
        navigate("/");
    }

    return (
        <div className="container py-4">
            <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
                ← Back
            </button>

            <div className="card shadow-sm">
                <div className="card-header bg-light">
                    <h2 className="h5 mb-0">{title}</h2>
                </div>

                <div className="card-body">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label className="form-label">Name *</label>
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Enter full name"
                                defaultValue={existing?.name}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                name="username"
                                type="text"
                                className="form-control"
                                placeholder="Enter username"
                                defaultValue={existing?.username}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Email *</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                defaultValue={existing?.email}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Phone</label>
                            <input
                                name="phone"
                                type="text"
                                className="form-control"
                                placeholder="Enter phone"
                                defaultValue={existing?.phone}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Website</label>
                            <input
                                name="website"
                                type="text"
                                className="form-control"
                                placeholder="Enter website"
                                defaultValue={existing?.website}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Company</label>
                            <input
                                name="company"
                                type="text"
                                className="form-control"
                                placeholder="Enter company name"
                                defaultValue={existing?.company?.name}
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">Street</label>
                            <input
                                name="street"
                                type="text"
                                className="form-control"
                                placeholder="Street"
                                defaultValue={existing?.address?.street}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Suite</label>
                            <input
                                name="suite"
                                type="text"
                                className="form-control"
                                placeholder="Suite"
                                defaultValue={existing?.address?.suite}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">City</label>
                            <input
                                name="city"
                                type="text"
                                className="form-control"
                                placeholder="City"
                                defaultValue={existing?.address?.city}
                            />
                        </div>

                        <div className="col-12 d-flex justify-content-end gap-2 mt-3">
                            <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                {computedMode === "edit" ? "Update" : "Add"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}
