const axios = require('axios');

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function base64_decode(s) {
  return decodeURIComponent(escape(atob(s)));
}

axios.interceptors.request.use(
  async config => {
    let token = getCookie('api_token');
    if (!token) {
      token = '';
    }

    config.headers = {
      'accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
    return config;
  },
  error => Promise.reject(error),
);

axios.interceptors.response.use(resp => resp, error => {
  if (401 === error.response.status) {
  }
  return Promise.reject(error);
})

export default axios;
