import React from 'react';
import { Helmet } from 'react-helmet';

import { Recipes } from '../../components/Recipes/Recipes';
import { Layout } from '../../components/Layout/Layout';

export const Main = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Home</title>
    </Helmet>
    <main>
      <Layout>
        <Recipes />
      </Layout>
    </main>
  </>
);
