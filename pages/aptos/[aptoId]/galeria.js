import {useRouter} from 'next/router';
import ImageViewer from '../../../components/ImageViewer';

export default function Galeria() {
  const router = useRouter();
  const { aptoId } = router.query;

  if(!aptoId) {
    <div className="flex items-center justify-center h-screen bg-black-900 text-white-300">
        Carregando Galeria...
    </div>
  }

  return (
    <ImageViewer aptoId={aptoId} />
  );
}