import { fetchWordPressPosts } from './utils/wp-graphql.js';

console.log('Testing WordPress GraphQL connection...');
fetchWordPressPosts()
  .then(posts => {
    console.log('Successfully fetched posts from WordPress:');
    console.log(posts);
    process.exit(0);
  })
  .catch(error => {
    console.error('Error fetching posts from WordPress:', error);
    process.exit(1);
  });
