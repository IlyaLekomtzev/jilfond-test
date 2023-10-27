import styled from '@emotion/styled';
import { columnMixin, flexCenterMixin } from '@/shared/constants/mixins';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 20px;
`;

export const StyledEmpty = styled.div`
  width: 100%;
  height: 100%;
  ${flexCenterMixin};
`;

export const StyledContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 424px calc(100% - 424px);
  gap: 60px;
`;

export const StyledAvatar = styled.div`
  width: 100%;
  height: 286px;
  ${flexCenterMixin};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const StyledImage = styled.img`
  width: 140px;
`;

export const StyledDataList = styled.div`
  width: 100%;
  ${columnMixin};
  gap: 10px;
`;
