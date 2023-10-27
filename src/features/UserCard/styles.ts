import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { columnMixin } from '@/shared/constants/mixins';

interface StyledCardProps {
  isSelected?: boolean;
}

export const StyledCard = styled.button<StyledCardProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.default};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  transition: border 0.2s linear, background 0.2s linear;
  overflow: hidden;

  &:enabled {
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGrey};
      border-color: ${({ theme }) => theme.colors.lightGrey};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.lightGrey2};
    }
  }

  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.lightGrey};
      border-color: ${theme.colors.lightGrey};
    `};
`;

export const StyledAvatar = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  flex-shrink: 0;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledInfo = styled.div`
  width: 100%;
  ${columnMixin};
  gap: 5px;
  text-align: left;
  padding: 15px;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
