"use client";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {useEffect, useMemo} from "react";
import {ROLE} from "@/consts/roles.const";

export default function VendorLayout({children}) {

    const currentUser = useSelector((state) => state.addUser.addCurrentUser);
    const router = useRouter();

    const isAdmin = useMemo(() => {
        return currentUser?.roles?.find(role => role.name === ROLE.ADMIN);
    }, [currentUser]);

    useEffect(() => {
        if (currentUser && currentUser.roles.find(role => role.name !== ROLE.ADMIN)) {
            router.push("/");
        }
    }, [currentUser]);

    return (
       <>
           {isAdmin && children}
       </>
    );
}
