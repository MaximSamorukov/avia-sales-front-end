const axios = require('axios');
const { search, tickets } = require("./constants");

function getTickets() {
  axios.get(search).then((response) => {
    const { searchId } = response.data;
    // console.log(searchId);
    axios.get(tickets, {
      params: {
        searchId
      }
    }).then((res) => {
      const { tickets } = res.data
        console.log(tickets);
    })
    .catch((err) => {
      console.log(err);
    })
  })
  .catch((error) => {
    console.log(error);
  });

}

module.exports = getTickets;