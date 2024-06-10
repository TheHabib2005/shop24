"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import React, { useEffect, useState } from 'react'

const ShowUsers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState<any[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const path = usePathname();

    const fetchUsers = async () => {
        try {

            setIsLoading(true);
            let response = await fetch(
                `https://jsonplaceholder.typicode.com/users?q=${params.get("q") || ""}`
            );
            let result = await response.json();
            setUsers(result);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers()
    }, [params.toString()])
    return (
        <div className='text-white font-semibold'>
            {isLoading ? <div>Loading...</div> :

                users.length > 0 && users.map((user) => {
                    return <div key={user.id}>
                        {user.username}
                    </div>
                })
            }

        </div>
    )
}

export default ShowUsers