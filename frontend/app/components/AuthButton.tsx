'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();
  return session ? (
    <button onClick={() => signOut()}>Sign Out</button>
  ) : (
    <button onClick={() => signIn()}>Sign In</button>
  );
}
