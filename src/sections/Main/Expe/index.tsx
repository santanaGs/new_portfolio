import React, { useState } from 'react';
import { Container } from "../../../Global";
import { Section } from "../About/styles";
import { ExperienceDiv, OptionTitle, Options, OptionsDiv, OptionsSelects, Title } from "./styles";
import ExperienceDesc from './components/Description';

interface SelectProps {
    select?: boolean | undefined,
    title: string,
    date: string,
    subtitle: string,
    description: string
}

const experiences: SelectProps[] = [
    {
        title: 'Auxiliar administrativo',
        date: '2019 - Mar 2023',
        subtitle: 'Encanto Baby',
        description: 'Como Auxiliar Administrativo, mergulhei de cabeça em diversas áreas, desempenhando um papel fundamental para o bom funcionamento da empresa ...'
    },
    {
        "title": "Estagiário Full Stack",
        "date": "Mar 2023 - Out 2023",
        "subtitle": "Upper - Estágio",
        "description": "Durante o meu período como estagiário, tive a incrível oportunidade de trabalhar com tecnologias modernas e desempenhar um papel ativo em projetos desafiadores. \n\nComo estagiário Full Stack, trabalhei tanto no desenvolvimento front-end quanto no back-end de aplicações. Utilizei tecnologias como JavaScript para a construção de interfaces dinâmicas e React.js para criar experiências de usuário envolventes."
    },
    {
        "title": "Desenvolvedor Júnior Full Stack",
        "date": "Nov 2023 - Atual",
        "subtitle": "Upper - Júnior",
        "description": "Após de me dedicar muito como estagiário, tive a incrível oportunidade de me tornar Desenvolvedor Júnior e melhorar meus estudos com tecnologias modernas e desempenhar um papel ativo em projetos desafiadores. \n\nUtilizei tecnologias como JavaScript para a construção de interfaces dinâmicas e React.js para criar experiências de usuário envolventes. \n\nParticipei ativamente do desenvolvimento mobile utilizando React Native, permitindo que eu ampliasse minhas habilidades para criar aplicativos eficientes e funcionais para diversas plataformas."
    },

]

export default function Experience() {
    // Variables
    const [expercience, setExperience] = useState<string>('Encanto Baby');

    const [title, setTitle] = useState<string>('Auxiliar administrativo');
    const [date, setDate] = useState<string>('2019 - MAR/2023');
    const [subtitle, setSubtitle] = useState<string>('Encanto Baby');
    const [description, setDescription] = useState<string>('Como Auxiliar Administrativo, mergulhei de cabeça em diversas áreas, desempenhando um papel fundamental para o bom funcionamento da empresa ...');

    const formatDescription = (desc: string) => {
        return desc.split('\n').map((paragraph, index) => (
            <React.Fragment key={index}>
                {index > 0 && <br />} {/* Adiciona <br> apenas entre parágrafos, não antes do primeiro */}
                {paragraph}
            </React.Fragment>
        ));
    };

    // Rendering
    return (
        <Section>
            <Container>
                <Title>experiência</Title>
                <OptionsDiv>
                    <OptionsSelects>
                        {experiences.map((item, index) => {
                            return (
                                <Options active={item.subtitle === expercience} key={index} onClick={() => {
                                    setExperience(item.subtitle)
                                    setTitle(item.title)
                                    setDate(item.date)
                                    setSubtitle(item.subtitle)
                                    setDescription(item.description)
                                }}>
                                    <OptionTitle>{item.subtitle}</OptionTitle>
                                </Options>
                            )
                        })}
                    </OptionsSelects>
                    <ExperienceDesc
                        title={title}
                        date={date}
                        subtitle={subtitle}
                        description={formatDescription(description)}
                    />
                </OptionsDiv>
            </Container>
        </Section>
    )
}