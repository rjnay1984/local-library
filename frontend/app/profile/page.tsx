'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (!session) {
    router.push('/api/auth/signin');
  }
  return (
    <div>
      {session ? (
        status === 'authenticated' ? (
          <pre>{JSON.stringify({ ...session, status }, null, 2)}</pre>
        ) : (
          <pre>sign in</pre>
        )
      ) : (
        <div>not signed in</div>
      )}
    </div>
  );
}
