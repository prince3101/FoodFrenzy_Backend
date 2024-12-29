const { generateToken } = require("../helper/genrateToken");
const user = require("../model/user");

const SignUp = async (req, res) => {
  try {
    const body = req.body;
    const isUser = await user.findOne({ email: body?.email });

    if (isUser) {
      return res.status(400).send({ message: "User already exist !!" });
    }

    const bodyData = await user.create(body);
    return res.status(200).send({ message: "user register successfully!!!", payload: bodyData });
  } catch (error) {
    return res.status(500).send({ message: "something went wrong !!" });
  }
};

const LoginUser = async (req, res) => {
  try {
    const body = req.body;

    const { email, password } = body;

    const isUser = await user.findOne({ email }).select("+password");

    if (!isUser) {
      return res.status(400).send({ message: "User not exist !!" });
    }

    const isPassword = await user.comparePassword(password, isUser.password);

    if (!isPassword) {
      return res.status(400).send({ message: "Wrong Password !!" });
    }

    const token = await generateToken(isUser?._id);

    // return { data: isUser, token };
    return res
      .status(200)
      .send({ message: "user login successfully!!!", payload: { user: isUser, token: token } });
  } catch (error) {
    return res.status(500).send({ message: "something went wrong !!" });
  }
};

module.exports = {
  SignUp,
  LoginUser,
};
