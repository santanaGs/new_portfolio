import { Container } from "../../../Global";
import { ButtonsDiv, GitHub, LinkedIn, LinkedInLogo, SubTitle, Title, TitleDiv } from "./styles";
import { motion, useSpring, useScroll } from "motion/react"

// Images
import linkedin from '../../../../public/linkedin.svg'
import github from '../../../../public/github.svg'

export default function Hero() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    return (
        <Container>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 7,
                    originX: 0,
                    backgroundColor: "#6518B4",
                }}
            />
            <motion.section
            style={{ gap: '1rem', display: 'flex', flexDirection: 'column', marginTop: '3.75rem' }}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 2 }}
            >
                <TitleDiv>
                    <SubTitle>Olá, eu sou</SubTitle>
                    <Title>Gabriel Santana</Title>
                    <SubTitle>Desenvolvedor Full stack</SubTitle>
                </TitleDiv>
                <ButtonsDiv>
                    <LinkedIn href="https://www.linkedin.com/in/gabriel-santana-4422a524a/" target="_blank">
                        <LinkedInLogo src={linkedin}/>
                        LinkedIn
                    </LinkedIn>
                    <GitHub href="https://github.com/santanaGs" target="_blank">
                        <LinkedInLogo src={github}/>
                        GitHub
                    </GitHub>
                </ButtonsDiv>
            </motion.section>
        </Container>
    )
}
