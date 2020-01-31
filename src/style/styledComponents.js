import styled, { css } from "styled-components";

export const ContainerHome = styled.div`
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
`;

export const SectionHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-content: center;
    font-size: 1.7em;
    font-weight: 600;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    .header-title {
        margin-right: 10px;
    }
`;

export const ListUl = styled.ul`
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`;

export const PosterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: 600;
    ${props =>
        props.url !== "N/A"
            ? css`
                  background: no-repeat url(${props.url});
                  background-size: contain;
              `
            : css`
                  background-color: #ffffff;
                  &::after {
                      content: "N/A";
                      text-decoration: none;
                      color: black;
                  }
              `}
`;
