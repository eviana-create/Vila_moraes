import Navbar from "../components/Navbar";

function Reunioes() {
    return(
        <div style={{
            background: "#121212",
            color: "#fff",
            minHeight: "100vh",
            paddingTop: "100px",
            paddingLeft: "20px",
            paddingRight: "20px",
            maxWidth: "600px",
            margin: "0 auto"
        }}>

        <Navbar />

        <div style={{padding: "20px"}}>
            <h1>Reuniões</h1>

            <p>Proxima Reunião: Dia</p>
            <p>Pauta: Urbanização em andamento</p>
            <br />
            <br />
            <p>Fique atento as Reuniões, compareça e assine sempre todas as atas,
                sua presença é fundamental para o bom desenvolvimento da comunidade, contamos com você.
            </p>

        </div>

    </div>
    );
}

export default Reunioes;