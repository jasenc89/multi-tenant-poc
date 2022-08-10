import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { User, Company } from "@interfaces/index";
import { userDetails, companyDetails } from "../../utils/data";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;

  for (let i = 0; i < userDetails.length; i++) {
    if (userDetails[i].username === username) {
      if (userDetails[i].password === password) {
        res.status(200).json({ message: userDetails[i] });
        return;
      } else {
        res.status(400).json({ message: "Incorrect password" });
        return;
      }
    } else {
      res.status(400).json({ message: "Username not found" });
      return;
    }
  }
};

export default handler;
