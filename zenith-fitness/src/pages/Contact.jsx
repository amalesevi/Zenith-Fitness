function Contact() {
  return (
    <section>
      <h1>Contact Us</h1>
      <form action="https://formspree.io/f/xeokapvv" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
export default Contact;