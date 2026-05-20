import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer
            style={{
                background: "#0d0d0d",
                marginTop: "60px",
                padding: "50px 20px",
                borderTop: "2px solid #1f1f1f"
            }}
        >

            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "40px"
                }}
            >

                {/* COMUNIDADE */}
                <div>

                    <h2
                        style={{
                            color: "#4caf50",
                            marginBottom: "20px"
                        }}
                    >
                        Comunidade Vila Moraes
                    </h2>

                    <p
                        style={{
                            color: "#ccc",
                            lineHeight: "1.8"
                        }}
                    >
                        União, solidariedade e projetos sociais
                        transformando vidas dentro da comunidade.
                    </p>

                </div>

                {/* LINKS */}
                <div>

                    <h3
                        style={{
                            color: "#2196f3",
                            marginBottom: "20px"
                        }}
                    >
                        Navegação
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px"
                        }}
                    >

                        <Link
                            to="/"
                            style={{
                                color: "#ccc",
                                textDecoration: "none"
                            }}
                        >
                            Home
                        </Link>

                        <Link
                            to="/associacao"
                            style={{
                                color: "#ccc",
                                textDecoration: "none"
                            }}
                        >
                            Associação
                        </Link>

                        <Link
                            to="/projeto-crianca"
                            style={{
                                color: "#ccc",
                                textDecoration: "none"
                            }}
                        >
                            Projeto Criança
                        </Link>

                        <Link
                            to="/projetopascoa"
                            style={{
                                color: "#ccc",
                                textDecoration: "none"
                            }}
                        >
                            Páscoa Solidária
                        </Link>

                        <Link
                            to="/marmitas"
                            style={{
                                color: "#ccc",
                                textDecoration: "none"
                            }}
                        >
                            Marmita Solidária
                        </Link>

                    </div>

                </div>

                {/* CONTATO */}
                <div>

                    <h3
                        style={{
                            color: "#ff9800",
                            marginBottom: "20px"
                        }}
                    >
                        Contato
                    </h3>

                    <p style={{ color: "#ccc" }}>
                        📍 Vila Moraes - São Bernardo do Campo
                    </p>

                    <p style={{ color: "#ccc" }}>
                        📞 WhatsApp da Comunidade
                    </p>

                    <a
                        href="https://wa.me/5511950968892"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: "inline-block",
                            marginTop: "15px",
                            background: "#25d366",
                            color: "#fff",
                            padding: "12px 20px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            fontWeight: "bold"
                        }}
                    >
                        Falar no WhatsApp →
                    </a>

                </div>

            </div>

            {/* COPYRIGHT */}
            <div
                style={{
                    marginTop: "50px",
                    textAlign: "center",
                    borderTop: "1px solid #222",
                    paddingTop: "20px",
                    color: "#777"
                }}
            >
                © 2026 Comunidade Vila Moraes • Todos os direitos reservados.
            </div>

        </footer>
    );
}

export default Footer;