import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    })
  );
  res.status(200).json({ message: "Logout successful" });
};

export default handler;
