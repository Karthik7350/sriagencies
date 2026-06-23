export default function ContactForm() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">

        <h2 className="mb-8 text-center text-4xl font-bold text-green-700">
          Contact Us
        </h2>

        <form className="space-y-4 rounded-xl bg-white p-6 shadow-md">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white"
          >
            Send Enquiry
          </button>
        </form>

        <div className="mt-8 text-center text-gray-700">
          <p>📞 9791614629</p>
          <p>✉️ karthikn7350@gmail.com</p>
        </div>
      </div>
    </section>
  );
}