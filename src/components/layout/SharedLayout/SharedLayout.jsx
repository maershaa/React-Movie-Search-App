import { Header, Footer, Loader } from '@/components/layout';
import { Container } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <Container>
      <Header />

      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </Container>
  );
};

export { SharedLayout };
