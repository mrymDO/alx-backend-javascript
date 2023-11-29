import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then(([userResult, photoResult]) => [
      { status: userResult.status, value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason.message },
      { status: photoResult.status, value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason.message },
    ]);
}
