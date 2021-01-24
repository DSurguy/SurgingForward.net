import styles from '../styles/components/Sidebar.module.css'
import HomeIcon from './icons/HomeIcon';
import ExperimentIcon from './icons/ExperimentIcon';
import FileTextIcon from './icons/FileTextIcon';
import ReadIcon from './icons/ReadIcon';
import MailIcon from './icons/MailIcon';
import SidebarLink from './SidebarLink';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarLink}>
        <SidebarLink href="/" label="Home" icon={HomeIcon} matchFullPath />
      </div>
      <div className={styles.sidebarLink}>
        <SidebarLink href="/contact" label="Contact" icon={MailIcon} />
      </div>
      <div className={styles.sidebarLink}>
        <SidebarLink href="/resume" label="Contact" icon={FileTextIcon} />
      </div>
      <div className={styles.sidebarLink}>
        <SidebarLink href="/blog" label="Blog" icon={ReadIcon} />
      </div>
      <div className={styles.sidebarLink}>
        <SidebarLink href="/labs" label="Labs" icon={ExperimentIcon} />
      </div>
    </div>
  )
}
