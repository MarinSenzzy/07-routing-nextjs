import { NoteTag } from '@/types/note';
import css from './SidebarNotes.module.css';
const sidebarTags: NoteTag[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];
const NotesSidebar = () => {
  return (
    <>
      <ul className={css.menuList}>
        {/* список тегів */}
        <li className={css.menuItem}>
          <a href={`/notes/filter/all`} className={css.menuLink}>
            All notes
          </a>
        </li>
        {sidebarTags.map(tag => {
          return (
            <li key={tag} className={css.menuItem}>
              <a href={`/notes/filter/${tag}`} className={css.menuLink}>
                {tag}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default NotesSidebar;
