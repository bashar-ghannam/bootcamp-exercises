const push = function () {
  console.log('pushing it!');
};

const pull = function (callback) {
  console.log('pulling it!');
};

const pushPull = (callback) => {
  callback();
};

pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"
