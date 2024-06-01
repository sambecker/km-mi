import { Metadata } from 'next';
import {
  Unit,
  getWordBasedDescription,
  getWordBasedTitle,
} from './unit';
import {
  pathForKm,
  pathForKmImage,
  pathForMi,
  pathForMiImage
} from './path';

const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;
const VERCEL_PRODUCTION_URL =
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
const VERCEL_BRANCH_URL = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
  : undefined;
const VERCEL_DEPLOYMENT_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : undefined;
  
export const BASE_URL = VERCEL_ENV === 'production'
  ? VERCEL_PRODUCTION_URL
  : VERCEL_ENV === 'preview'
    ? VERCEL_BRANCH_URL || VERCEL_DEPLOYMENT_URL || ''
    : 'http://localhost:3000';

export const TITLE = 'KM/MI';
export const DESCRIPTION = 'Convert pace from kilometers to miles and back';

export const metaForUnit = (unit: Unit, valueFromParam: string): Metadata => {
  const value = decodeURIComponent(valueFromParam);
  const title = getWordBasedTitle(unit, value);
  const description = getWordBasedDescription(unit, value);
  const images = unit === 'km'
    ? pathForKmImage(value)
    : pathForMiImage(value);
  const url = unit === 'km'
    ? pathForKm(value)
    : pathForMi(value);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      url,
    },
    twitter: {
      title,
      description,
      images,
      card: 'summary_large_image',
    },
  };
};

