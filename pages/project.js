import Head from 'next/head';


import fetch from 'isomorphic-unfetch'



function Blog({ posts }) {
  return (
    <div>
      {posts.map((post,index) => (
        <div>
          <h3>
             {post.title}
          </h3>
          <div>
              {post.body}
          </div>
        </div>
      ))}
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog