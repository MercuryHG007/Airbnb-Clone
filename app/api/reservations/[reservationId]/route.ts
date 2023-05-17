import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
    reservationId?: string
}

export async function DELETE(
    request: Request,
    { params }: { params: IParams }
) {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
        return NextResponse.error()
    }

    const { reservationId } = params

    if(!reservationId || typeof reservationId !== 'string'){
        throw new Error("Invalid ID!")
    }

    const reservation = await prisma.reservation.deleteMany({
        where:{
            id: reservationId,
            OR: [
                { userId: currentUser.id }, //ENABLING THE USER RESERVING THE LISTING TO CANCEL RESERVATION
                { listing: { userId: currentUser.id } } //ENABLING THE OWNER OF THE LISTING TO CANCEL THE RESERVATION MADE BY OTHER USER FOR HIS PROPERTY
            ]
        }
    })

    return NextResponse.json(reservation)

}