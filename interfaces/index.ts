// A file for shared interfaces/types
// Can be used in any component by importing them
// For example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

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
