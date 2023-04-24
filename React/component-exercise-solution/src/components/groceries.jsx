const groceries = [
  {
    id: "1",
    name: "Apple",
  },
  {
    id: "2",
    name: "Orange",
  },
  {
    id: "3",
    name: "Pear",
  },
];

export const GroceryList = () => {
  return (
    <ul>
      {groceries.map((item) => (
        <li key={item.id} id={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
