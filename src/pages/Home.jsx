import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Container from "../components/Container";
import { historia, avisos } from "../data/conteudo";
import { Link } from "react-router-dom";

/* IMPORT DA IMAGEM */
import sabespImg from "../assets/sabesp.png";

function Home() {
    return (
        <div
            style={{
                background: "#121212",
                color: "#fff",
                minHeight: "100vh",
                fontFamily: "Arial",
                padding: "20px"
            }}
        >

            <Navbar />

            <Container>

                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "22px",
                        marginBottom: "20px"
                    }}
                >
                    Comunidade Vila Moraes
                </h1>

                {/* HISTÓRIA */}
                <section id="historia" style={{ scrollMarginTop: "80px" }}>
                    <Card>
                        <h2>Nossa História</h2>
                        <p>{historia}</p>
                    </Card>
                </section>

                {/* ASSOCIAÇÃO */}
                <div
                    style={{
                        background: "#1f1f1f",
                        padding: "30px",
                        borderRadius: "20px",
                        marginTop: "30px",
                        textAlign: "center"
                    }}
                >
                    <h2
                        style={{
                            fontSize: "22px",
                            marginBottom: "15px",
                            color: "#4caf50"
                        }}
                    >
                        Associação da Vila Moraes
                    </h2>

                    <p
                        style={{
                            color: "#ccc",
                            fontSize: "15px",
                            lineHeight: "1.8",
                            maxWidth: "700px",
                            margin: "0 auto 25px auto"
                        }}
                    >
                        Descubra os projetos sociais, ações comunitárias,
                        lideranças e iniciativas que ajudam a transformar
                        vidas e fortalecer a união da nossa comunidade.
                    </p>

                    <Link
                        to="/associacao"
                        style={{
                            display: "inline-block",
                            background: "#4caf50",
                            color: "#fff",
                            padding: "15px 35px",
                            borderRadius: "12px",
                            textDecoration: "none",
                            fontSize: "18px",
                            fontWeight: "bold"
                        }}
                    >
                        Conheça a Associação →
                    </Link>
                </div>

                {/* PROJETOS */}
                <section id="atividade" style={{ scrollMarginTop: "80px" }}>
                    <Card>
                        <h2>Projetos e Ações Sociais</h2>
                        <p>Iniciativas de projetos da comunidade</p>
                    </Card>
                </section>

                {/* HORTA */}
                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        background: "#1f1f1f",
                        padding: "20px",
                        borderRadius: "18px",
                        marginTop: "30px",
                        alignItems: "center",
                        flexWrap: "wrap",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
                    }}
                >

                    <img
                        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop"
                        alt="Horta Comunitária"
                        style={{
                            width: "280px",
                            height: "220px",
                            objectFit: "cover",
                            borderRadius: "15px",
                            flexShrink: 0
                        }}
                    />

                    <div style={{ flex: 1 }}>
                        <h2
                            style={{
                                color: "#4caf50",
                                fontSize: "30px",
                                marginBottom: "15px"
                            }}
                        >
                            🌱 Horta Comunitária
                        </h2>

                        <p
                            style={{
                                color: "#ccc",
                                lineHeight: "1.8",
                                fontSize: "16px"
                            }}
                        >
                            A horta comunitária da Vila Moraes representa
                            muito mais do que o cultivo de alimentos.
                        </p>

                        <br />

                        <p
                            style={{
                                color: "#ccc",
                                lineHeight: "1.8",
                                fontSize: "16px"
                            }}
                        >
                            Ela simboliza união, cuidado com a comunidade,
                            sustentabilidade e o compromisso coletivo em
                            construir um ambiente melhor para todos.
                        </p>

                        <Link
                            to="/horta"
                            style={{
                                display: "inline-block",
                                marginTop: "20px",
                                background: "#4caf50",
                                color: "#fff",
                                padding: "14px 28px",
                                borderRadius: "10px",
                                textDecoration: "none",
                                fontWeight: "bold"
                            }}
                        >
                            Conheça o Projeto →
                        </Link>
                    </div>
                </div>

                {/* AVISOS */}
                <section id="avisos" style={{ scrollMarginTop: "80px" }}>
                    <Card>

                        <h2>📢 Avisos da Comunidade</h2>

                        <p
                            style={{
                                color: "#ccc",
                                marginBottom: "20px"
                            }}
                        >
                            Fique por dentro das melhorias,
                            ações sociais, projetos e
                            comunicados importantes da Vila Moraes.
                        </p>

                        {/* CARD AVISO */}
                        <div
                            style={{
                                background: "#1f1f1f",
                                borderRadius: "15px",
                                overflow: "hidden",
                                marginBottom: "20px"
                            }}
                        >

                            {/* IMAGEM LOCAL */}
                            <img
                                src={sabespImg}
                                alt="Projeto SABESP"
                                style={{
                                    width: "100%",
                                    height: "220px",
                                    objectFit: "cover"
                                }}
                            />

                            {/* TEXTO */}
                            <div
                                style={{
                                    padding: "20px",
                                    borderLeft: "5px solid #2196f3"
                                }}
                            >

                                <h3 style={{ marginBottom: "10px" }}>
                                    💧 Regularização de Água
                                </h3>

                                <p
                                    style={{
                                        color: "#ccc",
                                        lineHeight: "1.7"
                                    }}
                                >
                                    A SABESP está oferecendo oportunidade
                                    para regularização de débitos,
                                    instalação de caixas d’água e novos
                                    registros para moradores da comunidade.
                                </p>

                                <Link
                                    to="/avisos"
                                    style={{
                                        display: "inline-block",
                                        marginTop: "15px",
                                        background: "#2196f3",
                                        color: "#fff",
                                        padding: "12px 22px",
                                        borderRadius: "10px",
                                        textDecoration: "none",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Saiba mais →
                                </Link>
                            </div>
                        </div>

                        {/* LISTA */}
                        <ul>
                            {avisos.map((aviso, i) => (
                                <li key={i}>{aviso}</li>
                            ))}
                        </ul>

                    </Card>
                </section>

                {/* REUNIÕES */}
                <section id="reunioes" style={{ scrollMarginTop: "80px" }}>
                    <Card>
                        <h2>Reuniões</h2>
                        <p>Próxima reunião será dia / / às :</p>
                    </Card>
                </section>

                {/* BOTÃO APOIO */}
                <button
                    onClick={() => window.open("http://k.kwai.com/w/smrS4wdh")}
                    style={{
                        marginTop: "30px",
                        padding: "25px",
                        width: "100%",
                        background: "#ff9800",
                        border: "none",
                        borderRadius: "10px",
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold"
                    }}
                >
                    Ajude a manter a página (Assista um Vídeo)
                </button>

            </Container>
        </div>
    );
}

export default Home;