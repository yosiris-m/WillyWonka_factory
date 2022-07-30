export default function IceCreamDetails({ iceCream }) {
  return (
    <div>
      <img src={iceCream.pictureUrl} />
      <strong>{iceCream.flavor}</strong>
      <p>{iceCream.description}</p>
    </div>
  );
}
