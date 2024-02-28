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
  const [mersennePrimes, setMersennePrimes] = useState([]);

  const findAllMersennePrimes = () => {
    const limit = parseInt(inputValue, 10);
    if (isNaN(limit)) {
      alert("Please enter a valid number");
      return;
    }
    const primes = [];
    for (let p = 2; p <= limit; p++) {
      if (isMersennePrime(p)) {
        primes.push(Math.pow(2, p) - 1);
      }
    }
    setMersennePrimes(primes);
  };

  return (
    <VStack spacing={4}>
      <Input placeholder="Enter a prime number p to check if 2^p - 1 is a Mersenne prime" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Button onClick={findAllMersennePrimes}>Find Mersenne Primes</Button>
      {mersennePrimes.length > 0 && (
        <VStack>
          {mersennePrimes.map((prime, index) => (
            <Text key={index}>
              2^{Math.log2(prime + 1)} - 1 = {prime} is a Mersenne prime.
            </Text>
          ))}
        </VStack>
      )}
    </VStack>
  );
};

export default Index;
