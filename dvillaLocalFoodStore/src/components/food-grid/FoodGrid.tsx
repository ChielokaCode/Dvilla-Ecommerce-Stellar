import React, { useState } from 'react';
import { Row, Col, Card, Button, Stack } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import foodItems from './foodItems';
import toast from 'react-hot-toast';

// Define types for the food item and cart item
interface FoodItem {
  id: number;
  name: string;
  image: {
    src: string;
  };
  description: string;
  price: string;
  quantity: number;
}


const FoodGrid: React.FC = () => {
  // Define the cart item type
  interface CartItem extends FoodItem {
    quantity: number;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const saveCartToLocalStorage = (items: CartItem[]) => {
    console.log(JSON.stringify(items));
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const addToCart = (item: FoodItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      let updatedItems: CartItem[];
      if (existingItem) {
        updatedItems = prevItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        updatedItems = [...prevItems, { ...item, quantity: 1 }];
      }
      item.quantity -= 1;
      saveCartToLocalStorage(updatedItems);
      toast.success("Added to Cart");
      return updatedItems;
    });
  };

  return (
    <div>
      <div className="p-4">
        <Row md={2} xs={1} sm={1} lg={4} className="g-4">
          {foodItems.map((item) => (
            <Col key={item.id}>
              <Card>
                <Image
                  src={item.image.src}
                  alt={item.name}
                  width={300}
                  height={200}
                  layout="responsive"
                />
                <Card.Body>
                  <Stack direction="vertical" gap={3}>
                    <Stack direction="horizontal">
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text className="font-bold p-2 ms-auto">
                        Qty: {item.quantity}
                      </Card.Text>
                    </Stack>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text className="text-muted"><b>DVLA</b> {item.price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => addToCart(item)}
                      disabled={item.quantity <= 0}
                    >
                      Add to Cart
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="mt-4 text-center">
          <Link href="/cart" passHref>
            <Button variant="success">Go to Cart</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodGrid;
