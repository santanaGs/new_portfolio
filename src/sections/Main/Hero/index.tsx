import { Container } from "../../../Global";
import { ButtonsDiv, GitHub, LinkedIn, LinkedInLogo, Section, SubTitle, Title, TitleDiv } from "./styles";

// Images
import linkedin from '../../../../public/linkedin.svg'
import github from '../../../../public/github.svg'

export default function Hero() {
    return (
        <Container>
            <Section>
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
            </Section>
        </Container>
    )
}