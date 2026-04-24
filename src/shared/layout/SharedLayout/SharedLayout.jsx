import { Header, Footer, Loader } from '@/shared';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ScrollToTop } from '@/shared';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ScrollToTop />
      {/* Button for quick return to top  */}
      <Footer />
    </>
  );
};

export { SharedLayout };
