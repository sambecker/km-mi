import fs from 'fs';
import path from 'path';
import { cwd } from 'process';

export const FONT_GEIST_MONO_FAMILY = 'GeistMono';
export const FONT_GEIST_MONO_PATH = '/public/fonts/geist-mono/GeistMono-';
export const FONT_GEIST_MONO_WEIGHTS = [
  { name: 'Regular.ttf', weight: 400 },
  { name: 'Semibold.ttf', weight: 600 },
  { name: 'Bold.ttf', weight: 700 },
] as const;

const getFontData = async (name: string) =>
  fs.readFileSync(path.join(cwd(), `${FONT_GEIST_MONO_PATH}${name}`));

export const getFonts = async () =>
  Promise.all(
    FONT_GEIST_MONO_WEIGHTS.map(({ name, weight }) => getFontData(name)
      .then(data => ({
        name: FONT_GEIST_MONO_FAMILY,
        data,
        weight,
        style: 'normal',
      } as const))),
  );
