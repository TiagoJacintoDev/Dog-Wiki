import FeaturedArticle from '../components/FeaturedArticle';
import FeaturedBreeds from '../components/FeaturedBreeds';
import Hero from '../components/Hero';

export default function Home({ dogs }) {
  return (
    <>
      <Hero dogs={dogs} />
      <FeaturedBreeds dogs={dogs} />
      <FeaturedArticle />
    </>
  );
}
