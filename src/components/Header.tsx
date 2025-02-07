"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

import CookieService from "@/services/CookieService";
import DropdownMenu from "./DropdownMenu";

function Header() {
  const router = useRouter();
  const [role, setRole] = useState("");

  useLayoutEffect(() => {
    const crole = CookieService.get("role");
    if (crole) {
      setRole(crole);
    }
  }, []);
  const handleLogout = () => {
    CookieService.remove("role");
    router.push("/login");
  };
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      <p className="font-bold text-lg text-primary">BCPay</p>
      <div className="flex items-center gap-2">
        <span className="capitalize font-bold text-primary ml-1">
          {role?.toLocaleUpperCase()}
        </span>

        <DropdownMenu
          button={
            <button className="flex justify-center items-center text-white bg-primary h-10 w-10 px-4 py-4 rounded-full font-bold">
              {role?.charAt(0)?.toUpperCase()}
            </button>
          }
          optionClassName="min-w-[200px]"
        >
          <span>
            Welcome
            <span className="capitalize font-bold text-primary ml-1">
              {role?.toLocaleUpperCase()}
            </span>
          </span>
          <div
            onClick={handleLogout}
            className="bg-slate-200 text-red-500 p-2 rounded-lg mt-2 cursor-pointer"
          >
            Logout
          </div>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Header;
