export default function QuantitySelector({
  quantity,
  itemsInStock,
  onChangeSelectorValue,
  product
}) {
  return (
    <select
      value={quantity}
      onChange={(e) => onChangeSelectorValue(product, e.target.value)}
    >
      {[...Array(itemsInStock).keys()].map((number) => (
        <option key={number + 1} value={number + 1}>
          {number + 1}
        </option>
      ))}
    </select>
  )
}
