"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, BookOpen, Building2 } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const room2Spaces = [
  // Study zone - quiet area layout
  {
    id: 13,
    type: "study" as const,
    available: true,
    position: { row: 1, col: 1 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 14,
    type: "study" as const,
    available: true,
    position: { row: 1, col: 2 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 15,
    type: "study" as const,
    available: false,
    position: { row: 1, col: 3 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 16,
    type: "study" as const,
    available: true,
    position: { row: 1, col: 4 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 17,
    type: "study" as const,
    available: true,
    position: { row: 1, col: 5 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },

  // Second row
  {
    id: 18,
    type: "study" as const,
    available: true,
    position: { row: 2, col: 1 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 19,
    type: "study" as const,
    available: false,
    position: { row: 2, col: 2 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 20,
    type: "study" as const,
    available: true,
    position: { row: 2, col: 3 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 21,
    type: "study" as const,
    available: true,
    position: { row: 2, col: 4 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 22,
    type: "study" as const,
    available: true,
    position: { row: 2, col: 5 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },

  // Third row
  {
    id: 23,
    type: "study" as const,
    available: true,
    position: { row: 3, col: 1 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 24,
    type: "study" as const,
    available: true,
    position: { row: 3, col: 2 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 25,
    type: "study" as const,
    available: false,
    position: { row: 3, col: 3 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 26,
    type: "study" as const,
    available: true,
    position: { row: 3, col: 4 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
  {
    id: 27,
    type: "study" as const,
    available: true,
    position: { row: 3, col: 5 },
    price: 15,
    priceHalfDay: 10,
    price2Hours: 5,
    features: ["WiFi", "Silence", "Prise électrique"],
  },
]

const room1Spaces = room2Spaces

function RoomLayout({
  spaces,
  onSpaceSelect,
  selectedSpace,
  roomName,
}: {
  spaces: typeof room1Spaces
  onSpaceSelect: (space: (typeof spaces)[0] | null) => void
  selectedSpace: (typeof spaces)[0] | null
  roomName: string
}) {
  const maxRows = Math.max(...spaces.map((s) => s.position.row))
  const maxCols = Math.max(...spaces.map((s) => s.position.col))

  const getSpaceColor = (space: (typeof spaces)[0]) => {
    if (!space.available) return "bg-red-500"
    if (space.type === "study") return "bg-green-500"
    return "bg-gray-500"
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-2">{roomName}</h3>
        <div className="text-sm text-muted-foreground mb-4">Espace calme et productif pour concentration maximale</div>
      </div>

      <div className="bg-slate-50 p-6 rounded-lg">
        <div
          className="grid gap-3"
          style={{ gridTemplateRows: `repeat(${maxRows}, 1fr)`, gridTemplateColumns: `repeat(${maxCols}, 1fr)` }}
        >
          {Array.from({ length: maxRows }, (_, rowIndex) =>
            Array.from({ length: maxCols }, (_, colIndex) => {
              const space = spaces.find((s) => s.position.row === rowIndex + 1 && s.position.col === colIndex + 1)

              if (!space) {
                return <div key={`${rowIndex}-${colIndex}`} className="w-12 h-12" />
              }

              return (
                <button
                  key={space.id}
                  onClick={() => (space.available ? onSpaceSelect(space) : null)}
                  disabled={!space.available}
                  className={`
                    w-12 h-12 rounded-lg border-2 transition-all duration-200 flex items-center justify-center text-white font-bold text-sm
                    ${getSpaceColor(space)}
                    ${selectedSpace?.id === space.id ? "ring-4 ring-cyan-300 scale-110" : ""}
                    ${space.available ? "hover:scale-105 cursor-pointer" : "cursor-not-allowed opacity-60"}
                  `}
                >
                  {space.id}
                </button>
              )
            }),
          )}
        </div>

        {/* Room entrance indicator */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-8 h-1 bg-slate-400 rounded"></div>
            <span>Entrée</span>
            <div className="w-8 h-1 bg-slate-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  const { t } = useLanguage()
  const [selectedRoom, setSelectedRoom] = useState("room1")
  const [selectedSpace, setSelectedSpace] = useState<(typeof room2Spaces)[0] | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [duration, setDuration] = useState("2hours")

  const currentSpaces = selectedRoom === "room1" ? room1Spaces : room2Spaces

  const getSpaceTypeName = (type: string) => {
    switch (type) {
      case "study":
        return "Zone d'étude"
      default:
        return "Espace"
    }
  }

  const calculateTotal = () => {
    if (!selectedSpace) return 0
    if (duration === "2hours") return selectedSpace.price2Hours || 5
    if (duration === "halfday") return selectedSpace.priceHalfDay || 10
    if (duration === "fullday") return selectedSpace.price || 15
    return 0
  }

  const getDurationLabel = () => {
    if (duration === "2hours") return "2 heures"
    if (duration === "halfday") return "Demi-journée"
    if (duration === "fullday") return "Journée complète"
    return ""
  }

  const handleRoomChange = (room: string) => {
    setSelectedRoom(room)
    setSelectedSpace(null)
  }

  const getSpaceColor = (space: (typeof room2Spaces)[0]) => {
    if (!space.available) return "bg-red-500"
    if (space.type === "study") return "bg-green-500"
    return "bg-gray-500"
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">{t("bookingTitle")}</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Réservez votre place dans notre zone d'étude silencieuse
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>{t("locationAddress")}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Room Selection and Layout */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Zone d'étude - Colab Office Ariana
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>Zone d'étude (15 DT/jour)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span>Occupé</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <RoomLayout
                    spaces={currentSpaces}
                    onSpaceSelect={setSelectedSpace}
                    selectedSpace={selectedSpace}
                    roomName="Zone d'étude silencieuse"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Réservation</CardTitle>
                  {selectedSpace && (
                    <div className="space-y-2">
                      <Badge variant="secondary" className="w-fit">
                        Zone d'étude
                      </Badge>
                      <Badge variant="outline" className="w-fit">
                        Place #{selectedSpace.id}
                      </Badge>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedSpace ? (
                    <>
                      {/* Selected Space Info */}
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <BookOpen className="h-5 w-5 text-green-600" />
                          <h4 className="font-medium">{getSpaceTypeName(selectedSpace.type)}</h4>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {selectedSpace.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-1 text-sm">
                          <p className="text-slate-600">
                            2 heures: <span className="font-semibold">5 DT</span>
                          </p>
                          <p className="text-slate-600">
                            Demi-journée: <span className="font-semibold">10 DT</span>
                          </p>
                          <p className="text-slate-600">
                            Journée: <span className="font-semibold">15 DT</span>
                          </p>
                        </div>
                      </div>

                      {/* Date Selection */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          Date
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>

                      {/* Time Selection */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          <Clock className="h-4 w-4 inline mr-1" />
                          Heure de début
                        </label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="">Sélectionner l'heure</option>
                          {Array.from({ length: 14 }, (_, i) => i + 8).map((hour) => (
                            <option key={hour} value={`${hour.toString().padStart(2, "0")}:00`}>
                              {hour.toString().padStart(2, "0")}:00
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Duration */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Durée</label>
                        <select
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="2hours">2 heures - 5 DT</option>
                          <option value="halfday">Demi-journée - 10 DT</option>
                          <option value="fullday">Journée complète - 15 DT</option>
                        </select>
                      </div>

                      {/* Total */}
                      {selectedDate && selectedTime && (
                        <div className="bg-cyan-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Total:</span>
                            <span className="text-xl font-bold text-cyan-600">{calculateTotal()} DT</span>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">{getDurationLabel()}</p>
                        </div>
                      )}

                      {/* Book Button */}
                      <Button className="w-full" size="lg" disabled={!selectedDate || !selectedTime}>
                        Réserver maintenant
                      </Button>

                      <p className="text-xs text-slate-500 text-center">
                        Paiement sécurisé • Annulation gratuite jusqu'à 2h avant
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <Building2 className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <h4 className="font-medium text-slate-900 mb-2">Sélectionnez une place</h4>
                      <p className="text-sm text-slate-600">
                        Cliquez sur une place disponible pour commencer votre réservation
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi choisir Colab Office ?</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Un environnement moderne et professionnel pour votre productivité
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Environnement calme</h3>
                  <p className="text-sm text-slate-600">Zone silencieuse garantie pour votre concentration</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Horaires flexibles</h3>
                  <p className="text-sm text-slate-600">Ouvert de 8h à 22h, 7 jours sur 7</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Services complets</h3>
                  <p className="text-sm text-slate-600">Assistance administrative et création d'entreprises</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Emplacement idéal</h3>
                  <p className="text-sm text-slate-600">Au cœur d'Ariana, facilement accessible</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
