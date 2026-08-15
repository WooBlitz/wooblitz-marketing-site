"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export default function TestFeature() {
  return (
    <div className="p-8">
      <h1>Test</h1>
      <Badge>Test Badge</Badge>
      <Card>
        <CardContent>
          <Sparkles />
          <Button>Test</Button>
        </CardContent>
      </Card>
    </div>
  )
}
