import { BASE_IMG_URL } from '@/api/config';
import { No_Poster, No_Backdrop } from '@/assets/images';

const getImage = (path, width = 500) => {
  if (!path) return No_Poster;

  return `${BASE_IMG_URL}w${width}${path}`;
};

const getBgImage = (path, width = 1280) => {
  if (!path) return No_Backdrop;

  return `${BASE_IMG_URL}w${width}${path}`;
};

const getAvatar = (path, width = 185) => {
  if (!path) return null;

  return `${BASE_IMG_URL}w${width}${path}`;
};

export { getImage, getBgImage, getAvatar };
