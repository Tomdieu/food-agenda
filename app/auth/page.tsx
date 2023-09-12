"use client";
import { Button } from "@nextui-org/react";
import React from "react";

type Props = {};

const AuthPage = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="p-3">
        <h5 className="">Trix Url</h5>
      </div>
      <div className="p-3 px-5 w-full flex-1 h-fullitems-center justify-center flex flex-col">
        <h1 className="text-3xl font-bold text-center my-5">Get Started</h1>
        <div className="container mx-auto flex gap-2 items-center justify-arround">
          <Button className="flex-1 bg-blue-500 text-white py-6">Log in</Button>
          <Button className="flex-1 bg-blue-500 text-white py-6">
            Sign in
          </Button>
        </div>
      </div>
      <div className="flex my-5 flex-col items-center">
        <h5 className="text-md font-bold">Trix Url</h5>
        <p>Copyright &copy; {new Date().getFullYear()} Tomdieu   </p>
      </div>
    </div>
  );
};

export default AuthPage;
