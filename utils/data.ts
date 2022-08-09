import { User, Company } from "@interfaces/index";

export const userDetails: User[] = [
  {
    id: 1,
    name: "Jasen Chawda",
    username: "jasennavos",
    password: "navosuser",
    company: "Navos Labs",
  },
  {
    id: 2,
    name: "David Hayes",
    username: "davidnavos",
    password: "navosuser",
    company: "Navos Tech",
  },
  {
    id: 3,
    name: "Nathan Cross",
    username: "nathannavos",
    password: "navosuser",
    company: "Navos Corporation",
  },
];

export const companyDetails: Company[] = [
  {
    id: 1,
    name: "Navos Labs",
    addressLineOne: "123 Fake Street",
    addressLineTwo: "Bristol",
    postcode: "BS35 7YU",
    employeeCount: 20,
  },
  {
    id: 1,
    name: "Navos Tech",
    addressLineOne: "65 Startup Road",
    addressLineTwo: "Bath",
    postcode: "BA7 8JP",
    employeeCount: 10,
  },
  {
    id: 1,
    name: "Navos Corporation",
    addressLineOne: "1 Big Street",
    addressLineTwo: "London",
    postcode: "SW18 9KX",
    employeeCount: 1000,
  },
];
