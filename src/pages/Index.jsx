import React from "react";
import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10.00",
    image: "https://images.unsplash.com/photo-1705096953495-8ea06879b986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTgxNjc1OTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20.00",
    image: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTgxNjc2MDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30.00",
    image: "https://images.unsplash.com/photo-1700853010051-dce31802dafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTgxNjc2MDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Header />
      <ProductList products={products} />
      <Footer />
    </Container>
  );
};

const Header = () => {
  return (
    <HStack justifyContent="space-between" p={4} borderBottom="1px solid #e2e8f0">
      <Heading as="h1" size="lg">
        Online Shop
      </Heading>
      <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
    </HStack>
  );
};

const ProductList = ({ products }) => {
  return (
    <VStack spacing={8} mt={8}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </VStack>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%" maxW="sm">
      <Image src={product.image} alt={product.name} />
      <VStack align="start" mt={4}>
        <Text fontSize="xl" fontWeight="bold">
          {product.name}
        </Text>
        <Text>{product.price}</Text>
        <Button colorScheme="teal">Add to Cart</Button>
      </VStack>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box as="footer" p={4} mt={8} borderTop="1px solid #e2e8f0" textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Online Shop. All rights reserved.</Text>
    </Box>
  );
};

export default Index;
