'use client';

import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (!session) {
    router.push('/api/auth/signin');
  }
  return session ? (
    status === 'authenticated' ? (
      <pre>{JSON.stringify(session, null, 2)}</pre>
    ) : (
      redirect('/api/auth/signin')
    )
  ) : null;
}
