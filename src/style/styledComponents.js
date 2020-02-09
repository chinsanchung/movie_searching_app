import styled, { css } from "styled-components";

export const ContainerHome = styled.div`
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
`;

export const ListUl = styled.ul`
    position: relative;
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    flex-wrap: wrap;
    padding-top: 10px;
    box-sizing: border-box;
`;

export const Poster = styled.div`
    display: flex;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: 15px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: 600;
    ${props =>
        props.poster !== "N/A"
            ? css`
                  background: no-repeat url(${props.poster});
                  background-size: contain;
              `
            : css`
                  background-color: rgb(205, 205, 205);
                  &::after {
                      content: "N/A";
                      text-decoration: none;
                      color: #000000;
                  }
              `}
`;
