import { PageTitleHero } from './PageTitle.styled';

const PageTitle = ({ children }) => {
  return (
    <PageTitleHero>
      <h1 className="page-title">{children}</h1>
    </PageTitleHero>
  );
};
export { PageTitle };
