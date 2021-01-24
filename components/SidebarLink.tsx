import { useRouter } from 'next/router'
import styles from '../styles/components/SidebarLink.module.css';
import Link from "next/link";

function SidebarLink({ href, label, icon: IconComponent, matchFullPath = false }) {
  const router = useRouter();
  const pathIsActive = matchFullPath ? router.pathname === href : router.pathname.startsWith(href);
  const iconSize = '1.25rem';

  return (
    <div className={styles.sidebarLink}>
      <Link href={href}>
        <div className={styles.sidebarLinkContent}>
          {label} <IconComponent width={iconSize} height={iconSize} className={pathIsActive ? styles.sidebarLinkIcon : styles.sidebarLinkIconInactive} />
        </div>
      </Link>
    </div>
  )
}

export default SidebarLink;
