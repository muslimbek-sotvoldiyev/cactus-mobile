"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        className="text-blue-500 hover:text-blue-600 hover:bg-blue-50"
        onClick={() => window.open("https://t.me/cactusmobile", "_blank")}
        title="Telegram"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-pink-500 hover:text-pink-600 hover:bg-pink-50"
        onClick={() => window.open("https://instagram.com/cactusmobile", "_blank")}
        title="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </Button>
    </div>
  )
}
