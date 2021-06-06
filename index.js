const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('OK');
    }, 1000);
  }).then(value => console.log(`success: ${value}`));
  
  ///Promise definiálása és OK elkapás await-tel.
  const myPromiseAwait = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Timeout ended.');
      resolve('OK');
    }, 1000);
  });
  
  async function testAwait() {
    const value = await myPromiseAwait;
    console.log(`Await: ${value}`);
  }
  testAwait();
  