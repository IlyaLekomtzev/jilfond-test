import styled from '@emotion/styled';
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_WEIGHT } from '@/shared/constants/styles';
import { StylesTextProps } from './types';

export const StyledText = styled.span<StylesTextProps>`
  color: ${({ theme, color = 'black' }) => theme.colors[color]};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ fontSize = DEFAULT_FONT_SIZE }) => `${fontSize}px`};
  font-weight: ${({ fontWeight = DEFAULT_FONT_WEIGHT }) => fontWeight};
`;
