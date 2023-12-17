async function name1(para) {
  const responce = await navigator.permissions.query({ name: para });
  return responce;
}
const state1 = name1('geolocation').then((result) => {
  if (result.state === 'granted') {
    console.log('granted');
  } else if (result.state == 'prompt') {
    console.log('prompted');
  } else {
    console.log('denied');
  }
});
console.log(state1);
// it can be "granted", "prompt", "denied"
// if it throws exception, it's an unsupported permission
