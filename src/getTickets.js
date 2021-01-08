const axios = require('axios');
const { search, ticketsUrl } = require("./constants");

export async function getTickets() {
  const id = await axios.get(search);
  const { searchId } = id.data;

  const list = await axios.get(ticketsUrl, {
      params: {
        searchId
      }
    });
  const { tickets } = list.data;

  return tickets;
}

// module.exports = getTickets;