const fs = require('fs');

fs.readFile('userjson.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const users = JSON.parse(data); 
    const posts = {}; 

    users.forEach(user => {
      const userId = user.id;
      const userPosts = user.posts.length;
      posts[userId] = userPosts;
    });


    const updatedUsers = users.map(user => ({
      ...user,
      total_posts: posts[user.id] || 0, 
    }));

    const updatedData = JSON.stringify(updatedUsers, null, 2);
    fs.writeFile('updated_users.json', updatedData, 'utf8', err => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Data has been updated and written to updated_users.json');
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
