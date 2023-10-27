import styled from '@emotion/styled';

export const StyledLayout = styled.main`
  width: 100%;
  height: 100dvh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 26px;
`;

export const StyledContent = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 290px calc(100% - 290px);
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.lightGrey2};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.default};
  overflow: hidden;
`;
