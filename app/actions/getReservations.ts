import prisma from '@/app/libs/prismadb'

interface IParams {
    listingId?: string
    userId?: string
    authorId?: string
}

export default async function getReservations(
    params: IParams
) {
    try {
        const { listingId, userId, authorId } = params

        const query: any = {}
        // QUERYING USING 'listingId' WILL FETCH ALL RESERVATIONS FOR A PARTICULAR LISTING
        if (listingId) {
            query.listingId = listingId
        }
        // QUERYING USING 'userId' WILL FETCH ALL THE TRIPS THAT A USER HAS
        if (userId) {
            query.userId = userId
        }
        // QUERYING USING 'authorId' WILL FETCH ALL RESERVATIONS MADE BY OTHER USERS FOR THE CURRENT USER'S LISTINGS
        if (authorId) {
            query.listing = { userId: authorId }
        }

        const reservations = await prisma.reservation.findMany({
            where: query,
            include: {
                listing: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        const safeReservations = reservations.map((reservation) => ({
            ...reservation,
            createdAt: reservation.createdAt.toISOString(),
            startDate: reservation.startDate.toISOString(),
            endDate: reservation.endDate.toISOString(),
            listing: {
                ...reservation.listing,
                createdAt: reservation.listing.createdAt.toISOString()
            }
        }))

        return safeReservations
    }
    catch(error: any){
        throw new Error(error)
    }

}