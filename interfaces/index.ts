export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
  company: string;
};

export type Company = {
  id: number;
  name: string;
  addressLineOne: string;
  addressLineTwo: string;
  postcode: string;
  employeeCount: number;
};
