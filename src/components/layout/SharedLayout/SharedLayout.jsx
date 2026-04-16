import { Header, Footer, Loader } from '@/components/layout';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export { SharedLayout };
