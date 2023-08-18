var promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 2000);
});

// promise
//   .then(() => {
//     return Promise.resolve(2);
//   })
//   .then((res) => {
//     console.info("res-->", res);
//   });

// promise.then(() => 2).then((res) => console.info("res--->", res));

promise.then(2).then((res) => console.info("res--->", res));
