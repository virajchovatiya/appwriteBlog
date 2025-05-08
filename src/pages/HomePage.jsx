import React, { useEffect, useState } from 'react'
import service from '../appwrite/dbconfig.js'
import { Container, PostCard } from '../components/index.js'

function HomePage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-2'>
                            <h1 className='text-center text-2xl'>No posts available</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div>
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='w-1/4 p-2'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default HomePage