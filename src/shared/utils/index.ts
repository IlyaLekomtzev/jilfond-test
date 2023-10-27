import { AVATARS_URL } from '../constants/env';
import { MAX_AVATAR_SIZE } from '../constants/services';

export const getAvatarUrl = (id: number, size = 70) => {
  const imgSize = size > MAX_AVATAR_SIZE ? MAX_AVATAR_SIZE : size;
  return `${AVATARS_URL}/${imgSize}?img=${id}`;
};
