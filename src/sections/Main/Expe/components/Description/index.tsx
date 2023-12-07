import { Date, DescriptionS, DivS, HeaderDiv, SubTitle, Title } from "./styles";

interface ExperienceProps{
    title: string,
    date: string,
    subtitle: string,
    description: any,
}

export default function ExperienceDesc({title,date,subtitle,description}: ExperienceProps){
    return(
        <DivS>
        <HeaderDiv>
            <Title>{title}</Title>
            <Date>{date}</Date>
        </HeaderDiv>
        <SubTitle>{subtitle}</SubTitle>
        <DescriptionS>{description}</DescriptionS>
        </DivS>
    )
}