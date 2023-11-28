const { uploadPhoto, createUser } = require('./utils');

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.photoId} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
