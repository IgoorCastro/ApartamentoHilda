"use client"; // Mantemos a diretiva de cliente por causa dos hooks e framer-motion

import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'; // Use next/router para Next 12 (Pages Router)
import { motion } from "framer-motion";
import ButtonOutline from "./misc/ButtonOutline.";

// Mantenha o imagesMap aqui ou importe-o
const imagesMap = {
  "7p": ["/assets/7p/sala1.jpg", "/assets/7p/sala2.jpg", "/assets/7p/q1.JPG", "/assets/7p/q11.jpg", "/assets/7p/q2.jpg", "/assets/7p/q21.jpg", "/assets/7p/cozinha1.jpg", "/assets/7p/banheiro1.jpg"],
  "8p": ["/assets/8p/sala.jpg", "/assets/8p/q1.jpg", "/assets/8p/q2.jpg", "/assets/8p/q3.jpg", "/assets/8p/cozinha1.jpg", "/assets/8p/banheiro.jpg"],
  "10p": ["/assets/10p/sala2.jpg", "/assets/10p/sala1.jpg", "/assets/10p/q1.JPG", "/assets/10p/q12.jpg", "/assets/10p/q2.jpg", "/assets/10p/q3.JPG", "/assets/10p/banheiro.jpg", "/assets/10p/sacada.JPG", "/assets/10p/sacada12.jpg"],
};

// Se precisar do ButtonOutline, importe-o. Se não, use botões padrão.
// import ButtonOutline from "./misc/ButtonOutline.";

export default function GalleryPageContent({ aptoId }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = imagesMap[aptoId];

  // Verifica se o ID do apartamento é válido
  if (!images) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black-900 text-white-300 text-xl z-50">
        Apartamento {aptoId} não encontrado.
      </div>
    );
  }

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Função para voltar à página anterior (simulando fechar o modal)
  const closeViewer = () => {
    router.back();
  };

  return (
    // O modal agora é a página inteira, usamos 'fixed inset-0' para cobrir tudo
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Use 'min-h-screen' em vez de 'fixed inset-0' se você quiser rolar a página
      className="fixed inset-0 z-50 flex items-center justify-center bg-black-900 bg-opacity-95"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative w-full h-full flex flex-col items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* O contêiner da imagem ocupa a maior parte da tela */}
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center overflow-hidden bg-black-900 bg-opacity-95">
            {/* Note a ausência de AnimatePresence aqui, pois a transição da imagem é mais complexa sem ela */}
            <Image
              key={currentIndex} // Chave para forçar o re-render e garantir a troca
              src={images[currentIndex]}
              alt={`Apartamento ${aptoId} - Foto ${currentIndex + 1}`}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* buttons */}
         {/* buttons */}
                  <div className="absolute z-50 bottom-10 flex justify-center w-full">
                    <div className="flex justify-between w-3/4 max-w-3xl gap-20">
                      <ButtonOutline
                        onClick={prevImage}
                      >
                        Anterior
                      </ButtonOutline>
                      <ButtonOutline
                        onClick={nextImage}
                      >
                        Próximo
                      </ButtonOutline>
                    </div>
                  </div>

        <button
          onClick={closeViewer} // Agora chama a função de navegação
          className="absolute z-50 top-6 right-12 text-white-300 font-bold text-3xl border border-orange-500 hover:bg-orange-500 hover:text-white-500 transition-all p-4 rounded-full w-12 h-12 flex items-center justify-center"
        >
          ×
        </button>

        {/* Indicador de Imagem */}
        <p className="absolute z-50 top-6 left-12 text-white-300 text-lg">
          {currentIndex + 1} / {images.length}
        </p>
      </motion.div>
    </motion.div>
  );
}