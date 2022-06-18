import axios from "axios";


export default async function (req,res) {
    const { email, password } = req.body;
    const body = {
      email,
      mot_de_passe: password,
    };
    const client_access_token = req.cookies.a_token;
    if (!client_access_token) {
      return res.status(400).json({ message: "denied" });
    }


    axios
    .post(url, body, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${client_access_token}`,
      },
    })
    .then((result) => {
      const data = result.data;
      if (`${data.code_message}` !== "200") {
        return res.status(400).json({ message: "ERR_OAUTH" });
        //throw new Error("ERR_OAUTH")
      }
      return res.status(200).json({...data,isValide : true});
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message + "400" });
    });
}
