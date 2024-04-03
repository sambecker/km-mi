export const convertTimeStringToSeconds = (timeString: string) => {
  if (timeString.includes(':')) {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return minutes * 60 + seconds;
  } else {
    return Number(timeString) * 60;
  }
};

export const convertSecondsToTimeString = (seconds: number) => {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = Math.round(seconds % 60);
  if (remainingSeconds === 60) {
    minutes += 1;
    remainingSeconds = 0;
  }
  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
};
