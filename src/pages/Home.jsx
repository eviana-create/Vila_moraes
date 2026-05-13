import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Container from "../components/Container";
import { historia, avisos } from "../data/conteudo";

function Home() {
    return (
        <div style={{
            background: "#121212",
            color:"#fff",
            minHeight: "100vh",
            fontFamily: "Arial",
            padding: "20px"
        }}>

            <Navbar />

        <Container>
            <h1 style={{
                textAlign: "center",
                fontSize: "22px",
                marginBottom: "20px"
            }}>
                Comunidade Vila Moraes</h1>
            
            {/*HISTORIA*/}
            <section id="historia" style={{ scrollMarginTop: "80px"}}>
                <Card>
                    <h2>Nossa Historia</h2>
                    <p>{historia}</p>
                </Card>                
            </section>

            <section id="atividade" style={{ scrollMarginTop: "80px"}}>
                <Card>
                    <h2>Projetos e Ações Sociais</h2>
                    <p>Iniciativas de projetos da comunidade </p>
                </Card>
            </section>

            
            {/* CARD PROJETO CRIANÇA */}
                <div style={{
                    display: "flex",
                    gap: "15px",
                    background: "#1f1f1f",
                    padding: "15px",
                    marginTop: "20px",
                    alignItems: "center",
                    flexWrap: "wrap"

                }}>

                <img src="https://viaplaceholder.com/120x120" 
                alt="Projeto Criança por um Dia" 
                style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "10px"
                }}
                />

                <div style={{ flex: 1}}>
                    <h3>Projeto Criança por um Dia</h3>
                    <p style={{ fontSize: "14px", color: "#ccc"}}>
                        o Projeto Criança por um Dia começou com o sonho de um grupo de amigos
                        que cresceram juntos na comunidade desde dos anos 90.
                        Um sonho que conseguiram concretizar com a união dessa amizade somado ao apoio de outros amigos
                        de fora da comunidade(de outros bairros) e parcerias que contribuiram para tornar essa 
                        iniciativa realidade.
                    </p>

                    <a href= "/projeto-criança" style={{
                        display: "inline-block",
                        marginTop: "10px",
                        color: "#4caf50",
                        textDecoration: "none",
                        fontWeight: "bold"
                    }}>Saiba mais
                    </a>
                </div>

                </div>

                {/* CARD PÁSCOA */}    
               <div style={{
                    display: "flex",
                    gap: "15px",
                    background: "#1f1f1f",
                    padding: "15px",
                    borderRadius: "12px",
                    marginTop: "20px",
                    alignItems: "center",
                    flexWrap: "wrap"

                }}>
                    <img src="" alt="Projeto Páscoa" style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}/>

                    <div style={{ flex: 1}}>
                        <h3>Projeto Páscoa Solidaria</h3>

                        <p style={{ fontSize: "14px", color: "#ccc"}}>
                            Assim como o projeto Criança por um Dia, a ação de Páscoa leva alegria 
                            para as crianças da comunidade com distribuição de ovos de chocolate,
                            promovendo momentos especiais e fortalecendo os laços entre moradores.
                        </p>

                    <a href="/projeto0páscoa" style={{
                        display: "inline-block",
                        marginTop: "10px",
                        color: "#ff9800",
                        textDecoration: "none",
                        fontWeight: "bold"
                    }}>Saiba Mais
                    </a>
                    </div>

                    </div> 

            {/*AVISOS*/}
            <section id="avisos" style={{ scrollMarginTop: "80px"}}>
               <Card>
                 <h2>Avisos</h2>
                 <p style={{ color: "#ccc"}}>
                    Em breve novos avisos da comunidade serão publicados aqui.
                 </p>
                <ul>
                    {avisos.map((aviso, i) =>(
                        <li key={i}>{aviso}</li>
                    ))}
                </ul>
               </Card>
            </section>

            {/* REUNIÕES */}

            <section id="reunioes" style={{ scrollMarginTop: "80px"}}>
                <Card>
                    <h2>Reuniões</h2>
                    <p>Próxima reunião será dia /  / ás  :  </p>
                </Card>
            </section>
            <section id="atividade" style={{ scrollMarginTop: "80px"}}>
                <Card>
                    <h2>Projetos e Ações Sociais</h2>
                    <p>Iniciativas de projetos da comunidade </p>
                </Card>
            </section>

            {/*BOTÃO DE APOIO*/}
            <button
            onClick={() => window.open("http://bigwb.co/s/CB1Cm")}
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
                Ajude a manter a pagina(Assista um Video)
            </button>  

            </Container>

        </div>

    )
} 

export default Home;