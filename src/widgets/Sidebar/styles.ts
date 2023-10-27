import styled from '@emotion/styled';

export const StyledSidebar = styled.aside`
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
  overflow-y: auto;
`;
