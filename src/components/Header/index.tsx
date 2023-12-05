import { Container } from "../../Global";
import { HeaderDiv, Logo, Nav, NavItem, NavLink, NavList } from "./styles";

export default function Header() {
    return (
        <Container>
            <HeaderDiv>
                <Logo>Santana</Logo>
                <Nav>
                    <NavList>
                        <NavItem><NavLink href="/">Home</NavLink></NavItem>
                        <NavItem><NavLink href="/">Sobre mim</NavLink></NavItem>
                        <NavItem><NavLink href="/">Experiência</NavLink></NavItem>
                        <NavItem><NavLink href="/">Projetos</NavLink></NavItem>
                    </NavList>
                </Nav>
            </HeaderDiv>
        </Container>
    )
}