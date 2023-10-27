import { useEmployeeStore } from '@/entities/employee';
import { Text } from '@/shared/ui';
import { getAvatarUrl } from '@/shared/utils';
import { StyledAvatar, StyledContentGrid, StyledDataList, StyledEmpty, StyledImage, StyledWrapper } from './styles';

export const UserDetails = () => {
  const { data: selectedUser } = useEmployeeStore();

  return (
    <StyledWrapper>
      {!selectedUser ? (
        <StyledEmpty>
          <Text color="grey">Выберите сотрудника, чтобы посмотреть его профиль</Text>
        </StyledEmpty>
      ) : (
        <StyledContentGrid key={selectedUser.id}>
          <StyledAvatar>
            <StyledImage src={getAvatarUrl(selectedUser.id, 140)} alt={selectedUser.name} />
          </StyledAvatar>
          <StyledDataList>
            <Text fontSize={16} fontWeight="600">
              {selectedUser.name}
            </Text>
            <Text>email: {selectedUser.email}</Text>
            <Text>phone: {selectedUser.phone}</Text>
          </StyledDataList>
        </StyledContentGrid>
      )}
    </StyledWrapper>
  );
};
