import { Container } from "../../Global";
import { HeaderContent, HeaderDiv, Logo, Nav, NavItem, NavLink, NavList } from "./styles";

export default function Header() {
    return (
        <HeaderDiv>
            <Container>
                <HeaderContent>
                    <Logo href="#home" aria-label="Gabriel Santana, início">GS<span>.</span></Logo>
                    <Nav aria-label="Navegação principal">
                        <NavList>
                            <NavItem><NavLink href="#home">Início</NavLink></NavItem>
                            <NavItem><NavLink href="#about">Sobre</NavLink></NavItem>
                            <NavItem><NavLink href="#experience">Experiência</NavLink></NavItem>
                            <NavItem><NavLink href="#projects">Projetos</NavLink></NavItem>
                        </NavList>
                    </Nav>
                </HeaderContent>
            </Container>
        </HeaderDiv>
    )
}