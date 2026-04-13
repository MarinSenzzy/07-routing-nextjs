import NoteDetailsClient from '@/app/notes/[id]/NoteDetails.client';
import Modal from '@/components/Modal/Modal';
// import { useRouter } from 'next/router';

interface NotesPreviewProps {
  params: Promise<{ id: string }>;
}

const NotesPreview = async ({ params }: NotesPreviewProps) => {
  const { id } = await params;
  return (
    <>
      <Modal onClose={() => {}}>
        <NoteDetailsClient />
      </Modal>
    </>
  );
};
export default NotesPreview;
