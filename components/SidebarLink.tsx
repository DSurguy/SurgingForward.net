import { useRouter } from 'next/router'
import styles from '../styles/components/SidebarLink.module.css';
import Link from "next/link";

function SidebarLink({ href, label, icon: IconComponent, matchFullPath = false }) {
  const router = useRouter();
  const pathIsActive = matchFullPath ? router.pathname === href : router.pathname.startsWith(href);
  const iconSize = '1.25rem';
  const linkClassNames = [styles.sidebarLink];
  const iconClassName = [styles.sidebarLinkIcon];
  if( pathIsActive ) {
    linkClassNames.push(styles.sidebarLinkActive);
    iconClassName.push(styles.sidebarLinkIconActive);
  }

  return (
    <div className={linkClassNames.join(' ')}>
      <Link href={href}>
        <div className={styles.sidebarLinkContent}>
          {label} <IconComponent width={iconSize} height={iconSize} className={iconClassName.join(' ')} />
        </div>
      </Link>
    </div>
  )
}

export default SidebarLink;
