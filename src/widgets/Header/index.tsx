import { Text } from '@/shared/ui';
import { StyledHeader } from './styles';

export const Header = () => (
  <StyledHeader>
    <Text fontWeight="700" fontSize={32} color="red">
      Жилфонд
    </Text>
    <Text fontSize={16} color="black">
      Пользователь
    </Text>
  </StyledHeader>
);
