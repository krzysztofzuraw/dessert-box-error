import Box from "./Box";

export const Input = () => (
  <Box as="input" onChange={(event) => console.log(event)} />
);
