import requestObject from "../handleRequest";

const { handleRequest } = requestObject(
  process.env.NEXT_PUBLIC_DUMMY_URL || ""
);

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
