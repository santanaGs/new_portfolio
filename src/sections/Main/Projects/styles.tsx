import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.25rem;
    row-gap: 5rem;
    margin-top: 3.25rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`