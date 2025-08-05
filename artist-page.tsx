"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Share2, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [shareText, setShareText] = useState("Share")

  const handleShare = async () => {
    const shareData = {
      title: "Laura - Klack",
      text: 'Check out "Klack" by Laura (@LVR) on Spotify!',
      url: "https://open.spotify.com/intl-de/track/3aq1HZ3GfVlMSshBOckTRt?si=3fac33f8e3324f81",
    }

    try {
      // Check if Web Share API is supported
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData)
        setShareText("Shared!")
        setTimeout(() => setShareText("Share"), 2000)
      } else {
        // Fallback: copy to clipboard
        const shareText = `${shareData.text} ${shareData.url}`

        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(shareText)
          setShareText("Copied!")
          setTimeout(() => setShareText("Share"), 2000)
        } else {
          // Final fallback for older browsers
          const textArea = document.createElement("textarea")
          textArea.value = shareText
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand("copy")
          document.body.removeChild(textArea)
          setShareText("Copied!")
          setTimeout(() => setShareText("Share"), 2000)
        }
      }
    } catch (error) {
      console.log("Error sharing:", error)
      // Even if there's an error, try the clipboard fallback
      try {
        const shareText = `${shareData.text} ${shareData.url}`
        const textArea = document.createElement("textarea")
        textArea.value = shareText
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
        setShareText("Copied!")
        setTimeout(() => setShareText("Share"), 2000)
      } catch (fallbackError) {
        console.log("Fallback also failed:", fallbackError)
        setShareText("Error")
        setTimeout(() => setShareText("Share"), 2000)
      }
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background iframe */}
      <iframe
        src="https://www.unicorn.studio/embed/5CKU03LOaJPqRDDW6lum"
        className="absolute inset-0 w-full h-full border-0 -z-10"
        title="Interactive Background"
        allowFullScreen
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 -z-5 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="bg-black/80 backdrop-blur-md border-white/20 text-white max-w-md w-full">
          <CardContent className="p-8 text-center space-y-6">
            {/* Album Cover */}
            <div className="relative mx-auto w-48 h-48 rounded-lg overflow-hidden shadow-2xl">
              <img src="/images/klack-cover.jpg" alt="Klack album cover" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Artist Info */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Laura</h1>
              <a
                href="https://open.spotify.com/intl-de/artist/3VHg1Bct5nmXqmA0aVsbQi?si=ww7Gc93iS62uKtH5EwIQ_Q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-sm font-medium hover:text-white transition-colors flex items-center justify-center gap-1"
              >
                @LVR
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Song Info */}
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Klack</h2>
              <p className="text-white/60 text-sm">Latest Release</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 justify-center pt-4">
              <Button asChild className="bg-green-500 text-white hover:bg-green-600 flex items-center gap-2">
                <a
                  href="https://open.spotify.com/intl-de/track/3aq1HZ3GfVlMSshBOckTRt?si=3fac33f8e3324f81"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-4 h-4" />
                  Play on Spotify
                </a>
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/40 hover:text-white bg-transparent flex items-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                {shareText}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
