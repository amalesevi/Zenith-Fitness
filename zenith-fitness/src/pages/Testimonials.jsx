import TestimonialCard from '../components/TestimonialCard';
function Testimonials() {
  const testimonials = [
    { name: "Alex J.", quote: "Zenith Fitness helped me lose 20 pounds in 3 months!", image: "/photo6.jpg" },
    { name: "Jordan K.", quote: "I've never felt stronger or more confident.", image: "/photo7.jpg" },
  ];
  return (
    <section>
      <h1>Client Testimonials</h1>
      <div className="cards">
        {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
      </div>
    </section>
  );
}
export default Testimonials;