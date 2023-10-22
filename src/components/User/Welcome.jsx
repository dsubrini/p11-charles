import { useSelector } from 'react-redux';

function Welcome({ setEdit }) {
  const user = useSelector((store) => store.user);
  console.log(user);

  return (
    <section className="welcome">
      <h1>
        Welcome back <br></br>
        {user.userName} !
      </h1>
      <button onClick={() => setEdit(true)} className="edit-user-button">
        Edit Name
      </button>
    </section>
  );
}

export default Welcome;
