import fetch from 'node-fetch';

const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT || 'https://red-oryx-356192.hostingersite.com/graphql';

const query = `{
  posts(first: 1) {
    nodes {
      id
      title
      date
      slug
    }
  }
}`;

async function testGraphQL() {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    const json = await res.json();
    console.log('GraphQL response:', JSON.stringify(json, null, 2));
  } catch (err) {
    console.error('GraphQL connection failed:', err);
    process.exit(1);
  }
}

testGraphQL();
