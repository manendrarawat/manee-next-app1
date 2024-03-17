import Hero from '@/components/hero';
import scaleImage from 'public/scale.jpg';


export default function ScalePage() {
  return (
    <Hero 
      imgData={scaleImage} 
      imgAlt='steel Factory'
      title='Scale your app to infinity.'
      />
  );
}
