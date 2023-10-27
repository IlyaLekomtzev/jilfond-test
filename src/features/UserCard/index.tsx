import { FC, MouseEventHandler } from 'react';
import { IUser } from '@/shared/types/user';
import { Text } from '@/shared/ui';
import { getAvatarUrl } from '@/shared/utils';
import { StyledAvatar, StyledCard, StyledImage, StyledInfo } from './styles';

interface Props {
  user: IUser;
  isSelected?: boolean;
  onClick?: (user: IUser) => void;
}

export const UserCard: FC<Props> = ({ user, isSelected, onClick }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onClick?.(user);
  };

  return (
    <StyledCard isSelected={isSelected} onClick={handleClick} type="button">
      <StyledAvatar>
        <StyledImage src={getAvatarUrl(user.id)} alt={user.name} />
      </StyledAvatar>
      <StyledInfo>
        <Text fontWeight="600">{user.username}</Text>
        <Text color="grey">{user.email}</Text>
      </StyledInfo>
    </StyledCard>
  );
};
