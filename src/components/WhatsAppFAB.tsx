import { PhoneIcon as WhatsappIcon } from "lucide-react";

export function WhatsAppFAB() {
  const whatsappNumber = "2348106952008"; // Replaced with actual number
  const message = "Hello Timstars Apartments, I would like to make an inquiry.";
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
