'use client'

import { Range } from 'react-date-range'
import Calender from '../inputs/Calender'
import Button from '../Button'
import FormattedPrice from '../FormattedPrice'

interface ListingResevationProps {
    price: number
    totalPrice: number
    dateRange: Range
    onChangeDate: (value: Range) => void
    onSubmit: () => void
    disabled?: boolean
    disabledDates?: Date[]
}

const ListingReservation: React.FC<ListingResevationProps> = ({
    price,
    totalPrice,
    dateRange,
    onChangeDate,
    onSubmit,
    disabled,
    disabledDates
}) => {

    let days=totalPrice/price

    return (
        <div
            className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden drop-shadow-xl '
        >
            <div
                className='flex flex-row items-center gap-1 p-4 '
            >
                <div
                    className='text-2xl font-semibold '
                >
                    ₹ <FormattedPrice value={price} />
                </div>
                <div
                    className='font-light text-neutral-600 '
                >
                    night
                </div>
            </div>

            <hr/>

            <Calender
                value={dateRange}
                disabledDates={disabledDates}
                onChange={(value) => onChangeDate(value.selection)}
            />

            <hr />

            <div
                className='p-4 flex flex-col gap-3'
            >
                <Button
                    disabled={disabled}
                    label='Reserve'
                    onClick={onSubmit}
                />
                <div className='text-center font-light' >You won&apos;t be charged yet</div>
            </div>

            <div
                className='p-4 flex flex-row items-center justify-between font-normal text-md '
            >
                <div 
                    className='underline underline-offset-[1.5px] decoration-[1px] '
                >
                    ₹ <FormattedPrice value={price} /> x {days} {days>1? 'nights' : 'night'}
                </div>
                <div>₹ <FormattedPrice value={totalPrice} /> </div>
            </div>

            <hr />

            <div
                className='p-4 flex flex-row items-center justify-between font-semibold text-lg '
            >
                <div>Total</div>
                <div>₹ <FormattedPrice value={totalPrice} /> </div>
            </div>

        </div>
    )
}

export default ListingReservation