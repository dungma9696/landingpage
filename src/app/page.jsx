import Book from '../components/Book';
import ContentCP from '../components/Content';
import EventCP from '../components/Event';
import FormCP from '../components/Form';
import Gift from '../components/Gift';
import Guest from '../components/Guest';
import Hero from '../components/Hero';
import TextFooter from '../components/TextFooter';

export const metadata = {
  title:
    'Workshop Chiến thuật tăng điểm IELTS cùng Quản lý cấp cao IDP và Cựu SV Bắc Đại',
  description:
    'Tham gia Online Workshop "Đột phá Band 7.5" để khám phá CHIẾN LƯỢC TĂNG ĐIỂM NGAY LẬP TỨC, gặp gỡ Chuyên gia IDP & Cựu SV Bắc Đại. Đăng ký ngay!',

  openGraph: {
    images: [
      `https://dotphaband75.ieltstactics.vn/assets/thumb.jpg`,
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
