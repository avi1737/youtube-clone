import moment from "moment";

export const shortDownVideoTitle = (title: string) => {
  let enhancedTitle = title.substring(0, 30);
  return enhancedTitle;
};

export const timeAgo = (date: string) => {
  let published = moment(date).fromNow();
  return published;
};
