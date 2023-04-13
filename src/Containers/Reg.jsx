import Navbar from "../Components/Navbar"
import SectionReg from "../Components/SectionReg"


function Reg({children}){
    return(
        <>
       
       <Navbar></Navbar>
        {children}
     
      <SectionReg></SectionReg>
        </>

    )
}

export default Reg;