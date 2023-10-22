import { useSelector } from 'react-redux';

function Edit({ setEdit }) {
  const user = useSelector((store) => store.user);
  const edit = useSelector((store) => store.editmode);
  console.log(edit);

  return (
    <>
      <h1>Edit user info</h1>
      <section className="edit-user-info">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="edit-wrapper">
            <label htmlFor="username">User Name:</label>
            <input type="text" id="username" defaultValue={user.userName} />
          </div>
          <div className="edit-wrapper">
            <label htmlFor="firstname">First Name:</label>
            <input
              className="disabled"
              type="text"
              id="firstname"
              value={user.firstName}
              disabled
            />
          </div>
          <div className="edit-wrapper">
            <label htmlFor="lastname">Last Name:</label>
            <input
              className="disabled"
              type="type"
              id="lastname"
              value={user.lastName}
              disabled
            />
          </div>
          <div className="buttons-wrapper">
            <button className="edit-button">Save</button>
            <button
              className="edit-button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Edit;
