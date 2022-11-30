import CakeView from "./features/cake/CakeView";
import IceCremeView from "./features/icecream/IceCremeView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCremeView />
      <UserView />
    </div>
  );
}

export default App;
