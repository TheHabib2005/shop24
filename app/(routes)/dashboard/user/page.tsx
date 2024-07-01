
import Link from "next/link";
import React from "react";

const Users = async () => {

  return <div>Users <Link href={"/dashboard/profile"}>Profile</Link></div>;
};

export default Users;
