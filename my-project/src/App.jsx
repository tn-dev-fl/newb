

import './App.css'
import Storage from '@material-ui/icons/Storage';
import PublicIcon from '@mui/icons-material/Public';
const Storages = () => {
  return (
    <>
      <Storage style={{ marginRight: '10px' }} />
    </>
      
    
  );
};
function App() {

  return(<></>
  )
}
export function Nav(){
  return (
    <div className="const1">
      <ul>
        <li>
          <Storages />
          <a href="default.asp" style={{ marginLeft: '10px' }}>
            Proxy
          </a>
        </li>
      </ul>
      <ul>
      
        <li>
        <PublicIcon />
          <a href="news.asp" style={{ marginLeft: '10px' }}>Web List</a>
        </li>
      </ul>
    </div>
  )
}
export default App
