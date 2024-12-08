import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - My Beautiful Blog",
  description: "Get in touch with My Beautiful Blog",
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Have a question or feedback? We&apos;d love to hear from you! Fill out
        the form below, and we&apos;ll get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
