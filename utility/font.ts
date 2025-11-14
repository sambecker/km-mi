import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

export const FONT_GEIST_MONO_FAMILY = 'GeistMono';

const FONT_GEIST_MONO_PATH = '/public/fonts';
const FONT_GEIST_MONO_WEIGHTS = [
  { name: 'GeistMono-Regular.ttf', weight: 400 },
  { name: 'GeistMono-SemiBold.ttf', weight: 600 },
  { name: 'GeistMono-Bold.ttf', weight: 700 },
] as const;

export const listRoot = () =>
  readdir(process.cwd())
    .then(console.log);

export const listPublic = () =>
  readdir(join(process.cwd(), '/public'))
    .then(console.log);

export const listFonts = () =>
  readdir(join(process.cwd(), FONT_GEIST_MONO_PATH))
    .then(console.log);

const getFontData = async (name: string) =>
  readFile(join(process.cwd(), `${FONT_GEIST_MONO_PATH}/${name}`));

export const getFonts = async () => Promise.all(FONT_GEIST_MONO_WEIGHTS
  .map(({ name, weight }) => getFontData(name)
    .then(data => ({
      name: FONT_GEIST_MONO_FAMILY,
      data,
      weight,
      style: 'normal',
    } as const))),
);
