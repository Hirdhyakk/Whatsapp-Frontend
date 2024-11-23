import { useState } from 'react';
import './App.css'
import UtilityBar from "./components/UtilityBar/UtilityBar";
import Chats from "./containers/Chats/Chats";
import Status from './containers/Status/Status';
import Channels from './containers/Channels/Channels';
import Communities from './containers/Communities/Communities';
import Settings from './containers/Settings/Settings';
import Profile from './containers/Profile/Profile';

function App() {
  const [activeUtility, setActiveUtility] = useState("Chats");

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* <UtilityBar />
      <Sidebar />
      <ChatWindow /> */}
      <UtilityBar activeUtility={activeUtility} setActiveUtility={setActiveUtility} />

      {activeUtility === "Chats" && <Chats />}
      {activeUtility === "Status" && <Status />}
      {activeUtility === "Channels" && <Channels />}
      {activeUtility === "Communities" && <Communities />}

      {activeUtility === "Settings" && <Settings />}
      {activeUtility === "Profile" && <Profile />}
    </div>
  );
}

export default App;
