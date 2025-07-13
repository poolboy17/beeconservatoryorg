import Link from 'next/link';
import ArrowIcon from '../components/ArrowIcon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import { fetchWordPressPosts } from '../utils/wp-graphql';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title="Bee Conservatory" description="Welcome to Bee Conservatory – Your source for bee conservation, education, and community action. Explore our latest articles, tips, and resources to help save the bees!" />
      <Header name="Bee Conservatory" />
      <main className="w-full">
        <h1 className="mb-12 text-4xl text-center lg:text-6xl font-extrabold text-yellow-700 drop-shadow-lg">
          Bee Conservatory
        </h1>
        <p className="mb-8 text-center text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          Welcome to Bee Conservatory – Your source for bee conservation, education, and community action. Explore our latest articles, tips, and resources to help save the bees!
        </p>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.id}
              className="transition border border-b-0 bg-yellow-50/60 border-yellow-200/60 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-yellow-900/30 hover:bg-yellow-100/80 dark:hover:bg-yellow-900/50 dark:border-yellow-100/10 last:border-b shadow-sm"
              data-sb-object-id={`posts/${post.slug}`}
            >
              <Link
                as={`/posts/${post.slug}`}
                href={`/posts/[slug]`}
                className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-hidden focus:ring-4 focus:ring-yellow-400/50"
              >
                {post.date && (
                  <p className="mb-3 font-bold uppercase opacity-60 text-yellow-800 dark:text-yellow-200">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                )}
                <h2 className="text-2xl md:text-3xl font-semibold text-yellow-900 dark:text-yellow-100">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <div
                    className="mt-3 text-lg opacity-80 text-gray-800 dark:text-gray-100"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                )}
                <ArrowIcon className="mt-4 text-yellow-600" />
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText="© 2025 Bee Conservatory. All rights reserved. | beeconservatory.org" />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await fetchWordPressPosts();
  const globalData = getGlobalData();
  return { props: { posts, globalData }, revalidate: 60 };
}
