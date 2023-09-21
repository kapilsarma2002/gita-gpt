import React from 'react'

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
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
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
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
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
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
