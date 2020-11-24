const baseUrl = process.env.REACT_APP_API_URL;
// const baseUrl = 'http://localhost:5000/'
const raiseTicket = {
  
  postUserTicket(urls,data) {
    const url = urls;
    return this.requestPostCall(baseUrl + url,data);
  },
  getTicketData(urls, data) {
    const url = urls;
    return this.requestPostCall(baseUrl + url, data);
  },

  requestPostCall(url,data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        return err;
      });
  }
};

export default raiseTicket;


