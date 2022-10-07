import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import Link from 'next/link';

function Header() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategory) => setCategories(newCategory));
    }, [])

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">
                            BlogCMS
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;