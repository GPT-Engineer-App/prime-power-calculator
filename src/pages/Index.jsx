import React, { useState } from "react";
import { Button, Input, VStack, Text } from "@chakra-ui/react";

const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const isMersennePrime = (p) => {
  if (!isPrime(p)) return false;
  const number = Math.pow(2, p) - 1;
  return isPrime(number);
};

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [isMersenne, setIsMersenne] = useState(false);

  const checkMersennePrime = () => {
    const p = parseInt(inputValue, 10);
    if (isNaN(p)) {
      alert("Please enter a valid number");
      return;
    }
    setIsMersenne(isMersennePrime(p));
  };

  return (
    <VStack spacing={4}>
      <Input placeholder="Enter a prime number p to check if 2^p - 1 is a Mersenne prime" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Button onClick={checkMersennePrime}>Check Mersenne Prime</Button>
      {isMersenne !== false && <Text>{isMersenne ? "It is a Mersenne prime!" : "Not a Mersenne prime."}</Text>}
    </VStack>
  );
};

export default Index;
