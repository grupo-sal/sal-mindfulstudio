import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/sal-logo.png.asset.json";
import galeria1 from "@/assets/galeria-1.jpg.asset.json";
import galeria2 from "@/assets/galeria-2.jpg.asset.json";
import galeria3 from "@/assets/galeria-3.jpg.asset.json";
import galeria4 from "@/assets/galeria-4.jpg.asset.json";

const galeria = [
  { src: galeria1.url, alt: "Sala de aulas do SAL Mindful Studio", legenda: "A sala" },
  { src: galeria2.url, alt: "Reformer de Pilates no estúdio", legenda: "Reformer" },
  { src: galeria3.url, alt: "Momento de respiração consciente numa aula", legenda: "Respiração" },
  { src: galeria4.url, alt: "Aluna em prática de Yoga no estúdio", legenda: "Prática" },
];


const TITLE = "SAL Mindful Studio | Yoga, Pilates e Aulas de Grupo em Espinho";
const DESC =
  "SAL Mindful Studio — estúdio de Yoga, Pilates e aulas de grupo em Espinho. Movimento consciente, respiração controlada e mobilidade sem esforço. Marca a tua aula.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_PT" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MARCACOES = "https://tally.so/r/KYRAJM";

const aulas = [
  { icon: "💪", nome: "Core", texto: "Aula curta, intensa e eficaz, 100% dedicada a fortalecer a zona abdominal e lombar — para melhor postura e menos dores nas costas." },
  { icon: "💦", nome: "Flow", texto: "A aula mais intensa do estúdio: sequência rápida e dinâmica, sem pausas longas, só transições e ritmo até ao fim." },
  { icon: "🫴", nome: "Pilates de Solo", texto: "Só tu e o tapete. Controlo da respiração, ativação do core e movimentos precisos que fortalecem sem impacto nas articulações." },
  { icon: "🍃", nome: "Reset", texto: "Meditação guiada para reprogramar corpo e mente, sem pressa. Respiração consciente e regulação do sistema nervoso." },
  { icon: "🧘", nome: "Yoga", texto: "Corpo e mente num só. Flexibilidade, equilíbrio e força — para todos os níveis, do primeiro toque no tapete a quem já o sabe de cor." },
  { icon: "✨", nome: "Sculpt", texto: "Séries de repetições controladas com cargas leves, para tonificar pernas, glúteos e braços sem nunca exagerar." },
  { icon: "🙆‍♀️", nome: "Stretch", texto: "Alonga, alivia a tensão acumulada e devolve amplitude às articulações, com trabalho de mobilidade guiado e progressivo." },
  { icon: "🎯", nome: "Pilates de Aparelhos", texto: "Reformer e Wall Units, em grupo ou sessões privadas. Força, postura e flexibilidade com precisão e segurança — ideal também para recuperação de lesões." },
];

const porque = [
  { mark: "I", titulo: "Acompanhamento ao teu ritmo", texto: "Sejas principiante ou já experiente, cada aula adapta-se a ti — nunca o contrário." },
  { mark: "II", titulo: "Equipamento profissional", texto: "Reformer e Wall Units para um Pilates de aparelhos completo, em grupo ou privado." },
  { mark: "III", titulo: "Um estúdio, dois mundos", texto: "A energia do treino e o silêncio da meditação guiada, sob o mesmo teto." },
  { mark: "IV", titulo: "Horários que encaixam no teu dia", texto: "Aulas de manhã cedo ao final da tarde, de segunda a sábado. Escolhes o horário, nós tratamos do resto." },
];

const horario = [
  ["Domingo", "Encerrado"],
  ["Segunda", "7h – 20h"],
  ["Terça", "7h – 20h"],
  ["Quarta", "7h – 20h"],
  ["Quinta", "7h – 20h"],
  ["Sexta", "7h – 20h"],
  ["Sábado", "8h30 – 13h"],
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".sal-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [hoje, setHoje] = useState<number | null>(null);

  useReveal();

  useEffect(() => {
    setHoje(new Date().getDay());
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["#sobre", "Sobre"],
    ["#aulas", "Aulas"],
    ["#porque", "Porquê nós"],
    ["#galeria", "Galeria"],
    ["#visita", "Visita-nos"],
  ];

  return (
    <div className="sal">
      <header className={`sal-header ${scrolled ? "scrolled" : ""}`}>
        <div className="sal-container sal-nav-row">
          <a href="#topo" className="sal-logo">
            SAL <span>·</span> Mindful Studio
          </a>
          <button className="sal-burger" aria-label="Abrir menu" onClick={() => setMenu((m) => !m)}>
            <span />
            <span />
            <span />
          </button>
          <nav className={`sal-links ${menu ? "open" : ""}`}>
            {nav.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <a
              href={MARCACOES}
              target="_blank"
              rel="noopener"
              className="sal-btn sal-btn-outline"
              style={{ padding: "11px 24px" }}
            >
              Pré-inscrição
            </a>
          </nav>
        </div>
      </header>

      <section className="sal-hero" id="topo">
        <div className="sal-container">
          <div className="sal-hero-grid">
            <div className="sal-reveal in">
              <span className="sal-status">
                <i /> Estúdio em Espinho
              </span>
              <h1>
                O lugar onde <em>voltas</em> a ti.
              </h1>
              <p className="sal-lead">
                Yoga, Pilates e aulas de grupo em Espinho, para um movimento mais consciente, respiração controlada
                e mobilidade sem esforço. Com proximidade, seriedade e o profissionalismo que nos
                caracteriza.
              </p>
              <div className="sal-hero-actions">
                <a href={MARCACOES} target="_blank" rel="noopener" className="sal-btn sal-btn-primary">
                  Pré-inscrição
                </a>
                <a href="#aulas" className="sal-btn sal-btn-outline">
                  Ver as aulas
                </a>
              </div>
            </div>

            <div className="sal-hero-visual sal-reveal in">
              <img className="sal-logo-mark" src={logoAsset.url} alt="SAL Mindful Studio — logótipo" />
            </div>
          </div>
        </div>
        <div className="sal-scroll-cue">
          <span className="line" /> Descobre o SAL
        </div>
      </section>

      <section className="sal-section" id="sobre">
        <div className="sal-container sal-sobre-grid">
          <div className="sal-reveal">
            <span className="sal-eyebrow">Sobre o SAL</span>
            <div className="sal-divider" />
            <h2 className="sal-h2" style={{ maxWidth: "9ch" }}>
              Uma missão, sempre a mesma.
            </h2>
          </div>
          <div className="sal-reveal">
            <p className="sal-lead-text">“Levar a saúde a cada vez mais pessoas.”</p>
            <p className="sal-body">
              É essa a missão que nos move desde o primeiro dia — com a mesma proximidade,
              seriedade e profissionalismo que nos caracterizam em tudo o que fazemos.
            </p>
            <p className="sal-body">
              O SAL Mindful Studio é, em Espinho, o espaço onde o movimento deixa de ser mais uma
              tarefa do dia e passa a ser um momento só teu: respiração consciente, força
              construída com intenção e um corpo que aprende a mover-se sem pressa.
            </p>

            <div className="sal-pilares">
              <div className="sal-pilar">
                <span className="num">01</span>
                <h4>Proximidade</h4>
                <p>Um estúdio pensado à escala humana, onde cada pessoa é acompanhada de perto.</p>
              </div>
              <div className="sal-pilar">
                <span className="num">02</span>
                <h4>Seriedade</h4>
                <p>Aulas estruturadas, com progressão real e atenção a cada corpo e a cada limite.</p>
              </div>
              <div className="sal-pilar">
                <span className="num">03</span>
                <h4>Profissionalismo</h4>
                <p>O rigor técnico do Pilates de aparelhos aliado à presença consciente das nossas aulas de bem-estar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sal-section sal-dark" id="aulas">
        <div className="sal-container">
          <div className="sal-servicos-head sal-reveal">
            <span className="sal-eyebrow">As aulas</span>
            <div className="sal-divider" />
            <h2 className="sal-h2">Um movimento para cada momento.</h2>
            <p className="sal-body" style={{ marginTop: 18 }}>
              Da intensidade do Flow ao silêncio do Reset — encontra a aula que o teu corpo pede
              hoje.
            </p>
          </div>

          <div className="sal-servicos-grid sal-reveal">
            {aulas.map((a) => (
              <div className="sal-servico" key={a.nome}>
                <span className="icon">{a.icon}</span>
                <h3>{a.nome}</h3>
                <p>{a.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sal-section" id="porque">
        <div className="sal-container sal-porque-inner">
          <div className="sal-reveal">
            <span className="sal-eyebrow">Porquê o SAL</span>
            <div className="sal-divider" />
            <h2 className="sal-h2" style={{ maxWidth: "10ch" }}>
              Força que não se mede em quilos.
            </h2>
            <p className="sal-body" style={{ marginTop: 20 }}>
              Calma que não depende do dia que tiveste. Um corpo que te carrega, em vez de te
              pesar. É assim que queremos que te sintas depois de cada aula.
            </p>
          </div>

          <div className="sal-reveal">
            {porque.map((p) => (
              <div className="sal-porque-item" key={p.mark}>
                <span className="mark">{p.mark}</span>
                <div>
                  <h4>{p.titulo}</h4>
                  <p>{p.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sal-section" id="galeria">
        <div className="sal-container">
          <div className="sal-reveal" style={{ maxWidth: 640, marginBottom: 56 }}>
            <span className="sal-eyebrow">Galeria</span>
            <div className="sal-divider" />
            <h2 className="sal-h2">O estúdio, por dentro.</h2>
            <p className="sal-body" style={{ marginTop: 18 }}>
              Luz suave, silêncio e equipamento profissional. Um espaço pensado para te
              sentires em casa desde a primeira respiração.
            </p>
          </div>

          <div className="sal-galeria sal-reveal">
            {galeria.map((g, i) => (
              <figure className="sal-galeria-item" key={g.src}>
                <img src={g.src} alt={g.alt} loading="lazy" width={1024} height={1280} />
                <figcaption>{String(i + 1).padStart(2, "0")} — {g.legenda}</figcaption>
              </figure>
            ))}
          </div>

          <div className="sal-galeria-more sal-reveal">
            <a href="https://www.instagram.com/salmindfulstudio/" target="_blank" rel="noopener">
              Ver mais no Instagram <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="sal-section sal-dark" id="visita">
        <div className="sal-container">
          <span className="sal-eyebrow">Visita-nos</span>
          <div className="sal-divider" />
          <h2 className="sal-h2">Onde e quando encontrar-nos.</h2>

          <div className="sal-visita-grid" style={{ marginTop: 50 }}>
            <div className="sal-reveal">
              <div style={{ marginTop: 30 }}>
                <p className="sal-body">Morada</p>
                <p className="sal-endereco">
                  Rua José Novo, n.º 87
                  <br />
                  4500-479 Silvalde, Espinho
                </p>
                <div style={{ marginTop: 22, display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Rua+Jos%C3%A9+Novo+87+4500-479+Silvalde+Espinho"
                    target="_blank"
                    rel="noopener"
                    className="sal-btn sal-btn-outline"
                  >
                    Como chegar
                  </a>
                </div>
              </div>


              <table className="sal-horario">
                <tbody>
                  {horario.map(([dia, horas], i) => (
                    <tr key={dia} className={hoje === i ? "hoje" : undefined}>
                      <td>{dia}</td>
                      <td>{horas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sal-mapa sal-reveal">
              <iframe
                src="https://www.google.com/maps?q=Rua+Jos%C3%A9+Novo+87,+4500-479+Silvalde,+Espinho&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa — SAL Mindful Studio, Espinho"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sal-cta">
        <div className="sal-cta-frame sal-reveal">
          <span className="sal-eyebrow sal-cta-eyebrow">Marcações</span>
          <h2>
            O teu momento <em>começa aqui.</em>
          </h2>
          <p>
            Escolhe a aula, marca o teu lugar e vem mover-te connosco no SAL Mindful Studio, em
            Espinho.
          </p>
          <a href={MARCACOES} target="_blank" rel="noopener" className="sal-btn sal-btn-primary">
            Pré-inscrição
          </a>
          <div className="sal-cta-meta">
            <span>Vagas limitadas por aula</span>
            <span className="sal-cta-dot" />
            <span>Acompanhamento personalizado</span>
          </div>
        </div>
      </section>


      <footer className="sal-footer">
        <div className="sal-container">
          <div className="sal-footer-grid">
            <div>
              <span className="sal-logo">
                SAL <span>·</span> Mindful Studio
              </span>
              <p style={{ maxWidth: "34ch" }}>Yoga, Pilates e aulas de grupo em Espinho. O lugar onde voltas a ti.</p>
            </div>
            <div>
              <div className="sal-col-title">Navegação</div>
              <ul>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#aulas">Aulas</a>
                </li>
                <li>
                  <a href="#visita">Visita-nos</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="sal-col-title">Contacto</div>
              <ul>
                <li>
                  <a href="https://www.instagram.com/salmindfulstudio/" target="_blank" rel="noopener">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={MARCACOES} target="_blank" rel="noopener">
                    Pré-inscrição
                  </a>
                </li>
                <li>Rua José Novo, n.º 87, Espinho</li>
              </ul>
            </div>
          </div>
          <div className="sal-footer-bottom">
            <span>© {new Date().getFullYear()} SAL Mindful Studio. Todos os direitos reservados.</span>
            <span>Espinho, Portugal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
