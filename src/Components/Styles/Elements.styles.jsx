import styled from "styled-components";

export const ElementTag = styled.span`
    display: inline-block;
    color: ${props => props.theme.ElementTagColor};
    background: ${props => props.theme.ElementTagBackground};
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 0.7em;
`;

export const ElementH1 = styled.h1`
    color: ${props => props.theme.ElementH1Color};
`;

export const ElementP = styled.p`
    width: 280px;
    font-size: 13px;
    line-height: 1.4;
    color: ${props => props.theme.ElementPColor};
    margin: 20px 0;
`;