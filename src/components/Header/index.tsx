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
                        <NavItem><NavLink href="/#about">Sobre mim</NavLink></NavItem>
                        <NavItem><NavLink href="/#experience">Experiência</NavLink></NavItem>
                        <NavItem><NavLink href="/#projects">Projetos</NavLink></NavItem>
                    </NavList>
                </Nav>
            </HeaderDiv>
        </Container>
    )
}