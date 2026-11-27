import { motion } from "motion/react";
import { Container } from "../../../Global";
import { AboutTitle, AboutLinks, AboutText, City, Content, Image, Section, SectionEyebrow, Skills, Skill, SkillsLabel } from "./styles";

const skills = ["React Native", "Expo", "TypeScript", "Laravel", "React.js", "JavaScript"];

export default function About() {
    return (
        <Section id="about" aria-labelledby="about-title">
            <Container>
                <SectionEyebrow>Sobre mim</SectionEyebrow>
                <Content>
                    <motion.div
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Image src="/gabriel-santana.jpg" alt="Gabriel Santana, desenvolvedor mobile" loading="lazy" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    >
                        <AboutText>
                            <AboutTitle id="about-title">Tecnologia que faz diferença na vida real.</AboutTitle>
                            <City>São Paulo, Brasil <span>·</span> Remoto</City>
                            <div className="biography">
                                <p>
                                    Sou desenvolvedor full stack pleno, com foco em React Native e TypeScript. Hoje participo da migração do aplicativo da Catho, usado por mais de 1 milhão de usuários Android, para React Native com Expo.
                                </p>
                                <p>
                                    Gosto de resolver problemas desde a causa: contribuo com decisões de arquitetura usando Clean Architecture, MVVM e SOLID, além de manter uma biblioteca interna que padroniza integrações com APIs.
                                </p>
                                <p>
                                    Na Upper Rocks, trabalhei em sistemas de ponta a ponta com React Native, Laravel e MySQL. Também colaboro com equipes internacionais de produto e desenvolvimento.
                                </p>
                            </div>
                            <SkillsLabel>Principais tecnologias</SkillsLabel>
                            <Skills aria-label="Principais tecnologias">
                                {skills.map((skill) => <Skill key={skill}>{skill}</Skill>)}
                            </Skills>
                            <AboutLinks>
                                <a href="https://www.linkedin.com/in/gabriel-santana-mobile-dev/" target="_blank" rel="noopener noreferrer">Perfil no LinkedIn <span aria-hidden="true">↗</span></a>
                                <a href="https://github.com/santanaGs" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                            </AboutLinks>
                        </AboutText>
                    </motion.div>
                </Content>
            </Container>
        </Section>
    );
}
