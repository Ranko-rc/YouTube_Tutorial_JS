import useFetch from "./index";
import './styles.css';

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch("https://dummyjson.com/products");

  return (
    <div className="test-container">
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending! Please wait</h3> : null}
      {error ? <h3>{error.message}</h3> : null}
      {data?.products?.length
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}