import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Container } from "../../../Global";
import { Section } from "../About/styles";
import { OptionTitle, Options, OptionsDiv, OptionsSelects, Title } from "./styles";
import ExperienceDesc from "./components/Description";

interface Experience {
    title: string;
    date: string;
    company: string;
    description: string;
}

const experiences: Experience[] = [
    {
        title: "Mobile Developer Pleno",
        date: "Mar 2025 — atual",
        company: "Catho · Redarbor Brasil",
        description: "Participo da migração do aplicativo nativo da Catho, usado por mais de 1 milhão de usuários Android, para React Native com Expo.\n\nContribuo nas decisões de arquitetura com Clean Architecture, MVVM e SOLID. Também mantenho uma biblioteca interna NPM para padronizar integrações com APIs externas e crio componentes reutilizáveis e padrões de código para o time.\n\nTrabalho em colaboração com equipes de produto e desenvolvimento do México e da Espanha.",
    },
    {
        title: "Desenvolvedor Full Stack Júnior III",
        date: "Abr 2024 — mar 2025",
        company: "Upper Rocks · Tempo integral",
        description: "Atuei no desenvolvimento ponta a ponta de dois aplicativos, combinando React Native no mobile e Laravel no back-end.\n\nNo QuickLink, contribuí com a base Laravel e o painel administrativo para gerenciar registros, APIs, relatórios, gráficos e exportações para Excel. Para lidar com a lentidão causada pelo volume de dados, ajudei a implementar paginação e otimizar consultas.\n\nNo Edukativo, participei de um sistema de gestão escolar e implementei download e cache de imagens no dispositivo, incluindo o tratamento de permissões de armazenamento.",
    },
    {
        title: "Estagiário de Desenvolvimento Front-end",
        date: "Nov 2023 — abr 2024",
        company: "Upper Rocks · Estágio",
        description: "Criei telas web usando HTML, CSS e JavaScript, transformando layouts em interfaces funcionais em parceria com o time de desenvolvimento.",
    },
];

export default function Experience() {
    const [experience, setExperience] = useState(experiences[0]);

    return (
        <Section id="experience" aria-labelledby="experience-title">
            <Container>
                <Title id="experience-title">Experiência</Title>
                <OptionsDiv>
                    <OptionsSelects aria-label="Histórico profissional">
                        {experiences.map((item) => (
                            <Options
                                type="button"
                                active={item === experience}
                                aria-pressed={item === experience}
                                key={item.company}
                                onClick={() => setExperience(item)}
                            >
                                <OptionTitle>{item.company}</OptionTitle>
                            </Options>
                        ))}
                    </OptionsSelects>
                    <AnimatePresence mode="wait" initial={false}>
                        <ExperienceDesc key={experience.company} {...experience} />
                    </AnimatePresence>
                </OptionsDiv>
            </Container>
        </Section>
    );
}
