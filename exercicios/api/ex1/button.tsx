'use client'

import { useState } from "react";


export default function Button() {
    const [count, setCount] = useState(0);
    return (
        <button className="bg-blue-500 text-white p-4 rounded-lg" onClick={() => setCount(count + 1)}>
            Clique Aqui {count}
        </button>
    );
}