import { Container } from "../../Global"
import { Logo } from "../Header/styles"
import { Content, Text } from "./styles"

export const Footer = () => {
    return(
        <Container>
            <Content>
                <Text>@ 2023 - Gabriel Santana</Text>
                <Logo>Santana</Logo>
            </Content>
        </Container>
    )
}