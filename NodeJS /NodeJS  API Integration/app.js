const axios = require('axios');

async function getUsersWithPosts() {
  try {
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = usersResponse.data;

    const usersWithPosts = await Promise.all(users.map(async user => {
      const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      const posts = postsResponse.data;
      return {
        ...user,
        posts
      };
    }));

    return usersWithPosts;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

getUsersWithPosts()
  .then(usersWithPosts => {
    console.log('Users with their posts:');
    console.log(usersWithPosts);
  })
  .catch(error => {
    console.error(error.message);
  });
