export const parseTimeString = (timeString: string) => {
  if (timeString.includes(':')) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  } else {
    return Number(timeString);
  }
};
