import PlanCard from '../components/PlanCard';
function Plans() {
  const plans = [
    { title: "Starter", price: "$10/mo", features: ["Weekly tips", "Basic workouts"], image: "/photo3.jpg" },
    { title: "Pro", price: "$49/mo", features: ["Custom plan", "1-on-1 coaching"], image: "/photo4.jpg" },
    { title: "Elite", price: "$99/mo", features: ["Nutrition guide", "Priority support"], image: "/photo5.jpg" }
  ];
  return (
    <section>
      <h1>Training Plans</h1>
      <div className="cards">
        {plans.map((plan, index) => <PlanCard key={index} {...plan} />)}
      </div>
    </section>
  );
}
export default Plans;