import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { Produc } from "../types/product";

export default function ProductCard({ title , image , price}:Produc) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price} EGT
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Add to Card</Button>
      </CardActions>
    </Card>
  );
}
