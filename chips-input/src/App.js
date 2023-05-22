
import 'bootstrap/scss/bootstrap.scss'
import logo from './github.svg'

function App() {
  return (
    <div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-info">
  <div class="row">
    <div class="col text-center p-2">
      <a src="#">Home</a>
    </div>
    <div class="col-11 text-center">
    <h3>Chips Input</h3>
    </div>
    <div class="col p-2">
    <a src="#"><img src={logo} alt='logo'/></a>
    </div>
  </div>
  </nav>
</div>
  );
}

export default App;
