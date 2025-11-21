import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Hosts";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Listings = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 relative"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Escolha a melhor opção.
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Oferecemos três opções de apartamentos, todos preparados para receber sua família com conforto. Cada unidade dispõe de Wi-Fi e estacionamento gratuito nas proximidades.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-6 xl:px-8"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <Link href="/aptos/7p/galeria">
                  <div className="w-265 h-265 p-0 mt-6 lg:mt-16 pulse-wrapper cursor-pointer">
                    <Image
                      src="/assets/7p/sala1.jpg"
                      width={265}
                      height={265}
                      alt="Apartamento 7 pessoas"
                      className="rounded-md"
                    />
                  </div>
                </Link>
                <p className="text-lg text-black-600 font-medium capitalize my- sm:my-7">
                  7 Pessoas
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Primeiro andar
                  </li>
                  <li className="relative check custom-list my-2">
                    Sala com TV
                  </li>
                  <li className="relative check custom-list my-2">
                    2x Quartos com ventilador
                  </li>
                  <li className="relative check custom-list my-2">
                    Cozinha equipada
                  </li>
                  <li className="relative check custom-list my-2">
                    Banheiro exclusivo
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    $300 <span className="text-black-500">/ dia</span>
                  </p>
                  <a
                    href="https://w.app/apto7pessoas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonOutline>Whatsapp</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-6 xl:px-8"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <Link href="/aptos/8p/galeria">
                  <div className="w-265 h-265 p-0 mt-6 lg:mt-16 pulse-wrapper cursor-pointer">
                    <Image
                      src="/assets/8p/sala.jpg"
                      width={265}
                      height={265}
                      alt="Apartamento 8 pessoas"
                      className="rounded-md"
                    />
                  </div>
                </Link>


                <p className="text-lg text-black-600 font-medium capitalize my-5 sm:my-7">
                  8 Pessoas
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Terreo
                  </li>
                  <li className="relative check custom-list my-2">
                    Sala com TV
                  </li>
                  <li className="relative check custom-list my-2">
                    3x Quartos com ventilador
                  </li>
                  <li className="relative check custom-list my-2">
                    Cozinha equipada
                  </li>
                  <li className="relative check custom-list my-2">
                    Banheiro exclusivo
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    $350 <span className="text-black-500">/ dia</span>
                  </p>
                  <a
                    href="https://w.app/apto8pessoas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonOutline>Whatsapp</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-6 xl:px-8"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <Link href="/aptos/10p/galeria">
                  <div className="w-265 h-265 p-0 mt-6 lg:mt-16 pulse-wrapper cursor-pointer">
                    <Image
                      src="/assets/10p/p1.JPG"
                      width={265}
                      height={265}
                      alt="Apartamento 10 pessoas"
                      className="rounded-md"
                    />
                  </div>
                </Link>


                <p className="text-lg text-black-600 font-medium capitalize my-5 sm:my-7">
                  10 Pessoas
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Primeiro andar
                  </li>
                  <li className="relative check custom-list my-2">
                    Sala com TV
                  </li>
                  <li className="relative check custom-list my-2">
                    1x Suite
                  </li>
                  <li className="relative check custom-list my-2">
                    3x Quartos com ventilador
                  </li>
                  <li className="relative check custom-list my-2">
                    Cozinha equipada
                  </li>
                  <li className="relative check custom-list my-2">
                    Sacada para rua
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    $400 <span className="text-black-500">/ dia</span>
                  </p>
                  <a
                    href="https://w.app/apto10pessoas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonOutline>Whatsapp</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Conheça nossa localização
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              Confira nossa vizinhança e descubra tudo o que está por perto antes de nos visitar, diretamente pelo Google Maps.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full px-7 py-8 mt-16" variants={scrollAnimation}>
              {/* <Maps className="w-full h-auto" /> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.935612792689!2d-45.234527288670755!3d-22.841871535468808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc39da5d15f97%3A0x4e838296e659ca59!2sR.%20Benedito%20Macedo%2C%20680%2C%20Aparecida%20-%20SP%2C%2012570-000!5e0!3m2!1spt-BR!2sbr!4v1763423868428!5m2!1spt-BR!2sbr" loading="lazy" className="w-full h-96 border border-gray-400"></iframe>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Conheça os anfitriões
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Nosso espaço é reconhecido pela qualidade no atendimento. Léo e Valéria estarão sempre à disposição para receber você e oferecer todo o suporte necessário.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Siga nossa página no facebook!
                  </h5>
                  <p>Fique por dentro de tudo que acontece em Aparecida-SP.</p>
                </div>
                <ButtonPrimary href="https://www.facebook.com/profile.php?id=100091876025553">Conhecer</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Listings;
