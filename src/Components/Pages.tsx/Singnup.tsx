import { useRef } from "react";
import { Button } from "../Button";

import { Input } from "../Input";
import axios from "axios";
import { BACKEND_URL } from "../../Configurl";
import { useNavigate } from "react-router-dom";
import { MindsyncAuth } from "../Icon/Mind";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { z } from "zod";

const signinSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const Singup = () => {
  const emailref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
  const Navigate1 = useNavigate();

  async function signup() {
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

    const response = await axios({
      method: "post",
      url: BACKEND_URL + "/api/v1/signup",
      data: {
        email: email,
        password: password,
      },
    });

    console.log(response.data);
    Navigate1("/signin");
    alert("User succesfully registered");
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
        className="flex items-center "
        onClick={() => {
          Navigate1("/");
        }}
      >
        {" "}
        <div ref={Logogsap}>{<MindsyncAuth />} </div>{" "}
        <div className="text-6xl text-[#65acbe] font-kanit font-semibold">
          {" "}
          SyncMind{" "}
        </div>
      </div>

      <div className="w-96 h-96 bg-white items-center justify-center flex flex-col  gap-2  rounded-xl border border-blue-500">
        <h1 className="font-Palanquin text-3xl pb-10 font-extrabold">
          Sign <span className=" text-[#65acbe]">Up</span>
        </h1>
        <div className="w-full px-6">
          <Input placeholder="Email id" ref={emailref} />
        </div>
        <div className="w-full px-6">
          <Input placeholder="Password" ref={passwordref} />
        </div>

        <Button
          onClick={signup}
          loding={false}
          text="Signup"
          variants="secondary"
          size="md"
        />

        <h3
          className="font-Palanquina cursor-pointer"
          onClick={() => {
            Navigate1("/signin");
          }}
        >
          Already Have an Account?
        </h3>
      </div>
    </div>
  );
};
