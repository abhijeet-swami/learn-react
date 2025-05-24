import { UserProvider } from "../context/context.jsx";
import Profile from "./components/profile.jsx";

function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}

export default App;
