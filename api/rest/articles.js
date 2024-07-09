import makeRequest from "~/api/makeRequest.js";

export const getArticles = (limit, offset) => {
  return makeRequest({
    url: "/api/articles",
    params: {
      "pagination[page]": offset,
      "pagination[pageSize]": limit,
      populate: `*`,
    },
    method: "GET",
  });
};

export const getArticle = (id) => {
  return makeRequest({
    url: `/api/articles/${id}`,
    params: {
      populate: `*`,
    },
    method: "GET",
  });
};
