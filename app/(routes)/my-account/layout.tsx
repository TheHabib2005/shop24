import Sidebar from "@/components/my-account-page/Sidebar";
import { accountMenus } from "@/utils/constant";
import Link from "next/link";
import { it } from "node:test";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-black md:p-6 p-4  flex items-center gap-8">
      <div className="flex flex-col gap-y-4  w-[250px] ">
        <h1 className=" text-white text-lg border-b border-zinc-800 pb-3 font-semibold">
          MY ACCOUNT
        </h1>

        <Sidebar />

      </div>

      <div className="text-white">
        {children}
      </div>

    </div>
  );
};

export default layout;
