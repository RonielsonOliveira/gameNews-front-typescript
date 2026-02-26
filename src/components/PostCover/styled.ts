import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 420px;
    overflow: hidden;
    margin-bottom: ${theme.spacings.medium};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
