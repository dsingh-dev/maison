import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, CreditCard, Wallet, Building, ChevronLeft, Lock, Shield } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { toast } from "@/hooks/use-toast";

// Mock cart data
const initialCartItems = [
  { product: products[0], quantity: 1 },
  { product: products[1], quantity: 2 },
  { product: products[3], quantity: 1 },
];

const paymentMethods = [
  { id: "card", name: "Credit Card", icon: CreditCard, description: "Visa, Mastercard, Amex" },
  { id: "paypal", name: "PayPal", icon: Wallet, description: "Pay with your PayPal account" },
  { id: "bank", name: "Bank Transfer", icon: Building, description: "Direct bank transfer" },
];

export default function Checkout() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [step, setStep] = useState(1);

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (productId: string) => {
    setCartItems((items) => items.filter((item) => item.product.id !== productId));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
    });
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 border-b border-border">
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Continue Shopping
        </Link>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-8">Checkout</h1>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg mb-4">Your cart is empty</p>
              <Link to="/products">
                <Button variant="hero" size="lg">
                  Start Shopping
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items & Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Step Indicator */}
                <div className="flex items-center gap-4 mb-8">
                  <button
                    onClick={() => setStep(1)}
                    className={`flex items-center gap-2 ${step >= 1 ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? "bg-accent text-accent-foreground" : "bg-secondary"}`}>
                      1
                    </span>
                    <span className="hidden sm:inline">Cart</span>
                  </button>
                  <div className="flex-1 h-px bg-border" />
                  <button
                    onClick={() => cartItems.length > 0 && setStep(2)}
                    className={`flex items-center gap-2 ${step >= 2 ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? "bg-accent text-accent-foreground" : "bg-secondary"}`}>
                      2
                    </span>
                    <span className="hidden sm:inline">Shipping</span>
                  </button>
                  <div className="flex-1 h-px bg-border" />
                  <button
                    onClick={() => step >= 2 && setStep(3)}
                    className={`flex items-center gap-2 ${step >= 3 ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 3 ? "bg-accent text-accent-foreground" : "bg-secondary"}`}>
                      3
                    </span>
                    <span className="hidden sm:inline">Payment</span>
                  </button>
                </div>

                {/* Step 1: Cart */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-xl font-heading font-medium mb-6">Your Cart</h2>
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex gap-4 p-4 bg-card rounded-lg"
                        >
                          <div className="w-24 h-24 bg-secondary rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <Link
                              to={`/product/${item.product.id}`}
                              className="font-medium hover:text-accent transition-colors"
                            >
                              {item.product.name}
                            </Link>
                            <p className="text-sm text-muted-foreground">{item.product.category}</p>
                            <p className="font-medium mt-1">${item.product.price}</p>
                          </div>
                          <div className="flex flex-col items-end justify-between">
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                            <div className="flex items-center border border-border rounded-md">
                              <button
                                onClick={() => updateQuantity(item.product.id, -1)}
                                className="p-2 hover:bg-secondary transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-3 text-sm">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, 1)}
                                className="p-2 hover:bg-secondary transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full mt-6"
                      onClick={() => setStep(2)}
                    >
                      Continue to Shipping
                    </Button>
                  </motion.div>
                )}

                {/* Step 2: Shipping */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-xl font-heading font-medium mb-6">Shipping Information</h2>
                    <form className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Address</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">City</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="New York"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">State</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="NY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">ZIP Code</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="10001"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="flex gap-4 mt-6">
                      <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                        Back
                      </Button>
                      <Button
                        variant="hero"
                        size="lg"
                        className="flex-1"
                        onClick={() => setStep(3)}
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-xl font-heading font-medium mb-6">Payment Method</h2>
                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setSelectedPayment(method.id)}
                          className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-colors ${
                            selectedPayment === method.id
                              ? "border-accent bg-accent/5"
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          <div className="p-3 rounded-full bg-secondary">
                            <method.icon className="h-5 w-5" />
                          </div>
                          <div className="text-left">
                            <p className="font-medium">{method.name}</p>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>

                    {selectedPayment === "card" && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Card Number</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Expiry Date</label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">CVC</label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4 mt-6">
                      <Button variant="outline" size="lg" onClick={() => setStep(2)}>
                        Back
                      </Button>
                      <Button
                        variant="hero"
                        size="lg"
                        className="flex-1"
                        onClick={handlePlaceOrder}
                      >
                        <Lock className="h-4 w-4 mr-2" />
                        Place Order
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Order Summary */}
              <div>
                <div className="sticky top-28 bg-card rounded-lg p-6">
                  <h2 className="text-xl font-heading font-medium mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="flex justify-between text-sm">
                        <span>
                          {item.product.name} × {item.quantity}
                        </span>
                        <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between font-heading text-lg font-semibold pt-3 border-t border-border">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Secure checkout powered by SSL encryption</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
