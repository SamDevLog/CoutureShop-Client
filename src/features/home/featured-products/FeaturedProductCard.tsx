import { LoadingButton } from "@mui/lab";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { currencyFormat } from "../../../app/util/util";
import { addBasketItemAsync } from "../../basket/basketSlice";
import { Product } from "../../../app/models/product";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../app/store/configureStore";
import { Link } from "react-router-dom";

export interface Props {
  product: Product;
}

const FeaturedProductCard = ({ product }: Props) => {
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ maxWidth: 270, margin: '0 0.4rem' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          sx={{ objectFit: "contain", bgcolor: "primary.light" }}
          image={product.pictureUrl}
          alt={product.name}
          title={product.name}
        />
        <CardContent sx={{ p: 2 }}>
          <Typography color="secondary" variant="h6">
            {currencyFormat(product.price)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 1 }}>
          <LoadingButton
            loading={status.includes("pendingAddItem" + product.id)}
            onClick={() =>
              dispatch(addBasketItemAsync({ productId: product.id }))
            }
            size="small"
          >
            Add to cart
          </LoadingButton>
          <Button component={Link} to={`/catalog/${product.id}`} size="small">
            View
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default FeaturedProductCard;
