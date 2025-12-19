import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export type TestimonialAuthor = {
  name: string;
  title?: string;
  avatarUrl?: string;
};

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const content = (
    <Card className={cn("p-6 md:p-8 bg-card/50 backdrop-blur border-border/50 rounded-xl w-[280px] md:w-[360px]", className)}>
      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">“{text}”</p>
      <div className="mt-6 flex items-center gap-3">
        <Avatar className="h-9 w-9">
          {author.avatarUrl ? (
            <AvatarImage src={author.avatarUrl} alt={author.name} />
          ) : (
            <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col text-sm">
          <span className="font-semibold text-foreground">{author.name}</span>
          {author.title && <span className="text-muted-foreground">{author.title}</span>}
        </div>
      </div>
    </Card>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover-lift">
        {content}
      </a>
    );
  }

  return content;
}

