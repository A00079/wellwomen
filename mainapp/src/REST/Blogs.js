const baseUrl = 'https://www.curvicare.com/';
// const baseUrl = 'http://localhost:5000/'
const PostData = {

  postBlogdetails(urls,data) {
    const url = urls;
    return this.requestPostCall(baseUrl + url,data);
  },
  updateBlogdetails(urls,data) {
    const url = urls;
    return this.requestPostCall(baseUrl + url,data);
  },
  getBlogList(urls) {
    const url = urls;
    return this.requestGetCall(baseUrl + url);
  },
  deleteBlog(urls,data) {
    const url = urls;
    return this.requestDeleteCall(baseUrl + url,data);
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
  },
  requestGetCall(url,data) {
    return fetch(url, {
      method: 'GET',
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
  },
  requestDeleteCall(url,data) {
    return fetch(url, {
      method: 'DELETE',
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

export default PostData;


