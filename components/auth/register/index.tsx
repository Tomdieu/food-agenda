"use client";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { Input } from "@nextui-org/react";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import Link from "next/link";
import { LINKS } from "@/constants";

type Props = {};

const RegisterForm = (props: Props) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="p-3">
        <Link href="/"><h5 className="sm:hidden font-bold cursor-pointer select-none">Trix Url</h5></Link>
      </div>
      <div className="p-3 px-5 w-full flex-1 h-fullitems-center justify-center flex flex-col">
        <h1 className="text-3xl font-bold text-center my-5">Welcome back</h1>
        <form action="" method="post" className="flex flex-col gap-4 px-2 lg:px-12">
          <div>
            <h5 className="text-center font-bold">Create an account </h5>
            <span className="text-current font-light text-xs text-gray-600 text-center block">
              Fill the form below
            </span>
          </div>
          <div className="w-full">
            <Input variant="bordered" type="email" label="Email" placeholder="Enter your email" className="rounded-none" />
          </div>
          <div className="w-full flex">
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              className="w-full flex-1"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>
          <Button className="bg-black text-white py-6">Register</Button>
          
        </form>
        <div className="py-5 w-full flex items-center justify-center">
          <h5 className="text-sm">Already have an account ? <Link className="font-semibold" href={LINKS.login}>Login</Link></h5>
        </div>
        <div className="flex gap-1 my-3 px-2 lg:px-12 items-center">
          <Divider className="flex-1"/>
          <h5 className="text-md">Or continue with</h5>
          <Divider className="flex-1"/>

        </div>
        <div className="flex flex-cols gap-2 px-2 lg:px-12">
          <Button className="w-full hover:bg-black hover:text-white">
            <AiFillGithub/>
            <span className="">Github</span>
          </Button>
          <Button className="w-full hover:bg-black hover:text-white">
            <AiFillGoogleCircle/>
            <span className="">Google</span>
          </Button>
        </div>
      </div>
      <div className="flex my-5 flex-col items-center">
        <h5 className="text-md font-bold">Trix Url</h5>
        <p>Copyright &copy; {new Date().getFullYear()} Tomdieu </p>
      </div>
    </div>
  );
};

export default RegisterForm;
