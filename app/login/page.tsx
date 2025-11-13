// app/login/page.tsx  (server)
export const revalidate = 0; // valid here because this is a server module
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import LoginClient from "./LoginClient";

export default function LoginPage() {
  return <LoginClient />;
}
