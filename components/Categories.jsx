import React, { useState, useState } from "react";
import { getCategories } from "../services";

function Categories() {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setcategories(newCategories));
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Categories;