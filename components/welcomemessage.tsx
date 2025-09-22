import React from "react";

// Définition du type des props
type WelcomeMessageProps = {
  name: string;
};

// Composant fonctionnel
export default function WelcomeMessage({ name }: WelcomeMessageProps) {
  return <h1>Hello, {name}!</h1>;
}
