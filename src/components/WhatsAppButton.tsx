import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9965653302"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 rounded-full bg-green-600 p-4 text-3xl text-white shadow-lg"
    >
      <FaWhatsapp />
    </a>
  );
}