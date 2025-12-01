// flashCards/[flashId]/page.jsx
import Image from 'next/image';
import FlashCard from '../FlashCard';
import Link from 'next/link';


const FlashCardPage = ({ params }) => {
  // You can fetch data based on flashId if needed
  const flashCards = [
    {
        id: '1',
        imageUrl: '/images/imageBox/FlashCards/FlashCard5/23.png',
        title: 'Ayurvedic Principles',
    },
    {
        id: '2',
        imageUrl: '/images/imageBox/FlashCards/FlashCard5/24.png',
        title: 'Medicinal Herbs',
    },
    {
        id: '3',
        imageUrl: '/images/imageBox/FlashCards/FlashCard5/25.png',
        title: 'Yoga Therapy',
    },
    {
        id: '4',
        imageUrl: '/images/imageBox/FlashCards/FlashCard5/26.png',
        title: 'Yoga Therapy',
    },
    {
        id: '5',
        imageUrl: '/images/imageBox/FlashCards/FlashCard5/27.png',
        title: 'Yoga Therapy',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Wellness Flashcards</h1> */}
      <div className="max-w-3xl mx-auto">
        <FlashCard cards={flashCards} />
      </div>
    </div>
  );
};


export default FlashCardPage;