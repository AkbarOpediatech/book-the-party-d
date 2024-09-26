import request from "./index";

export type IParam = {
  data?: any;
  headers?: any;
};

export async function getHome(params: IParam) {
  return request(
    "/homes",
    {
      method: "GET",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}

export async function getBanner(params: IParam) {
  return request(
    "/banners",
    {
      method: "GET",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}

export async function getBrowse(params: IParam) {
  return request(
    "/models",
    {
      method: "GET",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}

export async function getFaq(params: IParam) {
  return request(
    "/faqs",
    {
      method: "GET",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}

export async function getBlogs(params?: IParam) {
  return request(
    "/blogs",
    {
      method: "GET",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}

export async function getBlogById(id: number, params?: IParam) {
  return request(
    `/blogs/${id}`,
    {
      method: "GET",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}

export async function postContact(params?: IParam) {
  return request(
    `/contacts`,
    {
      method: "POST",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}

export async function getHowItsDone(params?: IParam) {
  return request(
    "/howitsdones",
    {
      method: "GET",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}

export async function getPricing(params?: IParam) {
  return request(
    "/pricings",
    {
      method: "GET",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}

export async function getSolar(params: IParam) {
  return request(
    "/solars",
    {
      method: "GET",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}
