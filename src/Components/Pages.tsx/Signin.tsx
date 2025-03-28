import { useRef } from "react";
import { BACKEND_URL } from "../../Configurl";
import { Button } from "../Button";
import { z } from "zod";
import { Input } from "../Input";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { MindsyncAuth } from "../Icon/Mind";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const signinSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const Signin = () => {
  const emailref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
  const Navigate = useNavigate();

  async function signin() {
    const email = emailref.current?.value;
    const password = passwordref.current?.value;

    const zodvalidation = signinSchema.safeParse({ email, password });
    if (!zodvalidation.success) {
      if (zodvalidation.error?.format().email)
        alert(zodvalidation.error?.format().email?._errors[0]);
      if (zodvalidation.error?.format().password)
        alert(zodvalidation.error?.format().password?._errors[0]);
      return;
    }

    try{
      const response = await axios({
        method: "post",
        url: BACKEND_URL + "/api/v1/signin",
        data: {
          email: email,
          password: password,
        },
      });

const token = response.data.token;
    if(token){
      alert("You are signed in ")
      Navigate("/content");
      localStorage.setItem("token", token);
    }



    }catch (e) {
      if ((e as AxiosError).response) {
        //@ts-expect-error(this error beacuse msg is my backend variable)
             alert((e as AxiosError).response?.data?.msg)
      } else if ((e as AxiosError).request) {
            console.log((e as AxiosError).request)
      } else {
        console.log("Internal server failed")
      }
    }



    


    
    
  }
  const Logogsap = useRef(null);

  useGSAP(() => {
    gsap.from(Logogsap.current, {
      rotate: 360,
      duration: 1,
      delay: 0.1,
      opacity: 0,
      scale: 0,
      ease: "back.out(1.7)",
    });
  });

  return (
    <div className="h-screen w-screen bg-[#101618]  flex justify-evenly items-center ">
      <div
        className="flex items-center  cursor-pointer "
        onClick={() => {
          Navigate("/");
        }}
      >
        <div ref={Logogsap}>{<MindsyncAuth />} </div>{" "}
        <div className="text-6xl text-[#65acbe] font-kanit font-semibold">
          SyncMind
        </div>
      </div>

      <div className="w-96 h-96 bg-white items-center justify-center flex flex-col  gap-2  rounded-xl border border-blue-500">
        <h1 className="font-Palanquin text-3xl pb-10 font-extrabold">
          Sign <span className=" text-[#65acbe]">In</span>{" "}
        </h1>
        <div className="w-full px-6">
          <Input placeholder="Email Id" ref={emailref} />
        </div>
        <div className="w-full px-6">
          <Input placeholder="Password" ref={passwordref} />
        </div>

        <Button
          onClick={signin}
          loding={false}
          text="Signin"
          variants="secondary"
          size="md"
        />
        <h3
          className="font-Palanquina cursor-pointer"
          onClick={() => {
            Navigate("/signup");
          }}
        >
          Dont't Have an Account?
        </h3>
      </div>
    </div>
  );
};
