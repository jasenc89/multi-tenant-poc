import type { NextApiRequest, NextApiResponse } from "next";
import { User, Company } from "@interfaces/index";
import { userDetails, companyDetails } from "utils/data";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};

export default handler;
