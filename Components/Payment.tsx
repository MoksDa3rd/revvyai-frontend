"use client";

import { useState } from "react";
import { ArrowLeft, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"; // Ensure correct import

export default function PaymentMethodPage() {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [discountCode, setDiscountCode] = useState<string>("");

  const paymentOptions = [
    {
      id: "paystack",
      name: "Paystack",
      logo: "/placeholder.svg?height=30&width=120",
    },
    {
      id: "flutterwave",
      name: "Flutterwave",
      logo: "/placeholder.svg?height=30&width=120",
    },
    {
      id: "payaza",
      name: "Payaza",
      logo: "/placeholder.svg?height=30&width=120",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 flex flex-col justify-center items-center">
      <Button variant="ghost" className="text-white mb-8" asChild>
        <a href="/Dashboard" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Go back
        </a>
      </Button>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Choose payment method
      </h1>
      <p className="text-gray-400 mb-8 text-center">
        (All fields are required)
      </p>

      <form className="space-y-6 w-full max-w-xl">
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="space-y-4">
            {paymentOptions.map((option) => (
              <Card
                key={option.id}
                className="border border-gray-800 bg-gray-900/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} />
                    <Label
                      htmlFor={option.id} // Ensure correct use of 'id' in Label
                      className="flex items-center gap-2"
                    >
                      <span className="text-lg">{option.name}</span>
                      <img
                        src={option.logo}
                        alt={`${option.name} logo`}
                        className="h-8"
                      />
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </RadioGroup>

        <div className="pt-4">
          <Button
            variant="outline"
            className="w-full border-white text-white hover:bg-white hover:text-black"
            onClick={(e) => {
              e.preventDefault();
              // Handle discount code reveal
            }}
          >
            <Tag className="mr-2 h-4 w-4" />
            DISCOUNT CODE
          </Button>

          {discountCode !== "" && (
            <div className="mt-4">
              <Input
                type="text"
                placeholder="Enter discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="bg-transparent border-white text-white"
              />
            </div>
          )}
        </div>

        <Button
          className="w-full bg-white text-black hover:bg-gray-100"
          disabled={!paymentMethod}
        >
          Continue to payment
        </Button>
      </form>
    </div>
  );
}
