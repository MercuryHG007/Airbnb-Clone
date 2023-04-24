'use client'

import { useCallback, useState } from 'react'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'

import {
    AiOutlineMenu
} from 'react-icons/ai'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRentModal from '@/app/hooks/useRentModal'

import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types'

interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const rentModal = useRentModal()

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    const onRent = useCallback(() => {
        // If no User, then open Login Modal
        if (!currentUser){
            return loginModal.onOpen()
        }

        // If User, then open Register Modal
        rentModal.onOpen()

    }, [currentUser, loginModal, rentModal])

    return (
        <div
            className="relative"
        >
            <div
                className="flex flex-row items-center gap-3"
            >
                <div
                    onClick={onRent}
                    className="lg:block hidden text-sm font-bold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer "
                >
                    Mercurybnb your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition "
                >
                    <AiOutlineMenu />
                    <div
                        className='hidden md:block'
                    >
                        <Avatar
                            avatarSrc = {currentUser?.image}
                        />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'
                >
                    <div
                        className='flex flex-col cursor-pointer '
                    >
                        {currentUser ? (
                            <>
                                <MenuItem
                                    onClick={() => {}}
                                    label={`Hi! ${currentUser.name}`}
                                    style='font-bold hover:bg-white cursor-default'
                                />
                                <hr />
                                <MenuItem
                                    onClick={() => {}}
                                    label="My Trips"
                                    style=''
                                />
                                <MenuItem
                                    onClick={() => {}}
                                    label="My Favorites"
                                    style=''
                                />
                                <MenuItem
                                    onClick={() => {}}
                                    label="My Reservations"
                                    style=''
                                />
                                <MenuItem
                                    onClick={() => {}}
                                    label="My Properties"
                                    style=''
                                />
                                <MenuItem
                                    onClick={rentModal.onOpen}
                                    label="Mercurybnb my Home"
                                    style=''
                                />
                                <hr />
                                <MenuItem
                                    onClick={() => signOut()}
                                    label="Log out"
                                    style='font-bold'
                                />
                                
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label="Sign Up"
                                    style='font-bold'
                                />
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label="Log in"
                                    style=''
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu