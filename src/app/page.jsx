import Hero from '../components/Hero';
import Feature from '../components/Feature';
import ContentCP from '../components/Content';
import Guest from '../components/Guest';
import Gift from '../components/Gift';
import EventCP from '../components/Event';
import FormCP from '../components/Form';
import Book from '../components/Book';

export default function Home() {
  return (
    <>
      <Hero />
      <Guest />
      <ContentCP />
      <Gift />
      <EventCP />
      <Book />
      <FormCP />

      {/* <Feature />
      <Pricing /> */}
    </>
  );
}
