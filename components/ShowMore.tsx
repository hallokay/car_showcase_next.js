'use client'
import { useRouter } from "next/navigation"
import { showMoreProps } from '@/types/index'
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/util";

export default function ShowMore({ pageNumber, isNext }: showMoreProps) {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams('limit', `${newLimit}`)

        return router.push(newPathName)
    };

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="더보기"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}
