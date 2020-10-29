import './App.scss';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Widget from './Components/Widget/Widget';
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? <Login /> : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
        </>
      )}
    </div>
  );
}

export default App;


// firebase command
// firebase login
// firebase init
// firebase deploy --only hosting:clone-7c51f


// npm i -g firebase-tools
// firebase login
// y
// do all the necessay steps
// firebase init
// select the hosting
// existing project and select the project from the mentions
// type build
// y
// npm run build
//firebase deploy