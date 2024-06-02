import { Metadata } from 'next';
import {
  Unit,
  getDescriptionForPace,
  getTitleForPace,
} from './unit';
import { pathForPace, pathForPaceImage } from './path';
import { Mode } from './mode';

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

export const getMeta = (
  mode: Mode,
  valueFromParam: string,
  unit: Unit,
): Metadata => {
  const value = decodeURIComponent(valueFromParam);
  const title = getTitleForPace(value, unit);
  const description = getDescriptionForPace(value, unit);
  const images = pathForPaceImage(value, unit);
  const url = pathForPace(value, unit);

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

