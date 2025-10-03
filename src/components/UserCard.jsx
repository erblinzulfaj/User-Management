import {Link} from "react-router-dom";
import emailIcon from "../assets/envelope.svg";
import phoneIcon from "../assets/phone.svg";
import companyIcon from "../assets/company.svg";
import locationIcon from "../assets/location.svg";

export default function UserCard({user, onRequestDelete}) {
    return (
        <div className="card h-100 d-flex flex-column shadow-sm">

            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">{user.name}</h5>
                <small>@{user.username}</small>
            </div>


            <div className="card-body flex-grow-1">
                <ul className="list-unstyled mb-0">
                    <li className="mb-2 d-flex align-items-center">
                        <img src={emailIcon} alt="email icon" width={16} height={16} className="me-2"/>
                        {user.email}
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                        <img src={phoneIcon} alt="email icon" width={16} height={16} className="me-2"/>
                        {user.phone}
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                        <img src={companyIcon} alt="email icon" width={16} height={16} className="me-2"/>
                        {user.company?.name}
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                        <img src={locationIcon} alt="email icon" width={16} height={16} className="me-2"/>
                        {user.address?.city}
                    </li>
                </ul>
            </div>


            <div className="card-footer d-flex justify-content-between align-items-center">
                <Link to={`/users/${user.id}`} className="btn btn-sm btn-primary">
                    Details
                </Link>

                <div className="dropdown">
                    <button
                        className="btn btn-sm btn-outline-secondary"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        aria-label="More actions"
                        style={{lineHeight: 1}}
                    >
                        ⋮
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <Link to={`/users/${user.id}/edit`} className="dropdown-item">
                                Edit
                            </Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li>
                            <button
                                className="dropdown-item text-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteConfirmModal"
                                onClick={() => onRequestDelete?.(user)}
                            >
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}