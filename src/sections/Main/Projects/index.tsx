import { Container } from "../../../Global";
import Item from "../../../components/Project";
import { Section } from "../About/styles";
import { Title } from "../Expe/styles";
import { Grid } from "./styles";

interface ProjectsProps{
    image: string,
    title: string,
    description: string,
    tech: string,
    link: string,
}


const projects : ProjectsProps[] = [
    {
        image: 'https://imgur.com/2hn6VA3.png',
        title: 'Naped News',
        description: 'Blog de animes, filmes, série e entres outras opções.',
        tech: 'Next JS | Styled Components',
        link: 'https://naped-news.vercel.app/'
    },
    {
        image: 'https://imgur.com/Sqd3TM3.png',
        title: 'Lista de tarefas',
        description: 'TO-DO LIST para organização de tarefas do dia a dia.',
        tech: 'HTML | CSS | JAVASCRIPT',
        link: 'https://to-do-list-smoky-alpha.vercel.app/#'
    },
    {
        image: 'https://imgur.com/qM20uJa.png',
        title: 'La Pizza',
        description: 'Lading Page para cardápio de pizzaria.',
        tech: 'React JS | Styled Components | Swiper JS',
        link: 'https://la-pizza-topaz.vercel.app/'
    },
    {
        image: 'https://imgur.com/tJZ1jxa.png',
        title: 'Ari Barber',
        description: 'Lading Page para salão de cabeleiro com funcionalidade de agendamento via WhatsApp.',
        tech: 'React JS | Styled Components | API WhatsApp',
        link: 'https://ari-barber.vercel.app/'
    },
    {
        image: 'https://imgur.com/j5O5pZz.png',
        title: 'Lista de tarefas - Mobile',
        description: 'TO-DO LIST para organização de tarefas do dia a dia direto do smartphone.',
        tech: 'React Native | Styled Components | Firebase',
        link: 'https://github.com/santanaGs/loginNative'
    },
    {
        image: 'https://imgur.com/ckB1Bfj.png',
        title: 'Chat App',
        description: 'Sistema de Chat em grupo direto na WEB.',
        tech: 'React JS | Styled Components | Firebase',
        link: 'https://github.com/santanaGs/'
    },
]

export default function Projects() {
    return (
        <Section id="projects">
            <Container>
                <Title>projetos</Title>
                <Grid>
                {projects.map((project, index) => {
                    return(
                        <Item
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        link={project.link}
                        />
                    )
                })}
                </Grid>
            </Container>
        </Section>
    )
}