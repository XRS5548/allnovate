// app/docs/page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function DocsComingSoon() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
      <Card className="max-w-lg w-full text-center shadow-lg rounded-2xl p-8">
        <CardContent className="space-y-6">
          <h1 className="text-3xl font-bold">📖 Docs Coming Soon</h1>
          <p className="text-muted-foreground">
            Thanks for visiting! We’re working hard to prepare documentation for AreaKnotch Labs.  
            Stay tuned, it’ll be available here very soon 🚀
          </p>
          <Button onClick={() => router.push("/")}>
            Go Back Home
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
