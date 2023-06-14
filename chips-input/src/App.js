
import 'bootstrap/scss/bootstrap.scss'
import logo from './github.svg'
import './App.css'
import { useState } from 'react';

function App() {

  const [searches,setSearches] = useState([]);
  const [query, setQuery] = useState("");

  const updateQuery = ({ target }) => {
    // Update query onKeyPress of input box
    setQuery(target.value)
  }

  const keyPressed = ({ key }) => {
    // Capture search on Enter key
    if (key === "Enter") {
      if(query.length>0)
      {
        setSearches(searches => [...searches, query]);
        updateQuery({target:{value:""}});
      }
    }
  }

  const removeSearch = (e) =>{
    const tempSearches = [...searches];
    // removing the element using splice
    tempSearches.splice(e, 1);
    // updating the list
    setSearches(tempSearches);
 }

 const QueryChip = ()=>(query.length > 0) ? (<div className="chip m-1" key={query}>{query}
 <button className="border-0" onClick={() => updateQuery({target:{value:""}})}> x </button>
</div>) : (<></>);

  return (
    <div className="container-fluid">
              <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-info">
                <div className="row">
                  <div className="col text-center p-1">
                  <a className="nav-link active link-dark" aria-describedby='Home' alt='Home' aria-current="page" aria-label='Home' href="#">Home</a>
                  </div>
                  <div className="col-10 text-center">
                  <h3>Chips Input</h3>
                  </div>
                  <div className="col p-1">
                  <a className="navbar-brand" target="_blank" href="https://github.com/krishaccot-av/chips-input" aria-label='Link to Github Repo'>
                    <img src={logo} alt="Link to Github repo" />
                  </a>
                  </div>
                </div>
              </nav>
              <div className="row p-4">
                <div className="mb-3 col"></div>
                <div className="mb-3 col-8">
                    <input type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Type & hit Enter" 
                    onChange={updateQuery} 
                    onKeyDown={keyPressed} value={query}/>
                </div>
                <div className="mb-3 col"></div>
              </div>
    
              <div>{searches.map((query, i) => (
                <div className="chip m-1" key={query + i}>{query}
                  <button className="border-0" onClick={() => removeSearch(i)}> x </button>
                </div>))}
                <QueryChip/>
              </div>
    </div>
  );
}

export default App;
