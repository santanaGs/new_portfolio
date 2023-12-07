import { Container } from "../../../Global";
import { AboutTitle, ButtonLogo, Buttons, City, Content, Desc, DivButtons, DivCityDesc, Icon, Image, Left, Right, Section, SociaisDiv } from "./styles";

// image
import me from '../../../../public/1699491364289.jpg'
import facebook from '../../../../public/facebook.svg'
import twitter from '../../../../public/twitter.svg'
import curriculo from '../../../../public/download-cloud.svg'
import email from '../../../../public/mail.svg'

export default function About() {
    return (
        <Section id="about">
            <Container>
                <Content>
                    <Left>
                        <Image src={me} />
                    </Left>
                    <Right>
                        <AboutTitle>sobre mim</AboutTitle>
                        <DivCityDesc>
                            <City>São Paulo, Brasil</City>
                            <Desc>Com meus 20 anos de idade, mergulho diariamente no fascinante universo da análise e desenvolvimento de software. Sou um entusiasta apaixonado pela tecnologia, trilhando meu caminho como desenvolvedor full stack júnior. Nessa jornada desafiadora, tenho a oportunidade de explorar tanto o front-end quanto o back-end, construindo soluções completas e integradas.</Desc>
                        </DivCityDesc>
                        <SociaisDiv>
                            <Icon src={facebook}/>
                            <Icon src={twitter}/>
                        </SociaisDiv>
                        <DivButtons>
                            <Buttons href={me} download='curriculo'>
                                <ButtonLogo src={curriculo}/>
                                Curriculo
                            </Buttons>
                            <Buttons>
                                <ButtonLogo src={email}/>
                                E-mail
                            </Buttons>
                        </DivButtons>
                    </Right>
                </Content>
            </Container>
        </Section>
    )
}