import './App.css';
import { useFetch } from './useFetch';
import { useToggle } from './useToggle';
import { useUrlPicker } from './useUrlPicker';

function App() {

  const { selectedUrl, picker } = useUrlPicker();
  const { data, loading, error } = useFetch(selectedUrl);
  const { isToggled, toggle } = useToggle();

  console.log( 'toggled', isToggled);

  return (
    <div className="App">
      <input type="checkbox" onChange={toggle}></input>
      <header className="App-header">
        {/* { loading ? <p>Loading ... 🚀</p> : <img src={data} className="App-logo" alt="picsum fetched image" /> } */}
        { picker }
        {(() => {
          if(!selectedUrl) return <p>You gotta select an url 🤦🏼‍♂️</p>
          if(isToggled) return <p>Nothing to see 👀</p>;
          if(error) return <p>OH Noooo ... </p>;
          if(loading) return <p>Loading ... 🚀</p>;
          return <img src={data} className="App-logo" alt="picsum fetched data"></img>;
        })()}
      </header>
    </div>
  );
}

export default App;
