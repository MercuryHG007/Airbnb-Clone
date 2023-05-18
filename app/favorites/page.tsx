import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import FavoritesClient from "./FavoritesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";

const FavoritesPage = async () => {

    const currentUser = await getCurrentUser()
    if(!currentUser){
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorized Access"
                    subtitle="Please Login!"
                />
            </ClientOnly>
        )
    }

    const favorites = await getFavoriteListings()
    if(favorites.length === 0){
        return (
            <ClientOnly>
                <EmptyState
                    title="No Favorites Found!"
                    subtitle="Looks like you have no favorite property"
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <FavoritesClient 
                favorites={favorites}
                currentUser={currentUser}
            />
        </ClientOnly>
    )

}

export default FavoritesPage