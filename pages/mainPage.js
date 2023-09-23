import React from 'react'
import NftContainer from '@/components/NftContainer';

export default function
    () {
    return (
        <div>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>

                <div className="relative flex flex-col justify-between place-items-center mt-10">
                    <NftContainer />
                </div>

            </main>
        </div>
    )
}
