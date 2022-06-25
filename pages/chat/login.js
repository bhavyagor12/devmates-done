import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import Firework from "../../components/Firework";
import Particle from "../../components/Particles";
import Image from "next/image";
const login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <div className="grid place-items-center min-h-screen bg-[#032a5d]">
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <div className="mb-[50px]">
          <Image
            src={require("../../public/images/icon.png")}
            alt="not fair"
            width={300}
            height={300}
          />
        </div>

        <Button
          onClick={signIn}
          className="font-semi rounded-full  bg-white dark:bg-[#18181b] py-2 px-4 text-xl text-[#0082EF] hover:bg-[#032A5D] hover:text-white  dark:hover:bg-white dark:hover:text-[#0082EF]"
        >
          Sign in with Google
        </Button>
      </LoginContainer>
    </div>
  );
};

export default login;

const LoginContainer = styled.div`
  padding: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
`;
