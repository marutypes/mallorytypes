import { merriweather } from "@/app/fonts";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-start p-6">
      <h1 className={`text-3xl font-bold mb-8 ${merriweather.className}`}>
        Contact Me
      </h1>
      <p className="text-lg mb-4 text-center">
        Feel free to reach out to me via the form below. I&apos;d love to hear
        from you!
      </p>
      <ContactForm />
      <p className="text-lg mt-8 text-center">
        You can also reach out to me on social media using the links below.
      </p>
    </div>
  );
}
