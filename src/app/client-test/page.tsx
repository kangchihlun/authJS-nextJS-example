import { auth } from "@/auth/authSetup";
import ClientComponent from "@/components/ClientComponent";
import { SessionProvider } from "next-auth/react";

export default async function ClientPage() {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <h1>This is client page</h1>
      <ClientComponent />
    </SessionProvider>
  );
}
