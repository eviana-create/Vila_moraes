import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "#1f1f1f",
            padding: "15px",
            color: "#fff",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            zIndex: 1000
        }}>
            <Link to={"/"} style={{ color: "#fff", textDecoration: "none"}}>Inicio</Link>
            <Link to={"/Reunioes"} style={{ color: "#fff", textDecoration: "none"}}>Reuniões</Link>

        </nav>
    );
}

export default Navbar;