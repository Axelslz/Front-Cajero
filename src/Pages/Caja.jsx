import Cauto from "../Containers/Cauto";
import Header from "../Components/Header";
import Cajero from "../Components/Cajero";

function Caja({children}){

    return(  
      <>
      
       <Header></Header>
         {children}
       <Cajero></Cajero>
       
      </>
    )
  }
  
  export default Caja;