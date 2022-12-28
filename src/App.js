import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
function App() {
  return (
    
   <>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenido a Mining Store"}></ItemListContainer>
   </>
  );
}

export default App;
