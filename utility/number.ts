export const convertTimeStringToSeconds = (timeString: string) => {
  if (timeString.includes(':')) {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return minutes * 60 + seconds;
  } else {
    return Number(timeString) * 60;
  }
};

export const convertSecondsToTimeString = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60);
  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
};
