function PlanCard({ title, price, features, image }) {
  return (
    <div id="card-container" className="card">
      <h3>{title}</h3>
      <img className="plan-img" src={image} />
      <p className="price">{price}</p>
        {features.map((feature, index) => <p key={index}>{feature}</p>)}
      <button disabled={true}>Sold Out</button>
    </div>
  );
}
export default PlanCard;