'use client'

import { SafeListing, SafeUser } from "../types"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useCallback, useState } from "react"
import { toast } from "react-hot-toast"

import Container from "../components/Container"
import Heading from "../components/Heading"
import ListingCard from "../components/listings/ListingCard"

interface FavoritesClientProps {
    favorites: SafeListing[]
    currentUser?: SafeUser | null
}


const FavoritesClient:React.FC<FavoritesClientProps> = ({
    favorites,
    currentUser
}) => {

    return (
        <Container>
            <Heading
                title="My Favorites"
                subtitle="List of properties that I like!"
            />
            <div
                className="mt-10 
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
                "
            >
                {favorites.map((favorite) => (
                    <ListingCard
                        currentUser={currentUser}
                        key={favorite.id}
                        data={favorite}
                    />
                ))}
            </div>
        </Container>
    )
}

export default FavoritesClient