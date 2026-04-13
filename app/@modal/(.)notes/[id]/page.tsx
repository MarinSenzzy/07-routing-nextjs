import Modal from '@/components/Modal/Modal';
import { fetchOneNote } from '@/lib/api';

interface NotesPreviewProps {
  params: Promise<{ id: string }>;
}

const NotesPreview = async ({ params }: NotesPreviewProps) => {
  const { id } = await params;
  const note = await fetchOneNote(id);
  return (
    <>
      <Modal>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </Modal>
    </>
  );
};
export default NotesPreview;
