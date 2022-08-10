import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { userDetails, companyDetails } from "../../utils/data";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;
  let userExists = false;
  let passwordCorrect = false;

  for (let i = 0; i < userDetails.length; i++) {
    if (userDetails[i].username === username) {
      userExists = true;
      if (userDetails[i].password === password) {
        passwordCorrect = true;
        for (let j = 0; j < companyDetails.length; j++) {
          if (userDetails[i].company === companyDetails[j].name) {
            res.setHeader(
              "Set-Cookie",
              cookie.serialize("token", JSON.stringify(companyDetails[j]), {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60 * 60 * 24,
                sameSite: "strict",
                path: "/",
              })
            );
          }
        }
      }
    }
  }

  if (userExists === false) {
    res.status(400).json({ message: "Username not found" });
    return;
  } else if (passwordCorrect === false) {
    res.status(400).json({ message: "Incorrect password" });
    return;
  }

  res.status(200).json({ message: "Login successful" });
  return;
};

export default handler;
