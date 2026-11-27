import { Company, Date, DescriptionS, HeaderDiv, Title } from "./styles";

interface ExperienceProps {
    title: string;
    date: string;
    company: string;
    description: string;
}

export default function ExperienceDesc({ title, date, company, description }: ExperienceProps) {
    return (
        <article>
            <HeaderDiv>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </HeaderDiv>
            <Company>{company}</Company>
            <DescriptionS>
                {description.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </DescriptionS>
        </article>
    );
}
