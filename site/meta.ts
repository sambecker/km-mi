import { Metadata } from 'next';
import {
  Unit,
  getDescriptionForDistance,
  getDescriptionForPace,
  getDescriptionForRace,
  getTitleForDistance,
  getTitleForPace,
  getTitleForRace,
  unitFromString,
} from './unit';
import {
  pathForDistance,
  pathForDistanceImage,
  pathForPace,
  pathForPaceImage,
  pathForRace,
  pathForRaceImage,
} from './path';
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
  unitFromParam: string,
  timeFromParam?: string,
): Metadata => {
  const value = decodeURIComponent(valueFromParam);
  const unit = unitFromString(unitFromParam);
  const time = decodeURIComponent(timeFromParam || '00:00');
  switch (mode) {
  case 'distance': return getMetaForDistance(value, unit);
  case 'pace': return getMetaForPace(value, unit);
  case 'race': return getMetaForRace(value, unit, time);
  }
};

export const getMetaForDistance = (
  distance: string,
  unit: Unit,
): Metadata => {
  const title = getTitleForDistance(distance, unit);
  const description = getDescriptionForDistance(distance, unit);
  const images = pathForDistanceImage(distance, unit);
  const url = pathForDistance(distance, unit);

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

export const getMetaForPace = (
  pace: string,
  unit: Unit,
): Metadata => {
  const title = getTitleForPace(pace, unit);
  const description = getDescriptionForPace(pace, unit);
  const images = pathForPaceImage(pace, unit);
  const url = pathForPace(pace, unit);

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

export const getMetaForRace = (
  distance: string,
  unit: Unit,
  time: string,
): Metadata => {
  const title = getTitleForRace(distance, unit, time);
  const description = getDescriptionForRace(distance, unit, time);
  const images = pathForRaceImage(distance, unit, time);
  const url = pathForRace(distance, unit, time);

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
