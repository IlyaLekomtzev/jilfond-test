import { PropsWithChildren } from 'react';
import { Theme } from '@emotion/react';

export interface StylesTextProps {
  color?: keyof Theme['colors'];
  fontSize?: number;
  fontWeight?: '400' | '600' | '700';
}

export type TextProps = PropsWithChildren & StylesTextProps;
