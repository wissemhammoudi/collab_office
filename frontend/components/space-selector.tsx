"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Coffee, MapPin } from "lucide-react"

interface Space {
  id: number
  type: "study" | "coworking" | "meeting"
  available: boolean
  position: { row: number; col: number }
  price: number
  features: string[]
}

interface SpaceSelectorProps {
  spaces: Space[]
  onSpaceSelect: (space: Space | null) => void
  selectedSpace: Space | null
}

export function SpaceSelector({ spaces, onSpaceSelect, selectedSpace }: SpaceSelectorProps) {
  const [hoveredSpace, setHoveredSpace] = useState<number | null>(null)

  const getSpaceColor = (space: Space) => {
    if (!space.available) return "bg-red-500 hover:bg-red-600 cursor-not-allowed"
    if (selectedSpace?.id === space.id) return "bg-blue-500 hover:bg-blue-600"
    if (hoveredSpace === space.id) return "bg-slate-400 hover:bg-slate-500"

    switch (space.type) {
      case "study":
        return "bg-green-500 hover:bg-green-600"
      case "coworking":
        return "bg-amber-500 hover:bg-amber-600"
      case "meeting":
        return "bg-purple-500 hover:bg-purple-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  const getSpaceIcon = (type: string) => {
    switch (type) {
      case "study":
        return <BookOpen className="h-4 w-4" />
      case "coworking":
        return <Users className="h-4 w-4" />
      case "meeting":
        return <Coffee className="h-4 w-4" />
      default:
        return <MapPin className="h-4 w-4" />
    }
  }

  const getSpaceTypeName = (type: string) => {
    switch (type) {
      case "study":
        return "Zone d'étude"
      case "coworking":
        return "Coworking"
      case "meeting":
        return "Réunion"
      default:
        return "Espace"
    }
  }

  const handleSpaceClick = (space: Space) => {
    if (space.available) {
      onSpaceSelect(selectedSpace?.id === space.id ? null : space)
    }
  }

  const availableSpaces = spaces.filter((s) => s.available)
  const occupiedSpaces = spaces.filter((s) => !s.available)

  return (
    <div className="space-y-6">
      {/* Space Grid */}
      <Card>
        <CardContent className="p-6">
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="grid grid-cols-4 gap-4 mb-6">
              {spaces.map((space) => (
                <button
                  key={space.id}
                  onClick={() => handleSpaceClick(space)}
                  onMouseEnter={() => setHoveredSpace(space.id)}
                  onMouseLeave={() => setHoveredSpace(null)}
                  disabled={!space.available}
                  className={`
                    aspect-square rounded-lg text-white font-medium text-sm
                    flex flex-col items-center justify-center gap-1
                    transition-all duration-200 transform hover:scale-105
                    ${getSpaceColor(space)}
                    ${!space.available ? "opacity-75" : "cursor-pointer"}
                    ${selectedSpace?.id === space.id ? "ring-4 ring-blue-200" : ""}
                  `}
                  title={`${getSpaceTypeName(space.type)} #${space.id} - ${space.available ? "Disponible" : "Occupé"} - ${space.price} DT/h`}
                >
                  {getSpaceIcon(space.type)}
                  <span className="text-xs">#{space.id}</span>
                </button>
              ))}
            </div>

            {/* Hover Info */}
            {hoveredSpace && (
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                {(() => {
                  const space = spaces.find((s) => s.id === hoveredSpace)
                  if (!space) return null
                  return (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getSpaceIcon(space.type)}
                        <div>
                          <p className="font-medium">
                            {getSpaceTypeName(space.type)} #{space.id}
                          </p>
                          <p className="text-sm text-slate-600">{space.price} DT/heure</p>
                        </div>
                      </div>
                      <Badge variant={space.available ? "default" : "destructive"}>
                        {space.available ? "Disponible" : "Occupé"}
                      </Badge>
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center p-4">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-green-600">{availableSpaces.length}</div>
            <div className="text-sm text-slate-600">Disponibles</div>
          </CardContent>
        </Card>
        <Card className="text-center p-4">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-red-600">{occupiedSpaces.length}</div>
            <div className="text-sm text-slate-600">Occupés</div>
          </CardContent>
        </Card>
        <Card className="text-center p-4">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-cyan-600">
              {spaces.filter((s) => s.type === "study" && s.available).length}
            </div>
            <div className="text-sm text-slate-600">Étude libre</div>
          </CardContent>
        </Card>
        <Card className="text-center p-4">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-amber-600">
              {spaces.filter((s) => s.type === "coworking" && s.available).length}
            </div>
            <div className="text-sm text-slate-600">Coworking libre</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const firstAvailable = spaces.find((s) => s.available && s.type === "study")
            if (firstAvailable) onSpaceSelect(firstAvailable)
          }}
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Zone d'étude rapide
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const firstAvailable = spaces.find((s) => s.available && s.type === "coworking")
            if (firstAvailable) onSpaceSelect(firstAvailable)
          }}
        >
          <Users className="h-4 w-4 mr-2" />
          Coworking rapide
        </Button>
        <Button variant="outline" size="sm" onClick={() => onSpaceSelect(null)}>
          Réinitialiser
        </Button>
      </div>
    </div>
  )
}
