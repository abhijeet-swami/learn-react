import { useUserContext } from "../../context/context";

function Profile() {
  const { user, setUser, theme } = useUserContext();
  function handleUpdate() {
    setUser({ name: "abc", username: "bcd" });
  }

  return (
    <>
      <div>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>theme: {theme.light ? "Light Mode" : "Dark Mode"}</p>
        <button onClick={handleUpdate}>Update User</button>
      </div>
    </>
  );
}

export default Profile;
