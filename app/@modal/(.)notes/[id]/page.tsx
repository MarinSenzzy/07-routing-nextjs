import Modal from '@/components/Modal/Modal';
import { fetchOneNote } from '@/lib/api';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import NotePreviewClient from './NotePreview.client';

interface NotesPreviewProps {
  params: Promise<{ id: string }>;
}

const NotesPreview = async ({ params }: NotesPreviewProps) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchOneNote(id),
  });
  return (
    <>
      <Modal>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <NotePreviewClient />
        </HydrationBoundary>
      </Modal>
    </>
  );
};
export default NotesPreview;
