import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export type TestimonialAuthor = {
  name: string;
  title?: string;
  handle?: string;
  avatarUrl?: string;
};

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
  rating?: number;
}

export function TestimonialCard({ author, text, href, className, rating = 5 }: TestimonialCardProps) {
  const content = (
    <Card className={cn("p-6 md:p-8 bg-card/80 border border-border/50 rounded-2xl w-[300px] md:w-[360px] shadow-sm text-left", className)}>
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-9 w-9">
          {author.avatarUrl ? (
            <AvatarImage src={author.avatarUrl} alt={author.name} />
          ) : (
            <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">{author.name}</span>
          <span className="text-xs text-muted-foreground">{author.title}</span>
        </div>
      </div>
      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">“{text}”</p>
      <div className="mt-4 flex items-center gap-1" aria-label={`${rating} de 5 estrelas`}>
        {[...Array(5)].map((_, i) => (
          i < rating ? (
            <AiFillStar key={i} className="text-accent w-4 h-4" aria-hidden="true" />
          ) : (
            <AiOutlineStar key={i} className="text-muted-foreground w-4 h-4" aria-hidden="true" />
          )
        ))}
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
