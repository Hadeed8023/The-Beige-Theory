import { whatsappUrl } from "../../utils/contact";

export default function WhatsAppLink({ children, message, ...props }) {
  return (
    <a {...props} href={whatsappUrl(message)} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
