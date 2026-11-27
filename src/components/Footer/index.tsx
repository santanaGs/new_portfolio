import { Container } from "../../Global"
import { Logo } from "../Header/styles"
import { Content, Text } from "./styles"

export const Footer = () => {
    return(
        <Container>
            <Content>
                <Text>© {new Date().getFullYear()} Gabriel Santana</Text>
                <Logo href="#home" aria-label="Voltar ao início">GS<span>.</span></Logo>
            </Content>
        </Container>
    )
}