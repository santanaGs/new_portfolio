import { motion, useScroll, useSpring } from "motion/react";
import { Container } from "../../../Global";
import { ButtonsDiv, HeroContent, HeroCopy, HeroImageFrame, HeroSection, Intro, Label, ProfileImage, SocialLink, SocialLinks, Status, Subtitle, Title } from "./styles";

const linkedInUrl = "https://www.linkedin.com/in/gabriel-santana-mobile-dev/";

export default function Hero() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <HeroSection id="home" aria-labelledby="hero-title">
            <motion.div
                aria-hidden="true"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                    height: 3,
                    originX: 0,
                    backgroundColor: "var(--color-accent)",
                }}
            />
            <Container>
                <HeroContent>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                    >
                        <HeroCopy>
                            <Label>Mobile Developer <span>·</span> React Native &amp; TypeScript</Label>
                            <Intro>Olá, eu sou</Intro>
                            <Title id="hero-title">Gabriel <span>Santana.</span></Title>
                            <Subtitle>
                                Desenvolvedor Mobile Pleno na Catho, construindo experiências para mais de 1 milhão de usuários.
                            </Subtitle>
                            <Status><span aria-hidden="true" /> Atualmente na Catho <span className="divider">·</span> São Paulo, Brasil</Status>
                            <ButtonsDiv>
                                <a className="primary" href="#projects">Conheça meus projetos <span aria-hidden="true">↗</span></a>
                                <a className="secondary" href={linkedInUrl} target="_blank" rel="noopener noreferrer">Vamos conversar</a>
                            </ButtonsDiv>
                            <SocialLinks aria-label="Redes profissionais">
                                <SocialLink href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></SocialLink>
                                <SocialLink href="https://github.com/santanaGs" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></SocialLink>
                            </SocialLinks>
                        </HeroCopy>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
                    >
                        <HeroImageFrame>
                            <ProfileImage src="/gabriel-santana.jpg" alt="Gabriel Santana" />
                            <div className="image-caption">
                                <span className="caption-dot" />
                                <span>Mobile first. Código com propósito.</span>
                            </div>
                        </HeroImageFrame>
                    </motion.div>
                </HeroContent>
            </Container>
        </HeroSection>
    );
}
