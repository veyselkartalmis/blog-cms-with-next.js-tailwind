import React from 'react';
import moment from 'moment/moment';
import Image from 'next/image';
import Link from 'next/link';

function FeaturedPostCard({ post }) {
    return (
        <div className="relative h-72">
            <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }}></div>
            <div className="absolute rounded-lg bg-center bg-gradient"></div>
        </div>
    )
}

export default FeaturedPostCard