import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterParams) => {
  const findUser = await userModel.findOne({ email });
  if (findUser) {
    return { data: "User Already exists", statusCode: 400 };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new userModel({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  return { data: generateJWT({firstName , lastName , email}), statusCode: 200 };
};

export interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    return { data: "incorect email or password !" , statusCode:400 };
  }

  const passwordWatch = await bcrypt.compare(password , findUser.password);
  if (passwordWatch) {
    return { data: generateJWT({email , firstName:findUser.firstName , lastName:findUser.lastName}), statusCode: 200 };
  }

    return { data: "incorect email or password !", statusCode: 400 };
};


const generateJWT =(data:any)=>{
    return jwt.sign(data , "Jhjgjh%45TFt%$%^GF&^*&HG5fdr3fd#fdfse")
}