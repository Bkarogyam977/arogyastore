// flashCards/[flashId]/page.jsx
import Image from 'next/image';
import FlashCard from '../FlashCard';
import Link from 'next/link';


const FlashCardPage = ({ params }) => {
  // You can fetch data based on flashId if needed
  const flashCards = [
    {
      id: '1',
      imageUrl: '/images/imageBox/FlashCards/FlashCard2/5.png',
      title: 'Ayurvedic Principles',
    },
    {
      id: '2',
      imageUrl: '/images/imageBox/FlashCards/FlashCard2/6.png',
      title: 'Medicinal Herbs',
    },
    {
      id: '3',
      imageUrl: '/images/imageBox/FlashCards/FlashCard2/7.png',
      title: 'Yoga Therapy',
    },
    {
        id: '4',
        imageUrl: '/images/imageBox/FlashCards/FlashCard2/8.png',
        title: 'Yoga Therapy',
    },
    {
      id: '5',
      imageUrl: '/images/imageBox/FlashCards/FlashCard2/9.png',
      title: 'Yoga Therapy',
    },
    {
        id: '6',
        imageUrl: '/images/imageBox/FlashCards/FlashCard2/10.png',
        title: 'Yoga Therapy',
    },
    {
      id: '7',
      imageUrl: '/images/imageBox/FlashCards/FlashCard2/11.png',
      title: 'Yoga Therapy',
    },
    {
        id: '8',
        imageUrl: '/images/imageBox/FlashCards/FlashCard2/12.png',
        title: 'Yoga Therapy',
    }
  ];


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <FlashCard cards={flashCards} />
      </div>
    </div>
  );
};


export default FlashCardPage;