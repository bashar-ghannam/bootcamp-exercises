const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = (data) => console.log(data);

displayData(alert, logData, 'I like to party');

//copy code in google console
