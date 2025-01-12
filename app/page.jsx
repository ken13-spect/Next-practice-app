"use client";
import Buttom from "@/components/Buttom";
import Link from "next/link";
import  {useRouter} from "next/navigation";

export default function Home() {
 const router = useRouter();
  const toUserPage = () => {
    router.push("/users");};
  return (
    <div
      className="bg-gradient-to-br from-[#6025F5] to-[#FF5555]
    p-7 flex flex-col justify-center items-center h-svh mx-auto rounded-lg"
    >
      <h1 className="font-semibold text-7xl text-center uppercase">
        Welcome to practice Next user App
      </h1>
      <p className="font-semibold text-2xl text-center my-2">
        This is a test project to explore the NextJs environment in building
        user interfaces.{" "}
      </p>
      <p className="font-normal text-xl text-center my-3">
        In the next button you will find a panel with multiple user cards that
        are being consumed from a practice ApiRest.
      </p>
     <Link href="/users">
      <Buttom onClick={toUserPage} text="Go to Users" />
     </Link>
    </div>
  );
}
