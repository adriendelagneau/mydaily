import Card from '@/components/Card';
import CardSM from '@/components/CardSM';
import Slider from '@/components/Slider';
import Slider2 from '@/components/Slider2';
import Slider3 from '@/components/Slider3';


const tps = [
  {
    "id": 0,
    "title": "The Art of Programming",
    "author": "John Doe",
    "content": "Programming is both an art and a science. It requires creativity, problem-solving skills, and attention to detail. A skilled programmer can turn an idea into a functional application, crafting elegant solutions to complex problems. Programming is both an art and a science. It requires creativity, problem-solving skills, and attention to detail. A skilled programmer can turn an idea into a functional application, crafting elegant solutions to complex problems.",
    "url": "/actu.jpg"

  },
  {
    "id": 1,
    "title": "Exploring the Cosmos",
    "author": "Jane Smith",
    "content": "The universe is a vast expanse of stars, planets, and mysteries waiting to be uncovered. As we gaze into the night sky, we ponder the nature of black holes, the possibility of life on other planets, and the origins of the cosmos itself. Our quest for understanding takes us on a journey through space and time, where we seek to unlock the secrets of the universe.",
      "url": "/milky.jpg"
  
    },
  {
    "id": 2,
    "title": "Healthy Habits for Productivity",
    "author": "Alex Johnson",
    "content": "Maintaining a healthy lifestyle is essential for staying productive. Regular exercise, balanced nutrition, and adequate sleep provide the foundation for mental clarity and focus. By prioritizing self-care, we can achieve our goals and contribute meaningfully to our work. As we cultivate habits that nourish our bodies and minds, we unlock our full potential and thrive in both our personal and professional lives.",
    "url": "/programing.jpg"   
  
    },
  {
    "id": 3,
    "title": "Rediscovering Ancient Civilizations",
    "author": "Emily Williams",
    "content": "The study of ancient civilizations unveils the remarkable achievements of our ancestors. From the architectural marvels of the Egyptian pyramids to the advanced mathematical concepts of the Greeks, history provides us with a window into the past, inspiring us to learn and innovate. Through archaeology and historical research, we piece together the puzzle of human history and gain insights into the cultures that shaped our world.",
      "url": "/milky.jpg"
  
    },
  {
    "id": 4,
    "title": "Innovations in Renewable Energy",
    "author": "Michael Brown",
    "content": "Renewable energy sources such as solar and wind power are transforming the way we generate electricity. As we strive to reduce our carbon footprint, harnessing the power of nature's resources offers a sustainable solution to our energy needs, paving the way for a greener future. From solar panels that capture sunlight to wind turbines that harness the breeze, these innovations propel us towards a more environmentally conscious world.",
      "url": "/milky.jpg"
  
    },
  // Additional articles below
  {
    "id": 5,
    "title": "The Beauty of Nature",
    "author": "Sarah Lee",
    "content": "Nature's beauty is captivating and awe-inspiring. From the serene landscapes of rolling hills to the vibrant colors of blooming flowers, the natural world provides a source of tranquility and inspiration. Each season brings its own charm, from the blossoms of spring to the fiery foliage of autumn, reminding us of the ever-changing tapestry of life on Earth.",
      "url": "/milky.jpg"
  
    },
  {
    "id": 6,
    "title": "The Science of Nutrition",
    "author": "Robert Johnson",
    "content": "Understanding the science of nutrition is essential for maintaining a healthy lifestyle. Balanced diets, essential nutrients, and the impact of food on our overall well-being are topics that empower individuals to make informed dietary choices. By delving into the intricacies of digestion, metabolism, and nutritional requirements, we equip ourselves with the knowledge needed to nourish our bodies for optimal health.",
      "url": "/milky.jpg"
  
    },
  {
    "id": 7,
    "title": "Exploring Virtual Reality",
    "author": "Sophia Miller",
    "content": "Virtual reality technology has opened up new realms of exploration and entertainment. With VR headsets, users can immerse themselves in virtual worlds, experiencing everything from breathtaking landscapes to thrilling adventures. As we push the boundaries of technological innovation, virtual reality offers a glimpse into the limitless possibilities of human imagination and creativity.",
      "url": "/milky.jpg"
  
    },
  {
    "id": 8,
    "title": "The Art of Photography",
    "author": "David Brown",
    "content": "Photography is a creative medium that captures moments in time. From portraits that convey emotions to landscapes that capture the beauty of nature, photography is a powerful form of visual storytelling. Through the lens of a camera, we freeze fragments of reality, preserving memories and evoking emotions that transcend language and cultural barriers.",
      "url": "/milky.jpg"
  
    },
  {
    "id": 9,
    "title": "Space Travel and Human Exploration",
    "author": "Elizabeth Taylor",
    "content": "The dream of space travel has fueled human imagination for decades. As we develop technologies and explore possibilities, the prospect of interplanetary exploration and colonization becomes an exciting vision for the future. From moon landings to potential missions to Mars, humans continue to push the boundaries of our cosmic horizons, eager to venture beyond Earth and embrace the challenges of the cosmos,.",
     "url": "/milky.jpg"
 
    }
];





async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/articles`);

  if (!res.ok) {
 
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {

  const data = await getData();

  
  return (
    <main className="min-h-[200vh] max-w-7xl mt-24 mx-auto flex flex-col justify-center px-5">
      
      <div className='w-full text-center'>
           <h1 className='text-5xl font-semibold font-title'>La Voie De L&rsquo;Info</h1>
          <p className="text-xs font-normal">Votre fenêtre sur l&rsquo;actualité</p>
      </div>
      
      <div className='relative flex w-full h-auto p-5'>
        <div className='flex-grow  max-w-[973px] mx-auto '>
          {tps.slice(0,3).map((a, i) => (
          <Card key={i} article={a}/>
        ))}
          
        </div>
        <div className='sticky top-20 w-[250px] h-[700px] ml-5 hidden xl:inline'>
          {tps.slice(0,4).map((a, i) => (
            <>
            <CardSM key={i} article={a} />
            <div className='w-full h-[1px] bg-slate-300 my-4'></div>
            </>
         ))}
          
        </div>
      </div>
      
      <Slider2 />
      <div className='w-full h-[1px] bg-slate-300 my-4'></div>
      <div className='relative flex w-full h-auto p-5 '>
        <div className='flex-grow  max-w-[973px] mx-auto '>
          {tps.slice(0,3).map((a, i) => (
            <Card key={i} article={a}/>
        ))}
          
        </div>
        <div className='sticky top-20 w-[250px] h-[700px] ml-5 hidden xl:inline'>
          {tps.slice(0,4).map((a, i) => (
            <>
            <CardSM key={i} article={a} />
            <div className='w-full h-[1px] bg-slate-300 my-4'></div>
            </>
         ))}
          
        </div>
      </div>
  
      
    </main>
  )
}
