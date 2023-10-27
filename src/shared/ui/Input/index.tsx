import { FC, InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => <StyledInput {...props} />;
