'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { IconType } from "react-icons"
import qs from 'query-string'

interface CategoryBoxProps {
    label: string
    icon: IconType
    selected?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    label,
    icon : Icon,
    selected
}) => {

    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if(params){
            // Convert the params to object from string
            currentQuery = qs.parse(params.toString());
        }

        // Add new category to the params
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        // remove the category from params if clicked twice by mistake
        if(params?.get('category') === label){
            delete updatedQuery.category
        }

        // create url with base + including updated query
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true })

        // push URL through router
        router.push(url)

    },[label, params, router])

    return (
        <div
            onClick={handleClick}
            className={`
                flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
                ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                ${selected ? 'text-neutral-800' : 'text-neutral-500'}
                `}
        >
            <Icon
                size={26}
            />
            <div
                className="font-medium text-sm "
            >
                {label}
            </div>
        </div>
    )
}

export default CategoryBox