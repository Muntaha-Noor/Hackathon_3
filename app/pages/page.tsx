"use client";
import { FC, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type Question = {
  question: string;
  answer: string;
};

const faqs: Question[] = [
  {
    question: "What types of chairs do you offer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis deserunt eveniet explicabo molestias eaque.",
  },
  {
    question: "Do your chairs come with a warranty?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis deserunt eveniet explicabo molestias eaque.",
  },
  {
    question: "Can I try a chair before purchasing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis deserunt eveniet explicabo molestias eaque.",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis deserunt eveniet explicabo molestias eaque.",
  },
  {
    question: "What will be delivered? And when?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis deserunt eveniet explicabo molestias eaque.",
  },
  {
    question: "How do I clean and maintain my Comfortly chair?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis deserunt eveniet explicabo molestias eaque.",
  },
];

const FAQSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Questions Looks Here
        </h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg sm:text-xl font-medium text-gray-800">
                {faq.question}
              </h3>
              <button className="text-gray-600">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {activeIndex === index && (
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
