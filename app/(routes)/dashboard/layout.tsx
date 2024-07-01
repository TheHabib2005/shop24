import Link from "next/link";
import React, { ReactNode } from "react";

const layout = () => {
  return (
    <div className="text-white flex items-center gap-5">

      <ul className="flex flex-col gap-5">
        <Link href={"/dashboard/profile"}>profile</Link>
        <Link href={"/dashboard/user"}>user</Link>
      </ul>
      {children}

    </div>
  );
};

export default layout;
