import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";

import { getRecentPosts, getSimilarPosts } from "../services";

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result));
    }
  }, [slug])

  return (
    <div>PostWidget</div>
  )
}

export default PostWidget;