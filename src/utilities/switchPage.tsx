export const switchPage = (
  page: number,
  limit: number,
  setStartingPage: any
) => {
  const startIndex = (page - 1) * limit;
  setStartingPage(startIndex);
};
