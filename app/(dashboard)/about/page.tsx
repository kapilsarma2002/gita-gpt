/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12 h-full w-full overflow-y-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semi-bold mb-4">
        Bhagavad Gita - A Summary
      </h1>
      <p className="text-base md:text-lg lg:text-xl mb-4">
        The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu
        scripture that is part of the Indian epic Mahabharata. It consists of a
        conversation between Prince Arjuna and the Bhagawan Krishna, who serves as
        his charioteer.
      </p>
      <p className="text-base md:text-lg lg:text-xl mb-4">
        The Gita is a profound philosophical and spiritual text that addresses
        the moral and ethical dilemmas faced by Arjuna on the battlefield of
        Kurukshetra. It explores key concepts such as duty (dharma),
        righteousness, devotion (bhakti), and the paths to spiritual
        realization.
      </p>
      <p className="text-base md:text-lg lg:text-xl">
        The teachings of the Bhagavad Gita have had a profound influence on
        Hindu philosophy and have been embraced by people of various spiritual
        traditions worldwide. It offers guidance on how to live a life of
        purpose, virtue, and inner peace.
      </p>
      <br />
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semi-bold mb-4">
        About Bhagavad Gita App
      </h2>
      <p className="text-base md:text-lg lg:text-xl mb-4">
        Welcome to the Bhagavad Gita App, a platform for exploring the timeless
        wisdom and teachings of the Bhagavad Gita.
      </p>
      <p className="text-base md:text-lg lg:text-xl mb-4">
        Our mission is to provide you with a user-friendly and insightful
        experience as you delve into this sacred text. Whether you are a scholar
        or a seeker, our app aims to make the wisdom of the Bhagavad Gita
        accessible to all.
      </p>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semisemi-bold mb-2">
        Key Features
      </h2>
      <ul className="list-disc pl-4 text-base md:text-lg lg:text-xl mb-4">
        <li>Read and explore Bhagavad Gita verses and translations.</li>
        <li>Search for specific verses or topics within the Gita.</li>
        <li>Access AI-powered interpretations and explanations of verses.</li>
        <li>
          Create a personalized reading experience with user accounts and
          bookmarks.
        </li>
      </ul>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semisemi-bold mb-2">
        Contact Us
      </h2>
      <p className="text-base md:text-lg lg:text-xl mb-4">
        We value your feedback and suggestions. If you have any questions or
        would like to get in touch with us, please feel free to email us at{' '}
        <a href="mailto:sarmakapil1817@gmail.com" className="text-blue-500">
          sarmakapil1817@gmail.com
        </a>
        .
      </p>
      <p className="text-base md:text-lg lg:text-xl">
        Thank you for choosing the Bhagavad Gita App as your companion on your
        spiritual journey. May your exploration of the Gita's teachings bring
        insight, inspiration, and inner peace.
      </p>
    </div>
  )
}

export default AboutPage
