import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-col h-screen w-full flex items-center justify-center ">
      <Image src={"./404.svg"} width={500} height={500} alt={"404_img"} />
      <Link className="mt-3 p-5" href={"/"}>
        <Button>Go back to home</Button>
      </Link>
    </div>
  );
}
