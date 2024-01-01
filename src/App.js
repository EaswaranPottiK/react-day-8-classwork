import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage';

function App() {
  function createOneNow(){
    console.log('hello')
    localStorage.setItem("notes", "buttonClicked");
    window.location.reload(true);
  }
  if(localStorage.getItem("notes")=="buttonClicked"){
    return(
      <MainPage />
    )
  }
  else{
    return ( 
      <div style={{display:'flex', alignItems:'center', flexDirection:'column',marginTop:'40vh'}}>
        <h1 style={{marginBottom:'10px'}}>You have no notes</h1>
        <button onClick={createOneNow} style={{cursor:'pointer', fontSize:'20px', border:'none',borderRadius:'20px', color:'white',backgroundColor:'#3C91E6',padding:'10px 20px'}}>Create one now</button>
      </div>
    );
  }

}

export default App;
