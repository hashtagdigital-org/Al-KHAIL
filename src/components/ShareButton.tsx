import { useState } from "react";
import { Share2, Facebook, Twitter, Linkedin, Mail, Link2, Check, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface ShareButtonProps {
  title: string;
  url: string;
  description?: string;
}

const ShareButton = ({ title, url, description }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareDescription = encodeURIComponent(description || "");

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        });
        toast({
          title: "Shared successfully!",
          description: "Thank you for sharing this event.",
        });
      } catch (err) {
        // User cancelled or error occurred
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Event link has been copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${shareTitle}%20${shareUrl}`,
    telegram: `https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    email: `mailto:?subject=${shareTitle}&body=${shareDescription}%0A%0A${shareUrl}`,
  };

  // Use native share on mobile if available
  if (isMobile && navigator.share) {
    return (
      <Button
        variant="outline"
        size={isMobile ? "default" : "lg"}
        onClick={handleNativeShare}
        className="gap-2 border-accent/30 hover:bg-accent/10 hover:border-accent w-full sm:w-auto"
      >
        <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="text-sm sm:text-base">Share Event</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={isMobile ? "default" : "lg"}
          className="gap-2 border-accent/30 hover:bg-accent/10 hover:border-accent w-full sm:w-auto"
        >
          <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Share Event</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 sm:w-64 z-50 bg-popover">
        <DropdownMenuItem asChild>
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-3 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span>Share on WhatsApp</span>
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={shareLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-3 cursor-pointer"
          >
            <Send className="w-4 h-4 text-blue-500" />
            <span>Share on Telegram</span>
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleCopyLink} className="gap-3 cursor-pointer">
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Link2 className="w-4 h-4" />
          )}
          <span>{copied ? "Link Copied!" : "Copy Link"}</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-3 cursor-pointer"
          >
            <Facebook className="w-4 h-4" />
            <span>Share on Facebook</span>
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-3 cursor-pointer"
          >
            <Twitter className="w-4 h-4" />
            <span>Share on Twitter</span>
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-3 cursor-pointer"
          >
            <Linkedin className="w-4 h-4" />
            <span>Share on LinkedIn</span>
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={shareLinks.email}
            className="gap-3 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Share via Email</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;
