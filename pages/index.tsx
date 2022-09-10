import Head from 'next/head';
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

const Home = ({ posts }: any) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index: any) => <PostCard post={post.node} key={index} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || []; //postları getir veya boş array dön.
  return {
    props: { posts }
  }
}
