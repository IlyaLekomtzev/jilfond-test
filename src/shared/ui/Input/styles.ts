import styled from '@emotion/styled';
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_WEIGHT } from '@/shared/constants/styles';

export const StyledInput = styled.input`
  width: 100%;
  height: 46px;
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey3};
  border-radius: 8px;
  font-size: ${`${DEFAULT_FONT_SIZE}px`};
  font-weight: ${DEFAULT_FONT_WEIGHT};
  transition: border 0.2s linear;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.grey};
  }
`;
