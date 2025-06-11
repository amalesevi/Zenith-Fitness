function TestimonialCard({ name, quote, image }) {
  return (
    <div className="card">
      <blockquote>“{quote}”</blockquote>
      <footer><img className="testimonial-image" src={image} />- {name}</footer>
    </div>
  );
}
export default TestimonialCard;