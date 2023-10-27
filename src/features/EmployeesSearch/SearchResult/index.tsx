import { UserCard } from '@/features/UserCard';
import { Text } from '@/shared/ui';
import { StyledColumn } from './styles';
import { useEmployeeStore, useEmployeesStore } from '@/entities/employee';
import { IUser } from '@/shared/types/user';

export const SearchResult = () => {
  const { items, isLoading, hasQuery } = useEmployeesStore();
  const { data: selectedUser, setUser } = useEmployeeStore();

  const handleUserClick = (user: IUser) => {
    setUser(user);
  };

  return (
    <StyledColumn>
      <Text fontSize={16} fontWeight="600" color="black">
        Результаты
      </Text>

      {!isLoading ? (
        <>
          {items.length > 0 ? (
            items.map((user) => (
              <UserCard key={user.id} isSelected={user.id === selectedUser?.id} onClick={handleUserClick} user={user} />
            ))
          ) : (
            <Text color="grey">{hasQuery ? 'Ничего не найдено' : 'Начните поиск '}</Text>
          )}
        </>
      ) : (
        <Text color="grey">Загрузка..</Text>
      )}
    </StyledColumn>
  );
};
