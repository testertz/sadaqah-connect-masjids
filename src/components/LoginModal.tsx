
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string, email: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const { toast } = useToast();

  const handleLogin = () => {
    if (!loginEmail || !loginPassword) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Welcome back! 🌙",
      description: "You have successfully logged in.",
    });

    onLogin("User", loginEmail);
    setLoginEmail('');
    setLoginPassword('');
    onClose();
  };

  const handleSignup = () => {
    if (!signupName || !signupEmail || !signupPassword) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Account Created! 🎉",
      description: "Welcome to the Sadaka community.",
    });

    onLogin(signupName, signupEmail);
    setSignupName('');
    setSignupEmail('');
    setSignupPassword('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-emerald-800">Join Sadaka Community</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div>
              <Label htmlFor="login-email" className="flex items-center gap-2 text-gray-700">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="login-email"
                type="email"
                placeholder="your@email.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="mt-2 border-emerald-200 focus:border-emerald-500"
              />
            </div>
            <div>
              <Label htmlFor="login-password" className="flex items-center gap-2 text-gray-700">
                <Lock className="h-4 w-4" />
                Password
              </Label>
              <Input
                id="login-password"
                type="password"
                placeholder="••••••••"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="mt-2 border-emerald-200 focus:border-emerald-500"
              />
            </div>
            <Button 
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600"
            >
              Sign In
            </Button>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <div>
              <Label htmlFor="signup-name" className="flex items-center gap-2 text-gray-700">
                <User className="h-4 w-4" />
                Full Name
              </Label>
              <Input
                id="signup-name"
                placeholder="Your full name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                className="mt-2 border-emerald-200 focus:border-emerald-500"
              />
            </div>
            <div>
              <Label htmlFor="signup-email" className="flex items-center gap-2 text-gray-700">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="your@email.com"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="mt-2 border-emerald-200 focus:border-emerald-500"
              />
            </div>
            <div>
              <Label htmlFor="signup-password" className="flex items-center gap-2 text-gray-700">
                <Lock className="h-4 w-4" />
                Password
              </Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="mt-2 border-emerald-200 focus:border-emerald-500"
              />
            </div>
            <Button 
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600"
            >
              Create Account
            </Button>
          </TabsContent>
        </Tabs>

        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
