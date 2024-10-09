import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white-100 rounded-lg shadow-md  border border-blue-200">
        <div className="flex flex-col justify-center items-center -mt-5">
          <Image
            src={"./banner.svg"}
            width={100}
            height={100}
            alt={"banner_img"}
          />
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-center text-transparent bg-clip-text">
            Jhoot
          </h1>
        </div>

        <h2 className="text-2xl font-bold text-center">Login</h2>

        <form>
          <div className="mt-4">
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              type="name"
              id="name"
              placeholder="Enter your name here.."
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="cpassword">Confirm Password</Label>
            <Input
              name="cpassword"
              id="cpassword"
              type="cpassword"
              placeholder="Enter your confirm password"
            />
          </div>
          <div className="text-right font-mono mt-2">
            <Link href="forget-cpassword">Forgot password ? </Link>
          </div>
          <div className="mt-4">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <p className="text-center mt-2">
            Don't have an account ? {" "}
            <Link  className= "font-bold" href="/register">
                Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
