import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // replace BACKEND_URL with actual backend public DNS or ALB URL
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
    axios.get(`${backendUrl}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>
      <ul>
        {products.map(p => <li key={p.id}>{p.name} — ₹{p.price}</li>)}
      </ul>
    </div>
  );
}

export default App;
