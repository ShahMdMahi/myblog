import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - My Beautiful Blog",
  description: "Learn more about My Beautiful Blog",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6">About My Beautiful Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Welcome to My Beautiful Blog, a platform dedicated to sharing insightful
        stories and knowledge on various topics.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Our mission is to provide high-quality content that informs, inspires,
        and entertains our readers. We cover a wide range of subjects, from
        technology and science to lifestyle and culture.
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        Thank you for being a part of our community. We hope you enjoy reading
        our articles as much as we enjoy creating them!
      </p>
    </div>
  );
}
