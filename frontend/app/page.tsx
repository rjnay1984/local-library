import Link from 'next/link';
import { AuthButton } from './components';

export default async function Index() {
  return (
    <div>
      <Link href={'/profile'}>Profile</Link>
      <AuthButton />
    </div>
  );
}
