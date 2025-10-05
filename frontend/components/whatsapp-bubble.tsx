"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function WhatsAppBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const { t } = useLanguage()

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/21620123456?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
      setMessage("")
      setIsOpen(false)
    }
  }

  const predefinedMessages = [t("whatsapp.message1"), t("whatsapp.message2"), t("whatsapp.message3")]

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        )}

        {/* Chat Bubble */}
        {isOpen && (
          <Card className="w-80 h-96 bg-background border shadow-2xl rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Rise Services</h3>
                  <p className="text-xs opacity-90">{t("whatsapp.online")}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-600 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Content */}
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-sm text-gray-800">{t("whatsapp.welcome")}</p>
                  <span className="text-xs text-gray-500">Rise Services</span>
                </div>
              </div>

              {/* Quick Messages */}
              <div className="space-y-2">
                <p className="text-xs text-gray-600 mb-2">{t("whatsapp.quickMessages")}:</p>
                {predefinedMessages.map((msg, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start h-auto p-2 text-xs bg-transparent"
                    onClick={() => setMessage(msg)}
                  >
                    {msg}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("whatsapp.placeholder")}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="bg-green-500 hover:bg-green-600 px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </>
  )
}
