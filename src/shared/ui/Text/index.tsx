import { FC } from 'react';
import { TextProps } from './types';
import { StyledText } from './styles';

export const Text: FC<TextProps> = ({ children, ...props }) => <StyledText {...props}>{children}</StyledText>;
