import React from 'react';
import { Helmet } from 'react-helmet';

type PageProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Add other meta tags as needed */}
      </Helmet>
      {children}
    </>
  );
};

export default Page;
