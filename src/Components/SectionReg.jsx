import { uploadFile } from "../api/services/archivo";
import "../assets/Styles/Register.css";
import { signUp } from "../api/services/auth";
function SectionReg() {
  const register = async (e) => {
    e.preventDefault();
    const firstName = e.target.nombre.value;
    const lastName = e.target.apellidos.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.imagen.files[0];
    
    const fileResponse = await uploadFile(image);

    console.log(fileResponse);

    if (fileResponse.status === 200) {
      alert(fileResponse);
    }

    const response = await signUp(email, password, fileResponse.data.url, firstName, lastName);

    console.log(response);

  };
  return (
    <div>
      <section id="home">
        <div className="inner-width">
          <div className="content">
            <div className="container">
              <div className="title">Registro</div>
              <div className="content">
                <form onSubmit={register}>
                  <div className="user-details">
                    <div className="input-box">
                      <span className="details">Nombre</span>
                      <input
                        type="text"
                        id="nombre"
                        placeholder="Ingrese nombre"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <span className="details">Apellidos</span>
                      <input
                        type="text"
                        id="apellidos"
                        placeholder="Ingrese apellidos"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <span className="details">Email</span>
                      <input
                        type="text"
                        id="email"
                        placeholder="Ingrese email"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <span className="details"> Imagen </span>
                      <input
                        type="file"
                        id="imagen"
                        placeholder="Ingrese imagen"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <span className="details">Contraseña</span>
                      <input
                        type="password"
                        id="password"
                        placeholder="Ingrese contraseña"
                        required
                      />
                    </div>
                  </div>

                  <div className="button">
                    <input type="submit" value="Registrarme" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionReg;
