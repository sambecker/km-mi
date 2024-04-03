import { Metadata } from 'next';
import {
  Unit,
  convertKmStringToMiString,
  convertMiStringToKmString,
  pathForKmImage,
  pathForMiImage,
} from './unit';

const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;
const VERCEL_DEPLOYMENT_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
const VERCEL_BRANCH_URL = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL;
  
export const BASE_URL = VERCEL_ENV === 'production'
  ? 'https://km-mi.vercel.app'
  : VERCEL_ENV === 'preview'
    ? VERCEL_BRANCH_URL || VERCEL_DEPLOYMENT_URL || ''
    : 'http://localhost:3000';

export const TITLE = 'KM/MI';
export const DESCRIPTION = 'Convert pace from kilometers to miles and back';

export const metaForUnit = (unit: Unit, valueFromParam: string): Metadata => {
  const value = decodeURIComponent(valueFromParam);
  const title = unit === 'km'
    ? `${value} → ${convertKmStringToMiString(value)}`
    : `${convertMiStringToKmString(value)} ← ${value}`;
  const description = `minutes/km ${unit === 'km' ? '→' : '←'} minutes/mile`;
  const images = unit === 'km'
    ? pathForKmImage(value)
    : pathForMiImage(value);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
    },
    twitter: {
      title,
      description,
      images,
    },
  };
};

