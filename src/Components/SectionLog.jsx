import { Link } from "react-router-dom";
import "../assets/Styles/Login.css";
import "../assets/Styles/Section.css";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/services/auth";

function SectionLog() {
  const { setAccessToken, authState } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (authState.accessToken) {
      navigate("/");
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await signIn(email, password);
    console.log(response);

    if (response.status === 200) {
      setAccessToken(response.data.token);
      alert("Inicio de sesion exitoso");
      navigate("/");
      return;
    }

    alert("Usuario o contraseña incorrectos");
  };

  return (
    <div>
      <section id="home">
        <div className="inner-width">
          <div className="content">
            <div>
              <form className="form" onSubmit={login}>
                <h2 className="form_title">Inicio Sesión</h2>
                <p className="form_paragraph">
                  ¿Aún no tienes una cuenta?{" "}
                  <Link to="/register" className="form_link">
                    Entra aquí
                  </Link>
                </p>

                <div className="form_container">
                  <div className="form_group">
                    <input
                      type="text"
                      id="email"
                      className="form_input"
                      placeholder=""
                    />
                    <label for="email" className="form_label">
                      Correo:
                    </label>
                    <span className="form_line"></span>
                  </div>

                  <div className="form_group">
                    <input
                      type="password"
                      id="password"
                      className="form_input"
                      placeholder=""
                    />
                    <label for="password" className="form_label">
                      Contraseña:
                    </label>
                    <span className="form_line"></span>
                  </div>

                  <input type="submit" className="form_submit" value="Entrar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionLog;
