import { Text } from '@/shared/ui';
import { SearchResult } from './SearchResult';
import { SearchInput } from './SearchInput';
import { StyledColumn } from './styles';

export const EmployeesSearch = () => {
  return (
    <StyledColumn>
      <Text fontSize={16} fontWeight="600" color="black">
        Поиск сотрудников
      </Text>
      <SearchInput />
      <SearchResult />
    </StyledColumn>
  );
};
