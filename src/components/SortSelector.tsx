interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder?: string;
}
export const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  //Use - to sort descending, no - for ascending
  //The value is the query parameter that will be sent to the API
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metricritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const selectedSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <select
      onChange={(event) => {
        onSelectSortOrder(event.target.value);
      }}
    >
      <option value="">
        Order by: {selectedSortOrder?.label || "Relevance"}
      </option>
      {sortOrders.map((order) => (
        <option key={order.value} value={order.value}>
          {order.label}
        </option>
      ))}
    </select>
  );
};
