import "./App.css";
import {auth} from './firebase/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import NavBar from './components/navbar'
import ChatBox from './components/ChatBox'
import Welcome from './components/welcome'

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user? <Welcome/> : <ChatBox/>}

    </div>
  );
}

export default App;
