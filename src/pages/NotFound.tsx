import {
  Terminal,
  AnimatedSpan,
  TypingAnimation,
} from "@/components/ui/terminal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>
        <p className="text-muted-foreground">Page not found</p>
      </div>

      <Terminal className="bg-zinc-950 text-zinc-100 border-zinc-800 h-80">
        <TypingAnimation delay={0} className="text-zinc-400 ">
          lucabecker@localhost ~ %
        </TypingAnimation>

        <TypingAnimation delay={1600} className="text-red-500">
          Error: Route not found
        </TypingAnimation>
      </Terminal>

      <Button
        variant="outline"
        className="flex items-center gap-2 bg-white border-zinc-300 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-950 mt-16"
        asChild
      >
        <a href="/">
          <Home className="w-4 h-4" />
          Go home
        </a>
      </Button>
    </div>
  );
}
