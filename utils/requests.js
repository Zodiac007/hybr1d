import API from "../config/api";
import settings from "../config/settings";
const axios = require("axios");

export function getAxios(apiKey, id, queryparam) {
  const url =
    settings.API_ROOT + API[apiKey] + (id != undefined ? "/" + id : queryparam);
  return axios({
    method: "GET",
    url: url,
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
    .finally(function () {});
}

export function postAxios(apiKey, bodyData, authToken = null) {
  const url = settings.API_ROOT + API[apiKey];
  return axios({
    method: "POST",
    url: url,
    data: bodyData,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${authToken}`,
    },
  })
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    })
    .finally(function () {});
}
