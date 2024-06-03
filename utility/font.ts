export const GEIST_MONO_FAMILY = 'GeistMono';

const parseFontResponse = (res: Response, weight: number) =>
  res.arrayBuffer()
    .then(data => ({
      name: GEIST_MONO_FAMILY,
      data,
      weight,
      style: 'normal',
    } as const));

export const getGeistMonoBold = () => fetch(new URL(
  '../public/fonts/geist-mono/GeistMono-Bold.ttf',
  import.meta.url
))
  .then(res => parseFontResponse(res, 600));

export const getGeistMonoSemiBold = () => fetch(new URL(
  '../public/fonts/geist-mono/GeistMono-SemiBold.ttf',
  import.meta.url
))
  .then(res => parseFontResponse(res, 500));

export const getGeistMonoRegular = () => fetch(new URL(
  '../public/fonts/geist-mono/GeistMono-Regular.ttf',
  import.meta.url
))
  .then(res => parseFontResponse(res, 400));

export const getFonts = () => Promise.all([
  getGeistMonoBold(),
  getGeistMonoSemiBold(),
  getGeistMonoRegular(),
] as any);
