import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import type { Produc } from "../types/product";
import { BASE_URL } from "../constant/base_url";

export default function HomePage() {
  const [product , setProduct] = useState<Produc[]>([]);
  const [error ,setError] = useState('')
  const [isPeneding , setIsPeneding]= useState(true)
  useEffect(()=>{
   const fetchData = async () => {
     try{
      const res = await fetch(`${BASE_URL}/product`);
     if (!res.ok) {
        throw 'Something is fialed'
     }
     const data = await res.json();
     setProduct(data);
     setIsPeneding(false)
     }
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     catch(err:any){
        setError(err)
        setIsPeneding(false);
     }
   };
   setTimeout(()=>{
    fetchData();
   },1000)
   
  },[]);
  
  return (
    <Container sx={{ mt: 2 }}>
      {isPeneding&& <div>Loading ......</div>}
      {error && <div className="text-red-600">{error}</div>}
      {<Grid container spacing={2}>
        {product.map((p)=>{
          return(
            <Grid key={p._id} size={4}>
              <ProductCard {...p} />
            </Grid>
          )
        })}
      </Grid>}
    </Container>
  );
}
