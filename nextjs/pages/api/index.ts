import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: "Baek",
    age: 27,
    query: req.query,
  });
}
