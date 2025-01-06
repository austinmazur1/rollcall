"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the form data
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-1/2 max-w-sm mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">
            {isLogin ? "Login" : "Sign Up"}
          </CardTitle>
          <CardDescription className="text-center w-[300px]">
            {isLogin
              ? "Enter your credentials to access your account"
              : "Create a new account to get started"}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <Tabs
            defaultValue="login"
            onValueChange={(value) => setIsLogin(value === "login")}
            className="w-full"
          >
            <TabsList className="flex justify-between mb-4 space-x-2">
              <TabsTrigger
                value="login"
                className="w-full text-center"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="w-full text-center"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full mt-2">
                    Login
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full mt-2">
                    Sign Up
                  </Button>
                </div>
              </form>
            </TabsContent>

          </Tabs>
        </CardContent>

        <CardFooter className="flex justify-center px-4 py-4">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button
              variant="link"
              className="p-0"
              // onClick={() => setIsLogin(!isLogin)} //TODO trigger change the tabs when we click
            >
              {isLogin ? "Sign Up" : "Login"}
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
