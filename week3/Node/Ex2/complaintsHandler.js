const complaints = require('./consts');

const handleComplaints = function (complaint) {
  if (complaint.type == complaints.FINANCE) {
    console.log('Money doesn’t grow on trees, you know.');
  } else if (complaint.type == complaints.WEATHER) {
    console.log('It is the way of nature. Not much to be done.');
  } else if (complaint.type == complaints.EMOTIONS) {
    console.log('It’ll pass, as all things do, with time.');
  }
};

module.exports = {
  handleComplaint: handleComplaints,
};
