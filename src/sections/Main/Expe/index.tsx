import React, { useState } from 'react';
import { Container } from "../../../Global";
import { Section } from "../About/styles";
import { OptionTitle, Options, OptionsDiv, OptionsSelects, Title } from "./styles";
import ExperienceDesc from './components/Description';

interface SelectProps {
    select?: boolean | undefined,
    title: string,
    date: string,
    subtitle: string,
    description: any
}

const experiences: SelectProps[] = [
    {
        "title": "Estagiário Full Stack",
        "date": "Mar 2023 - Out 2023",
        "subtitle": "Upper - Estágio",
        "description": "Durante o meu período como estagiário, tive a incrível oportunidade de trabalhar com tecnologias modernas e desempenhar um papel ativo em projetos desafiadores. \n\nComo estagiário Full Stack, trabalhei tanto no desenvolvimento front-end quanto no back-end de aplicações. Utilizei tecnologias como JavaScript para a construção de interfaces dinâmicas e React.js para criar experiências de usuário envolventes."
    },
    {
        "title": "Desenvolvedor Júnior I Full Stack",
        "date": "Nov 2023 - Abr 2024",
        "subtitle": "Upper - Júnior I",
        "description": "Após de me dedicar muito como estagiário, tive a incrível oportunidade de me tornar Desenvolvedor Júnior e melhorar meus estudos com tecnologias modernas e desempenhar um papel ativo em projetos desafiadores. \n\nUtilizei tecnologias como JavaScript para a construção de interfaces dinâmicas e React.js para criar experiências de usuário envolventes. \n\nParticipei ativamente do desenvolvimento mobile utilizando React Native, permitindo que eu ampliasse minhas habilidades para criar aplicativos eficientes e funcionais para diversas plataformas."
    },
    {
        "title": "Desenvolvedor Júnior III Full Stack",
        "date": "Abr 2024 - Atual",
        "subtitle": "Upper - Júnior III",
        "description": "Após me dedicar intensamente no meu papel como Desenvolvedor Júnior 1, tive a oportunidade de crescer e evoluir para o cargo de Desenvolvedor Júnior 3, onde pude aprimorar ainda mais minhas habilidades e conhecimentos. \n\nDurante essa trajetória, desempenhei um papel ativo em projetos desafiadores, trabalhando com tecnologias modernas e colaborando com equipes para criar soluções inovadoras. Utilizei tecnologias como JavaScript para o desenvolvimento de interfaces dinâmicas e React.js para construir experiências de usuário ricas e interativas.\n\nAlém disso, comecei a trabalhar com o framework Laravel, ampliando minhas competências no desenvolvimento backend, e com Inertia.js, o que me permitiu criar aplicações web modernas e dinâmicas, mantendo uma experiência de usuário fluida e altamente eficiente."
    }    

]

export default function Experience() {
    // Variables
    const [experience, setExperience] = useState<string>('Desenvolvedor Júnior III Full Stack');

    const [title, setTitle] = useState<string>('Auxiliar administrativo');
    const [date, setDate] = useState<string>('Abr 2024 - Atual');
    const [subtitle, setSubtitle] = useState<string>('Upper - Júnior III');
    const [description, setDescription] = useState<string>('Após me dedicar intensamente no meu papel como Desenvolvedor Júnior 1, tive a oportunidade de crescer e evoluir para o cargo de Desenvolvedor Júnior 3, onde pude aprimorar ainda mais minhas habilidades e conhecimentos. \n\nDurante essa trajetória, desempenhei um papel ativo em projetos desafiadores, trabalhando com tecnologias modernas e colaborando com equipes para criar soluções inovadoras. Utilizei tecnologias como JavaScript para o desenvolvimento de interfaces dinâmicas e React.js para construir experiências de usuário ricas e interativas.\n\nAlém disso, comecei a trabalhar com o framework Laravel, ampliando minhas competências no desenvolvimento backend, e com Inertia.js, o que me permitiu criar aplicações web modernas e dinâmicas, mantendo uma experiência de usuário fluida e altamente eficiente.');

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
        <Section id='experience'>
            <Container>
                <Title>experiência</Title>
                <OptionsDiv>
                    <OptionsSelects>
                        {experiences.map((item, index) => {
                            return (
                                <Options active={item.subtitle === experience} key={index} onClick={() => {
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