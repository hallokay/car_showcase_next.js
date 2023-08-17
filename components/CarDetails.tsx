'use client'
import { Fragment } from 'react';
import Image from 'next/image';

import { Dialog, Transition } from '@headlessui/react';
import { CarProps } from '@/types';
import { generateCarImgUrl } from '@/util/index'


interface CarDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}


export default function CarDetails({ isOpen, closeModel, car }: CarDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={"relative z-10"} onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          {/* //팝업의 배경 overlay */}

          {/* 팝업창 */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full justify-center items-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* 실질적 팝업 화면창 */}
                <Dialog.Panel
                  className={
                    "relative w-full max-w-lg max-h-[90] p-6 overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transiton-all flex flex-col gap-5"
                  }
                >
                  <button
                    type="button"
                    onClick={closeModel}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src={"/close.svg"}
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  {/* //닫기 버튼 */}
                  {/* contents-img-box */}
                  <div className="flex-1 flex flex-col gap-3">
                    {/* 상단 이미지 박스 */}
                    <div className="relative w-full h-40 bg-pattern bg-center rounded-lg">
                      <Image
                        src={generateCarImgUrl(car, 'angle')}
                        className="object-contain"
                        alt="car model"
                        fill
                        priority
                      />
                    </div>
                    {/* 하단 이미지 디테일 */}
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImgUrl(car, '29')}
                          className="object-contain"
                          alt="car model"
                          fill
                          priority
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImgUrl(car, '33')}
                          className="object-contain"
                          alt="car model"
                          fill
                          priority
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImgUrl(car, '13')}
                          className="object-contain"
                          alt="car model"
                          fill
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  {/*// contents-img-box */}

                  {/* info-box */}
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className='font-semobold text-xl capitalize'>{car.make}{car.model}</h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {/* key-value값을 그대로 가져오기 */}
                      {Object.entries(car).map(([key, val]) => (
                        <div className='flex justify-between gap-5 w-full text-right' key={key}>
                          <h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
                          <p className='text-black-100 font-semibold'>{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
