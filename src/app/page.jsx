import Book from '../components/Book';
import ContentCP from '../components/Content';
import EventCP from '../components/Event';
import FormCP from '../components/Form';
import Gift from '../components/Gift';
import Guest from '../components/Guest';
import Hero from '../components/Hero';
import TextFooter from '../components/TextFooter';

export const metadata = {
  title: 'Online Workshop - Chiến thuật IELTS thông minh cùng Giám khảo IDP',
  description:
    'Tham gia Online Workshop "Tactics with IELTS Tactics" để khám phá chiến thuật nâng band IELTS cấp tốc, gặp Giám khảo IDP kỳ cựu & Cựu SV Bắc Đại. Đăng ký ngay!',

  openGraph: {
    images: [
      `https://www.ieltstactics.dotphaband75.vn/assets/logo-ielts-tactics.png`,
    ],
    type: 'website',
    siteName: 'ieltstactics',
  },
};

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
      <TextFooter />
    </>
  );
}
