export function filterData(searchText, restaurants) {
  return restaurants?.filter((restaurant) =>
    restaurant?.title?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}