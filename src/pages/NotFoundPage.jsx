import {useNavigate} from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="container py-4">
            <button
                className="btn btn-outline-secondary mb-3"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>
            <div className="alert alert-warning">
                Page not found.
            </div>
        </div>
    );
}
