import { motion } from "motion/react";
import { Company, Date, DescriptionS, HeaderDiv, Title } from "./styles";

interface ExperienceProps {
    title: string;
    date: string;
    company: string;
    description: string;
}

export default function ExperienceDesc({ title, date, company, description }: ExperienceProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
        >
            <HeaderDiv>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </HeaderDiv>
            <Company>{company}</Company>
            <DescriptionS>
                {description.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </DescriptionS>
        </motion.article>
    );
}
