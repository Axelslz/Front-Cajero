import '../assets/Styles/cajero.css';


function Cauto({children}){
    return(
        <>
        {children}
        <div id='frame1' class='frame1'>
            <div id='rectangle3' class='rectangle3'></div>
            <div id='rectangle8' class='rectangle8'></div>
            <div id='rectangle5' class='rectangle5'></div>
            <div id='rectangle10' class='rectangle10'></div>
            <div id='rectangle12' class='rectangle12'></div>
            <div id='retirar' class='retirar'>Retirar</div>
            <div id='depositar' class='depositar'>Depositar</div>
            <div id='rectangle13' class='rectangle13'></div>
            <div id='montoaretirar:' class='montoaretirar:'>Monto a retirar:</div>
            <div id='rectangle14' class='rectangle14'></div>
            <div id='rectangle15' class='rectangle15'></div>
            <div id='retire' class='retire'>Retire</div>
        </div>
        </>
    )
}

export default Cauto;