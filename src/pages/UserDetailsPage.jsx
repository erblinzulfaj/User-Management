import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserById} from "../store/usersSlice.js";

export default function UserDetailsPage() {
    const navigate = useNavigate();
    const {id} = useParams();
    const user = useSelector((state) => selectUserById(state, id));

    if (!user) {
        return (
            <div className="container py-4">
                <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
                    ← Back
                </button>
                <div className="alert alert-warning">User not found.</div>
            </div>
        );
    }

    const initial = user.name.charAt(0).toUpperCase();

    return (
        <div className="container py-4">

            <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
                ← Back
            </button>

            <div className="card shadow-sm mb-4">
                <div className="card-body d-flex flex-column flex-md-row align-items-start gap-3">
                    <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                            width: 80,
                            height: 80,
                            background: "var(--bs-primary)",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "28px",
                        }}
                    >
                        {initial}
                    </div>

                    <div>
                        <h2 className="h4 mb-1">{user.name}</h2>
                        <div className="text-muted">@{user.username}</div>
                        <span className="badge bg-light text-dark border mt-2">{user.company.name}</span>
                    </div>
                </div>
            </div>

            <div className="row g-4">

                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-header bg-light"><strong>Contact</strong></div>
                        <div className="card-body">
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p>
                                <strong>Website:</strong>{" "}
                                <a href="#" target="_blank" rel="noreferrer">
                                    {user.website}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-header bg-light"><strong>Address</strong></div>
                        <div className="card-body">
                            <p><strong>Street:</strong> {user.address.street}</p>
                            <p><strong>Suite:</strong> {user.address.suite}</p>
                            <p><strong>City:</strong> {user.address.city}</p>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-header bg-light"><strong>Company Info</strong></div>
                        <div className="card-body">
                            <p><strong>Name:</strong> {user.company.name}</p>
                            <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
                            <p><strong>Business:</strong> {user.company.bs}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
