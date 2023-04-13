import { depositar, retirar } from "../api/services/cajero";
import "../assets/Styles/Cajero.css";
import useAuth from "../hooks/useAuth";

function Cajero() {
  const { authState } = useAuth();

  const deposito = async (e) => {
    e.preventDefault();

    const email = authState.user.email;
    const quantity = e.target.cantidad.value;

    const response = await depositar(quantity, email);

    if (response.status === 200) {
      alert("Deposito exitoso");
    }
  };

  const retiro = async (e) => {
    e.preventDefault();

    const email = authState.user.email;
    const quantity = e.target.cantidad.value;

    const response = await retirar(quantity, email);

    if (response.status === 200) {
      alert("Retiro exitoso");
    }
    
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <h1>Cajero</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Depositar</h1>
                </div>
              </div>
              <form onSubmit={deposito}>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="number"
                      min={0}
                      placeholder="Monto a depositar"
                      id="cantidad"
                      className="bg-gray-200 w-full h-10 rounded-md px-3 py-1 mb-2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button className="font-bold py-2 px-4 rounded">
                      Depositar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Retirar</h1>
                </div>
              </div>
              <form onSubmit={retiro}>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="number"
                      min={0}
                      placeholder="Monto a retirar"
                      id="cantidad"
                      className="bg-gray-200 w-full h-10 rounded-md px-3 py-1 mb-2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button className="font-bold py-2 px-4 rounded">
                      Retirar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cajero;
