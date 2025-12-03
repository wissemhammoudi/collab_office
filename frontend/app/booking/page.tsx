"use client"

import { useState, useEffect } from "react" // Added useEffect import
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, BookOpen, Building2 } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { useLanguage } from "@/hooks/use-language"

// Formation Room - Conference style
const formationRoom = [
  {
    id: 100,
    type: "formation" as const,
    available: true,
    position: { row: 1, col: 1 },
    price: 150,
    priceHalfDay: 90,
    price2Hours: 50,
    capacity: 20,
    features: ["Projecteur", "Tableau blanc", "WiFi", "Climatisation", "20 places"],
  },
]

// Reunion Room - Meeting style
const reunionRoom = [
  {
    id: 200,
    type: "reunion" as const,
    available: true,
    position: { row: 1, col: 1 },
    price: 80,
    priceHalfDay: 50,
    price2Hours: 30,
    capacity: 8,
    features: ["Écran TV", "Tableau blanc", "WiFi", "Climatisation", "8 places", "Visioconférence"],
  },
]

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
  // ... rest of the spaces
]

const room1Spaces = room2Spaces

function RoomLayout({
  spaces,
  onSpaceSelect,
  selectedSpace,
  roomName,
  t,
}: {
  spaces: typeof room1Spaces
  onSpaceSelect: (space: (typeof spaces)[0] | null) => void
  selectedSpace: (typeof spaces)[0] | null
  roomName: string
  t: (key: string) => string
}) {
  const maxRows = Math.max(...spaces.map((s) => s.position.row))
  const maxCols = Math.max(...spaces.map((s) => s.position.col))

  const getSpaceColor = (space: (typeof spaces)[0]) => {
    if (!space.available) return "bg-red-500"
    if (space.type === "study") return "bg-green-500"
    if (space.type === "formation") return "bg-purple-500"
    if (space.type === "reunion") return "bg-blue-500"
    return "bg-gray-500"
  }
  
  const isRoomType = spaces.length === 1 && (spaces[0].type === "formation" || spaces[0].type === "reunion")

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-2">{roomName}</h3>
        <div className="text-sm text-muted-foreground mb-4">
          {isRoomType ? t("wholeRoomEquipment") as string : t("quietProductiveArea") as string}
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-lg">
        {isRoomType ? (
          <div className="flex justify-center">
            {spaces.map((space) => (
              <button
                key={space.id}
                onClick={() => space.available ? onSpaceSelect(space) : null}
                disabled={!space.available}
                className={`
                  w-full max-w-md h-32 rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center text-white font-bold
                  ${getSpaceColor(space)}
                  ${selectedSpace?.id === space.id ? "ring-4 ring-cyan-300 scale-105" : ""}
                  ${space.available ? "hover:scale-105 cursor-pointer" : "cursor-not-allowed opacity-60"}
                `}
              >
                <div className="text-lg">
                  {space.type === "formation" ? t("trainingRoom") as string : t("meetingRoom") as string}
                </div>
                <div className="text-sm opacity-90 mt-1">{t("capacity") as string}: {space.capacity} {t("persons") as string}</div>
              </button>
            ))}
          </div>
        ) : (
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
        )}

        {/* Room entrance indicator */}
        {!isRoomType && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-1 bg-slate-400 rounded"></div>
              <span>{t("entranceLabel") as string}</span>
              <div className="w-8 h-1 bg-slate-400 rounded"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function BookingPage() {
  const { t, currentLang } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState("room1")
  const [selectedSpace, setSelectedSpace] = useState<(typeof room2Spaces)[0] | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [duration, setDuration] = useState("2hours")

  useEffect(() => {
    setMounted(true)
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = currentLang
  }, [currentLang])

  if (!mounted) {
    return null
  }

  const currentSpaces = selectedRoom === "room1" ? room1Spaces : selectedRoom === "room2" ? room2Spaces : selectedRoom === "formation" ? formationRoom : reunionRoom

  const getSpaceTypeName = (type: string) => {
    switch (type) {
      case "study":
        return t("studyZoneType") as string
      case "formation":
        return t("trainingRoomType") as string
      case "reunion":
        return t("meetingRoomType") as string
      default:
        return t("spaceType") as string
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
    if (duration === "2hours") return t("twoHours") as string
    if (duration === "halfday") return t("halfDay") as string
    if (duration === "fullday") return t("fullDay") as string
    return ""
  }

  const handleRoomChange = (room: string) => {
    setSelectedRoom(room)
    setSelectedSpace(null)
  }

  // Fonction pour traduire les caractéristiques
  const translateFeature = (feature: string) => {
    const featureMap: Record<string, string> = {
      "Projecteur": t("projector") as string,
      "Tableau blanc": t("whiteboard") as string,
      "WiFi": t("wifi") as string,
      "Climatisation": t("airConditioning") as string,
      "places": t("seats") as string,
      "Écran TV": t("tvScreen") as string,
      "Visioconférence": t("videoConference") as string,
      "Silence": t("silence") as string,
      "Prise électrique": t("powerOutlet") as string
    }
    
    // Vérifier si la caractéristique contient un nombre (comme "20 places")
    const parts = feature.split(" ")
    if (parts.length > 1 && !isNaN(Number(parts[0]))) {
      const number = parts[0]
      const text = parts.slice(1).join(" ")
      const translatedText = featureMap[text] || text
      return `${number} ${translatedText}`
    }
    
    return featureMap[feature] || feature
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t("bookingHeroTitle") as string}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t("bookingHeroSubtitle") as string}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-600">
              <MapPin className="h-4 w-4" />
              <span>{t("bookingLocation") as string}</span>
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
                  {t("selectSpaceTitle") as string}
                </CardTitle>
                
                {/* Room Type Selector */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <Button
                    variant={selectedRoom === "room1" ? "default" : "outline"}
                    onClick={() => handleRoomChange("room1")}
                    className="flex-1"
                  >
                    {t("studyZone1") as string}
                  </Button>
                  <Button
                    variant={selectedRoom === "room2" ? "default" : "outline"}
                    onClick={() => handleRoomChange("room2")}
                    className="flex-1"
                  >
                    {t("studyZone2") as string}
                  </Button>
                  <Button
                    variant={selectedRoom === "formation" ? "default" : "outline"}
                    onClick={() => handleRoomChange("formation")}
                    className="flex-1"
                  >
                    {t("trainingRoom") as string}
                  </Button>
                  <Button
                    variant={selectedRoom === "reunion" ? "default" : "outline"}
                    onClick={() => handleRoomChange("reunion")}
                    className="flex-1"
                  >
                    {t("meetingRoom") as string}
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span>{t("studyZoneLegend") as string}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span>{t("trainingRoomLegend") as string}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span>{t("meetingRoomLegend") as string}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span>{t("occupiedLegend") as string}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <RoomLayout
                  spaces={currentSpaces}
                  onSpaceSelect={setSelectedSpace}
                  selectedSpace={selectedSpace}
                  roomName={
                    selectedRoom === "room1" ? t("quietStudyZone1") as string :
                    selectedRoom === "room2" ? t("quietStudyZone2") as string :
                    selectedRoom === "formation" ? t("trainingRoomName") as string :
                    t("meetingRoomName") as string
                  }
                  t={t}
                />
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>{t("bookingFormTitle") as string}</CardTitle>
                {selectedSpace && (
                  <div className="space-y-2">
                    <Badge variant="secondary" className="w-fit">
                      {getSpaceTypeName(selectedSpace.type)}
                    </Badge>
                    <Badge variant="outline" className="w-fit">
                      {selectedSpace.type === "formation" || selectedSpace.type === "reunion" 
                        ? `${t("completeRoom") as string} - ${selectedSpace.capacity} ${t("persons") as string}`
                        : `${t("place") as string} #${selectedSpace.id}`
                      }
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
                        {selectedSpace.type === "formation" && <BookOpen className="h-5 w-5 text-purple-600" />}
                        {selectedSpace.type === "reunion" && <Users className="h-5 w-5 text-blue-600" />}
                        {selectedSpace.type === "study" && <BookOpen className="h-5 w-5 text-green-600" />}
                        <h4 className="font-medium">{getSpaceTypeName(selectedSpace.type)}</h4>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {selectedSpace.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {translateFeature(feature)}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-1 text-sm">
                        <p className="text-slate-600">
                          {t("twoHoursRate") as string}: <span className="font-semibold">{selectedSpace.price2Hours} DT</span>
                        </p>
                        <p className="text-slate-600">
                          {t("halfDayRate") as string}: <span className="font-semibold">{selectedSpace.priceHalfDay} DT</span>
                        </p>
                        <p className="text-slate-600">
                          {t("dayRate") as string}: <span className="font-semibold">{selectedSpace.price} DT</span>
                        </p>
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        {t("selectDate") as string}
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
                        {t("startTime") as string}
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">{t("selectTime") as string}</option>
                        {Array.from({ length: 14 }, (_, i) => i + 8).map((hour) => (
                          <option key={hour} value={`${hour.toString().padStart(2, "0")}:00`}>
                            {hour.toString().padStart(2, "0")}:00
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t("durationLabel") as string}
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="2hours">{t("twoHours") as string} - {selectedSpace.price2Hours} DT</option>
                        <option value="halfday">{t("halfDay") as string} - {selectedSpace.priceHalfDay} DT</option>
                        <option value="fullday">{t("fullDay") as string} - {selectedSpace.price} DT</option>
                      </select>
                    </div>

                    {/* Total */}
                    {selectedDate && selectedTime && (
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{t("totalLabel") as string}:</span>
                          <span className="text-xl font-bold text-cyan-600">{calculateTotal()} DT</span>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">{getDurationLabel()}</p>
                      </div>
                    )}

                    {/* Book Button */}
                    <Button className="w-full" size="lg" disabled={!selectedDate || !selectedTime}>
                      {t("bookNowButton") as string}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      {t("securePayment") as string} • {t("freeCancellation") as string}
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Building2 className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h4 className="font-medium text-slate-900 mb-2">
                      {t("selectSpaceButton") as string}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {t("selectSpacePrompt") as string}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}