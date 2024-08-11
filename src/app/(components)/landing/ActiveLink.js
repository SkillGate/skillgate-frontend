import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div className={isActive ? 'active' : ''}>{children}</div>
    </Link>
  );
};

export default ActiveLink;
