function ProjetoCrianca() {
    return (
        <div style={{ padding: "20px", color: "#fff"}}>
            <h1>Projeto Criança por um Dia</h1>
            <p>
                Confira alguns momentos marcantes do projetoao longo dos anos:
            </p>

            { /* GALERIA*/ }
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "10px",marginTop: "20px"
            }}>
                <img src="https://via.placeholder.com/200" alt="" />
                <img src="https://via.placeholder.com/200" alt="" />
                <img src="https://via.placeholder.com/200" alt="" />
            </div>
        </div>
    );
}

export default ProjetoCrianca;