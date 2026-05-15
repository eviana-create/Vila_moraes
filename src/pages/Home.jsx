import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Container from "../components/Container";
import { historia, avisos } from "../data/conteudo";
import { Link } from "react-router-dom";

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
                fontWeight: "bold",
                transition: "0.3s"
                }}
            >
                Conheça a Associação →
            </Link>
            </div>

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
                    <h3>Projeto Um Dia de Criança</h3>
                    <p style={{ fontSize: "14px", color: "#ccc"}}>
                        o Projeto Um Dia de Criança começou com o sonho de um grupo de amigos
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
                            Assim como o projeto Um Dia de Criança, a ação de Páscoa leva alegria 
                            para as crianças da comunidade com distribuição de ovos de chocolate,
                            promovendo momentos especiais e fortalecendo os laços entre moradores.
                        </p>

                    <a href="/projetopáscoa" style={{
                        display: "inline-block",
                        marginTop: "10px",
                        color: "#ff9800",
                        textDecoration: "none",
                        fontWeight: "bold"
                    }}>Saiba Mais
                    </a>
                    </div>

                    </div> 

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
            {/* IMAGEM */}
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

            {/* TEXO */}
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
                A horta comunitária da Vila Moraes representa muito mais do que
                o cultivo de alimentos.
                </p>

                <br />

                <p
                style={{
                    color: "#ccc",
                    lineHeight: "1.8",
                    fontSize: "16px"
                }}
                >
                Ela simboliza união, cuidado com a comunidade, sustentabilidade
                e o compromisso coletivo em construir um ambiente melhor para todos.
                </p>

                <br />

                <p
                style={{
                    color: "#ccc",
                    lineHeight: "1.8",
                    fontSize: "16px"
                }}
                >
                O espaço reúne moradores, voluntários e famílias em uma iniciativa
                que incentiva a alimentação saudável, o trabalho em equipe e o
                fortalecimento dos laços comunitários.
                </p>

                {/* BOTÃO */}
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

            {/*AVISOS*/}
           <section id="avisos" style={{ scrollMarginTop: "80px" }}>
  <Card>
    <h2>📢 Avisos da Comunidade</h2>

    <p style={{ color: "#ccc", marginBottom: "20px" }}>
      Fique por dentro das melhorias, ações sociais,
      projetos e comunicados importantes da Vila Moraes.
    </p>

    {/* AVISO EM DESTAQUE */}
    <div
      style={{
        background: "#1f1f1f",
        padding: "20px",
        borderRadius: "15px",
        marginBottom: "20px",
        borderLeft: "5px solid #2196f3"
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>
        💧 Regularização de Água
      </h3>

      <p style={{ color: "#ccc", lineHeight: "1.7" }}>
        A SABESP está oferecendo oportunidade para regularização
        de débitos, instalação de caixas d’água e novos registros
        para moradores da comunidade.
      </p>

      {/* BOTÃO */}
      <a
        href="/avisos"
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
      </a>
    </div>

    {/* LISTA DE AVISOS */}
    <ul>
      {avisos.map((aviso, i) => (
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
    
            {/*BOTÃO DE APOIO*/}
            <button
            onClick={() => window.open("http://www.youtube.com")}
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