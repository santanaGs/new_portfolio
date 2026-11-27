import { Container } from "../../../Global";
import Item from "../../../components/Project";
import { Grid, Section, SectionEyebrow, SectionTitle } from "./styles";

interface Project {
    image: string;
    title: string;
    description: string;
    tech: string;
    link: string;
    linkLabel?: string;
    repository?: string;
}

const projects: Project[] = [
    {
        image: "/todorn.png",
        title: "Lista de tarefas mobile",
        description: "Aplicativo de tarefas para organizar atividades do dia a dia no celular.",
        tech: "React Native · Firebase · Styled Components",
        link: "https://github.com/santanaGs/loginNative",
        linkLabel: "Ver código",
    },
    {
        image: "/chatapp.png",
        title: "Chat App",
        description: "Aplicação web de chat em grupo com autenticação e mensagens em tempo real.",
        tech: "React · Firebase · Styled Components",
        link: "https://github.com/santanaGs/",
        linkLabel: "Explorar GitHub",
    },
    {
        image: "/naped.png",
        title: "Naped News",
        description: "Blog de notícias sobre animes, filmes, séries e cultura geek.",
        tech: "Next.js · Styled Components",
        link: "https://naped-news.vercel.app/",
        linkLabel: "Ver demonstração",
        repository: "https://github.com/santanaGs/napedNews",
    },
    {
        image: "/barber.png",
        title: "Ari Barber",
        description: "Landing page para barbearia com agendamento de horário pelo WhatsApp.",
        tech: "React · Styled Components · WhatsApp API",
        link: "https://ari-barber.vercel.app/",
        linkLabel: "Ver demonstração",
        repository: "https://github.com/santanaGs/ariBaber",
    },
    {
        image: "/lapizza.png",
        title: "La Pizza",
        description: "Landing page para pizzaria com cardápio e navegação entre produtos.",
        tech: "React · Styled Components · Swiper",
        link: "https://la-pizza-topaz.vercel.app/",
        linkLabel: "Ver demonstração",
        repository: "https://github.com/santanaGs/LaPizza",
    },
    {
        image: "/todo.png",
        title: "Lista de tarefas web",
        description: "Aplicação simples para registrar e organizar tarefas do dia a dia.",
        tech: "HTML · CSS · JavaScript",
        link: "https://to-do-list-smoky-alpha.vercel.app/",
        linkLabel: "Ver demonstração",
    },
    {
        image: "https://imgur.com/taqexJQ.png",
        title: "SantanaPay",
        description: "Projeto que simula o fluxo de checkout de um e-commerce.",
        tech: "React · TypeScript · Node.js · Express · Sequelize · MySQL",
        link: "https://santanapay.vercel.app/",
        linkLabel: "Ver demonstração",
        repository: "https://github.com/santanaGs/santanapay",
    },
];

export default function Projects() {
    return (
        <Section id="projects" aria-labelledby="projects-title">
            <Container>
                <SectionEyebrow>Trabalhos selecionados</SectionEyebrow>
                <SectionTitle id="projects-title">Projetos em destaque</SectionTitle>
                <p className="section-description">Uma seleção de aplicações e experiências que construí ao longo da minha jornada.</p>
                <Grid>
                    {projects.map((project) => (
                        <Item key={project.title} {...project} />
                    ))}
                </Grid>
            </Container>
        </Section>
    );
}
