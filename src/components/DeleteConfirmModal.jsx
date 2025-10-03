export default function DeleteConfirmModal({userId, userName, onConfirm}) {
    return (
        <div className="modal fade" id="deleteConfirmModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Delete</h5>
                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        {userName
                            ? <>Delete <strong>{userName}</strong> (ID: {userId})?</>
                            : <>Delete this user?</>}
                        <br/><small className="text-muted">This cannot be undone.</small>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={onConfirm}
                            disabled={!userId}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
