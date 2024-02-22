export const formatDateFullDateAndTime = (dateString: string | undefined) => {
  if (!dateString) return undefined;

  return new Date(dateString).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

export const formatDateWeekday = (dateString: string | undefined) => {
  if (!dateString) return undefined;

  return new Date(dateString).toLocaleString("en-GB", {
    weekday: "long",
  });
};

export const formatDateToTime = (dateString: string | undefined) => {
  if (!dateString) return undefined;

  return new Date(dateString).toLocaleString("en-GB", {
    timeStyle: "short",
  });
};

export const formatDateMonthAndWeekday = (dateString: string | undefined) => {
  if (!dateString) return undefined;

  return new Date(dateString).toLocaleString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};
