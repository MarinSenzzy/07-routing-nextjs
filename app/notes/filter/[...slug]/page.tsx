// import NoteList from '@/components/NoteList/NoteList';
// type NoteFiltersProps = {
//   params: Promise<{ slug: string[] }>;
// };
// const NoteFilters = async ({ params }: NoteFiltersProps) => {
//   const { slug } = await params;

//   const category = slug[0] === 'all' ? undefined : slug[0];
//   console.log('🚀 ~ NoteFilters ~ category:', category);
//   const data = await fetchNotesTag({ search: '', page: 1, tag: category });

//   return (
//     <>
//       <div>
//         <h1>Note by filters</h1>
//         <NoteList notes={data.notes} />
//       </div>
//     </>
//   );
// };

// export default NoteFilters;
import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';

type NoteFiltersProps = {
  params: Promise<{ slug: string[] }>;
};

const NoteFilters = async ({ params }: NoteFiltersProps) => {
  const { slug } = await params;

  const category = slug[0] === 'all' ? undefined : slug[0];
  console.log('🚀 ~ NoteFilters ~ category:', category);

  const data = await fetchNotes({ search: '', page: 1, tag: category });

  return (
    <>
      <div>
        <h1>Note by filters</h1>
        <NoteList notes={data.notes} />
      </div>
    </>
  );
};

export default NoteFilters;
