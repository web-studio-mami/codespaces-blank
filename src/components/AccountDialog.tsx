import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "./ui/responsive-dialog.js";
import { Button } from "./ui/button.js";
import { Input } from "./ui/input.js";
import { Label } from "./ui/label.js";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs.js";
import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";

interface AccountDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export function AccountDialog({
  open,
  onOpenChange,
  onOpenPrivacy,
  onOpenTerms,
}: AccountDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log("Login:", { email, password });
    alert(
      "Функция входа в разработке. В реальном приложении здесь будет авторизация.",
    );
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика регистрации
    console.log("Register:", { name, email, password });
    alert(
      "Функция регистрации в разработке. В реальном приложении здесь будет создание аккаунта.",
    );
  };

  const handleGoogleLogin = () => {
    alert(
      "Вход через Google будет доступен после интеграции с Google OAuth. В реальном приложении здесь будет перенаправление на страницу авторизации Google.",
    );
  };

  const handleVKLogin = () => {
    alert(
      "Вход через ВКонтакте будет доступен после интеграции с VK API. В реальном приложении здесь будет перенаправление на страницу авторизации VK.",
    );
  };

  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-md">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Личный кабинет
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            Войдите в аккаунт или зарегистрируйтесь
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">
              Регистрация
            </TabsTrigger>
          </TabsList>

          {/* Вкладка входа */}
          <TabsContent value="login">
            <form
              onSubmit={handleLogin}
              className="space-y-4 pt-4"
            >
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password">Пароль</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-11 justify-center"
              >
                Войти
              </Button>

              <div className="text-center">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Забыли пароль?
                </a>
              </div>
            </form>
          </TabsContent>

          {/* Вкладка регистрации */}
          <TabsContent value="register">
            <form
              onSubmit={handleRegister}
              className="space-y-4 pt-4"
            >
              <div className="space-y-2">
                <Label htmlFor="register-name">Имя</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password">
                  Пароль
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="pl-10"
                    required
                    minLength={6}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Минимум 6 символов
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-11 justify-center"
              >
                Зарегистрироваться
              </Button>

              <p className="text-xs text-center text-gray-500">
                Регистрируясь, вы соглашаетесь с{" "}
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="underline hover:text-gray-900 cursor-pointer"
                >
                  условиями использования
                </button>{" "}
                и{" "}
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="underline hover:text-gray-900 cursor-pointer"
                >
                  политикой конфиденциальности
                </button>
              </p>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t">
          <p className="text-sm text-gray-600 mb-4">
            Или войдите через:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="justify-center"
              onClick={handleGoogleLogin}
            >
              Google
            </Button>
            <Button
              variant="outline"
              className="justify-center"
              onClick={handleVKLogin}
            >
              VK
            </Button>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}

function alert(_arg0: string) {
  throw new Error("Function not implemented.");
}
