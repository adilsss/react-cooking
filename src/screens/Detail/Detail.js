import React from 'react';
import { Helmet } from 'react-helmet';

import { Recipe } from '../../components/Recipe/Recipe';
import { Layout } from '../../components/Layout/Layout';

export const Detail = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Recipe Detail</title>
    </Helmet>
    <Layout>
      <Recipe />
    </Layout>
  </>
);
