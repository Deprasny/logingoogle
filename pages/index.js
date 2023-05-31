import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function Component() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        name : {session.user.name} <br />
        foto : {session.user.image} <br />
        <img src={session.user.image} alt="foto" width="100px" /> <br />
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <div style={{ margin: "auto", width: "50%" }}>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  );
}
