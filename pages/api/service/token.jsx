import axios from "axios";
import { serialize } from "cookie";

const url = "http://test.lemeilleurservice.org/api/oauth/token";
const client_secret = process.env.SECRET_CLIENT_KEY;

export default async function (req,res) {
    const { cookies } = req;
    const hold_token = cookies.a_token;
    const body = {
      grant_type: "client_credentials",
      client_id: "2",
      client_secret,
    };
    if (hold_token) {
      return res.status(200).json({ message: "Already exist token !" });
  }
  
    const result = await axios.post(url, body);
    const data = result.data;
    const token = data.access_token;
    const serialized = serialize("a_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge:  data.expires_in,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({ ...data });
}
