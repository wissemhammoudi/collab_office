"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, BookOpen, Building2, Check, X, Zap, Star, Shield, Trophy } from "lucide-react"
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
  // Add more study spaces as needed
]

const room1Spaces = room2Spaces

type AnySpace = (
  | (typeof room1Spaces)[number]
  | (typeof formationRoom)[number]
  | (typeof reunionRoom)[number]
) & { capacity?: number }

// Color system using primary color for all available spaces
const COLOR_SYSTEM = {
  available: {
    study: "bg-primary hover:bg-primary/90 border-primary",
    formation: "bg-primary hover:bg-primary/90 border-primary",
    reunion: "bg-primary hover:bg-primary/90 border-primary",
  },
  selected: {
    study: "ring-4 ring-primary/30 scale-110 shadow-lg",
    formation: "ring-4 ring-primary/30 scale-110 shadow-lg",
    reunion: "ring-4 ring-primary/30 scale-110 shadow-lg",
  },
  unavailable: "bg-gray-300 border-gray-400 cursor-not-allowed opacity-70",
  legend: {
    study: "bg-primary",
    formation: "bg-primary",
    reunion: "bg-primary",
    unavailable: "bg-gray-300",
  },
  accent: {
    formation: "bg-amber-100 text-amber-700 border-amber-200",
    reunion: "bg-blue-100 text-blue-700 border-blue-200",
    study: "bg-emerald-100 text-emerald-700 border-emerald-200",
  }
}

function SpaceIndicator({ space, isSelected }: { space: AnySpace; isSelected: boolean }) {
  const getStatusIcon = () => {
    if (!space.available) return <X className="h-3 w-3 text-white" />
    if (isSelected) return <Check className="h-3 w-3 text-white" />
    return <Zap className="h-3 w-3 text-white opacity-90" />
  }

  const getTypeIcon = () => {
    if (space.type === "formation") return <Trophy className="h-3 w-3 text-white" />
    if (space.type === "reunion") return <Users className="h-3 w-3 text-white" />
    return <BookOpen className="h-3 w-3 text-white" />
  }

  const getStatusColor = () => {
    if (!space.available) return "bg-gray-400"
    return "bg-primary/90"
  }

  return (
    <div className="absolute -top-1 -right-1">
      <div className={`${getStatusColor()} w-5 h-5 rounded-full flex items-center justify-center`}>
        {getStatusIcon()}
      </div>
    </div>
  )
}

function RoomLayout({
  spaces,
  onSpaceSelect,
  selectedSpace,
  roomName,
  t,
}: {
  spaces: AnySpace[]
  onSpaceSelect: (space: AnySpace | null) => void
  selectedSpace: AnySpace | null
  roomName: string
  t: (key: string) => string | string[]
}) {
  const maxRows = Math.max(...spaces.map((s) => s.position.row))
  const maxCols = Math.max(...spaces.map((s) => s.position.col))

  const getSpaceColors = (space: AnySpace) => {
    if (!space.available) {
      return {
        bg: COLOR_SYSTEM.unavailable,
        selected: "",
        status: "unavailable"
      }
    }

    const baseColors = COLOR_SYSTEM.available[space.type]
    const selectedColors = COLOR_SYSTEM.selected[space.type]
    
    return {
      bg: baseColors,
      selected: selectedSpace?.id === space.id ? selectedColors : "",
      status: space.type
    }
  }

  const getSpaceGradient = (space: AnySpace) => {
    if (!space.available) return ""
    return "from-primary to-primary/90"
  }

  const getSpaceAccent = (space: AnySpace) => {
    return COLOR_SYSTEM.accent[space.type]
  }

  const getSpaceIcon = (space: AnySpace) => {
    switch (space.type) {
      case "formation": return <Trophy className="h-4 w-4" />
      case "reunion": return <Users className="h-4 w-4" />
      case "study": return <BookOpen className="h-4 w-4" />
      default: return <BookOpen className="h-4 w-4" />
    }
  }

  const isRoomType = spaces.length === 1 && (spaces[0].type === "formation" || spaces[0].type === "reunion")

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-2 text-slate-800">{roomName}</h3>
        <div className={`text-sm px-3 py-1 rounded-full inline-block mb-4 ${getSpaceAccent(spaces[0])}`}>
          <div className="flex items-center gap-1">
            {getSpaceIcon(spaces[0])}
            <span>
              {isRoomType 
                ? (spaces[0].type === "formation" 
                    ? t("trainingRoomType") as string 
                    : t("meetingRoomType") as string)
                : t("studyZoneType") as string
              }
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 shadow-sm">
        {isRoomType ? (
          <div className="flex justify-center">
            {spaces.map((space) => {
              const colors = getSpaceColors(space)
              const gradient = getSpaceGradient(space)
              
              return (
                <div key={space.id} className="relative">
                  <button
                    onClick={() => space.available ? onSpaceSelect(space) : null}
                    disabled={!space.available}
                    className={`
                      w-full max-w-md h-40 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center text-white font-bold relative
                      ${space.available ? `bg-gradient-to-br ${gradient}` : colors.bg}
                      ${colors.selected}
                      ${space.available ? "hover:scale-[1.02] hover:shadow-md cursor-pointer" : "cursor-not-allowed"}
                    `}
                  >
                    <SpaceIndicator space={space} isSelected={selectedSpace?.id === space.id} />
                    <div className="text-xl mb-2 flex items-center gap-2">
                      {getSpaceIcon(space)}
                      {space.type === "formation" ? t("trainingRoom") as string : t("meetingRoom") as string}
                    </div>
                    <div className="text-sm opacity-95 mb-1 flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {t("capacity") as string}: {space.capacity} {t("persons") as string}
                    </div>
                    <div className={`text-xs px-3 py-1 rounded-full mt-1 ${getSpaceAccent(space)}`}>
                      {space.available ? t("available") as string : t("unavailable") as string}
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        ) : (
          <div
            className="grid gap-4 p-4 bg-white/50 rounded-lg"
            style={{ 
              gridTemplateRows: `repeat(${maxRows}, 1fr)`, 
              gridTemplateColumns: `repeat(${maxCols}, 1fr)`,
              maxWidth: "fit-content",
              margin: "0 auto"
            }}
          >
            {Array.from({ length: maxRows }, (_, rowIndex) =>
              Array.from({ length: maxCols }, (_, colIndex) => {
                const space = spaces.find((s) => s.position.row === rowIndex + 1 && s.position.col === colIndex + 1)

                if (!space) {
                  return <div key={`${rowIndex}-${colIndex}`} className="w-14 h-14" />
                }

                const colors = getSpaceColors(space)
                const gradient = getSpaceGradient(space)
                
                return (
                  <div key={space.id} className="relative">
                    <button
                      onClick={() => (space.available ? onSpaceSelect(space) : null)}
                      disabled={!space.available}
                      className={`
                        w-14 h-14 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center text-white font-bold relative
                        ${space.available ? `bg-gradient-to-br ${gradient}` : colors.bg}
                        ${colors.selected}
                        ${space.available ? "hover:scale-110 hover:shadow-md cursor-pointer" : "cursor-not-allowed"}
                      `}
                    >
                      <SpaceIndicator space={space} isSelected={selectedSpace?.id === space.id} />
                      <span className="text-xs opacity-90">#{space.id}</span>
                      <div className="text-[10px] opacity-80">
                        {space.type === "study" ? t("study") as string : 
                         space.type === "formation" ? t("train") as string : 
                         t("meet") as string}
                      </div>
                    </button>
                  </div>
                )
              }),
            )}
          </div>
        )}

        {!isRoomType && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 rounded-lg border border-slate-200">
              <div className="w-12 h-1 bg-gradient-to-r from-slate-400 to-slate-300 rounded"></div>
              <span className="text-sm font-medium text-slate-700">{t("entranceLabel") as string}</span>
              <div className="w-12 h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded"></div>
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
  const [selectedSpace, setSelectedSpace] = useState<AnySpace | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [duration, setDuration] = useState("2hours")

  useEffect(() => {
    setMounted(true)
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = currentLang
  }, [currentLang])

  if (!mounted) return null

  const currentSpaces =
    selectedRoom === "room1" ? room1Spaces :
    selectedRoom === "room2" ? room2Spaces :
    selectedRoom === "formation" ? formationRoom :
    reunionRoom

  const getSpaceTypeName = (type: string) => {
    switch (type) {
      case "study": return t("studyZoneType") as string
      case "formation": return t("trainingRoomType") as string
      case "reunion": return t("meetingRoomType") as string
      default: return t("spaceType") as string
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

  const getRoomButtonColors = (room: string) => {
    const isSelected = selectedRoom === room
    const base = "flex-1 transition-all duration-300 hover:scale-[1.02]"
    
    if (!isSelected) return `${base} bg-white text-slate-700 hover:bg-slate-50 border-slate-200`
    
    return `${base} bg-primary text-white hover:bg-primary/90 border-primary`
  }

  const getRoomAccent = (room: string) => {
    switch (room) {
      case "formation": return "bg-amber-100 text-amber-700 border-amber-200"
      case "reunion": return "bg-blue-100 text-blue-700 border-blue-200"
      default: return "bg-emerald-100 text-emerald-700 border-emerald-200"
    }
  }

  const getRoomIcon = (room: string) => {
    switch (room) {
      case "formation": return <Trophy className="h-4 w-4" />
      case "reunion": return <Users className="h-4 w-4" />
      default: return <BookOpen className="h-4 w-4" />
    }
  }

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

    const parts = feature.split(" ")
    if (parts.length > 1 && !isNaN(Number(parts[0]))) {
      const number = parts[0]
      const text = parts.slice(1).join(" ")
      const translatedText = featureMap[text] || text
      return `${number} ${translatedText}`
    }

    return featureMap[feature] || feature
  }

  const getSpaceTypeIcon = (type: string) => {
    switch (type) {
      case "formation": return <Trophy className="h-5 w-5" />
      case "reunion": return <Users className="h-5 w-5" />
      case "study": return <BookOpen className="h-5 w-5" />
      default: return <BookOpen className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t("bookingHeroTitle") as string}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t("bookingHeroSubtitle") as string}
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-base text-slate-600 bg-white/70 px-4 py-2 rounded-full inline-flex shadow-sm">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{t("bookingLocation") as string}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-slate-200 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <Building2 className="h-6 w-6 text-primary" />
                  {t("selectSpaceTitle") as string}
                </CardTitle>

                <div className="flex flex-wrap gap-3 mt-6">
                  {["room1", "room2", "formation", "reunion"].map((room) => (
                    <Button
                      key={room}
                      variant="outline"
                      onClick={() => handleRoomChange(room)}
                      className={getRoomButtonColors(room)}
                    >
                      <div className="flex items-center gap-2">
                        {getRoomIcon(room)}
                        {room === "room1" && t("studyZone1") as string}
                        {room === "room2" && t("studyZone2") as string}
                        {room === "formation" && t("trainingRoom") as string}
                        {room === "reunion" && t("meetingRoom") as string}
                      </div>
                    </Button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm mt-8">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200">
                    <div className={`w-4 h-4 ${COLOR_SYSTEM.legend.study} rounded shadow-sm`}></div>
                    <span className="font-medium text-slate-700">{t("availableSpaceLegend") as string}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200">
                    <div className={`w-4 h-4 ${COLOR_SYSTEM.legend.unavailable} rounded shadow-sm`}></div>
                    <span className="font-medium text-slate-700">{t("occupiedLegend") as string}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
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

          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-slate-200 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900">
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  {t("bookingFormTitle") as string}
                </CardTitle>
                {selectedSpace && (
                  <div className="space-y-3 mt-3">
                    <Badge 
                      className={`w-fit ${COLOR_SYSTEM.accent[selectedSpace.type]} font-medium`}
                    >
                      <div className="flex items-center gap-1">
                        {getSpaceTypeIcon(selectedSpace.type)}
                        {getSpaceTypeName(selectedSpace.type)}
                      </div>
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="w-fit bg-white/10 text-white border-white/30"
                    >
                      {selectedSpace.type === "formation" || selectedSpace.type === "reunion" 
                        ? `${t("completeRoom") as string} - ${selectedSpace.capacity} ${t("persons") as string}`
                        : `${t("place") as string} #${selectedSpace.id}`
                      }
                    </Badge>
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {selectedSpace ? (
                  <>
                    <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${COLOR_SYSTEM.accent[selectedSpace.type].replace('text-', 'bg-').replace(/bg-(primary|amber|blue|emerald)-\d+/, 'bg-$1/20').replace('border-', '')}`}>
                          {getSpaceTypeIcon(selectedSpace.type)}
                        </div>
                        <h4 className="font-semibold text-slate-800">{getSpaceTypeName(selectedSpace.type)}</h4>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedSpace.features.map((feature, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="text-xs bg-white/80 border-slate-200 text-slate-700"
                          >
                            {translateFeature(feature)}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center p-2 bg-primary/5 rounded-lg">
                          <span className="text-slate-600">{t("twoHoursRate") as string}</span>
                          <span className="font-bold text-primary">{selectedSpace.price2Hours} DT</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-primary/5 rounded-lg">
                          <span className="text-slate-600">{t("halfDayRate") as string}</span>
                          <span className="font-bold text-primary">{selectedSpace.priceHalfDay} DT</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-primary/5 rounded-lg">
                          <span className="text-slate-600">{t("dayRate") as string}</span>
                          <span className="font-bold text-primary">{selectedSpace.price} DT</span>
                        </div>
                      </div>
                    </div>

                    {/* Date & Time selection */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-slate-500" />
                        {t("selectDate") as string}
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-500" />
                        {t("startTime") as string}
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      >
                        <option value="">{t("selectTime") as string}</option>
                        {Array.from({ length: 14 }, (_, i) => i + 8).map((hour) => (
                          <option key={hour} value={`${hour.toString().padStart(2, "0")}:00`}>
                            {hour.toString().padStart(2, "0")}:00
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        {t("selectDuration") as string}
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      >
                        <option value="2hours">{t("twoHours") as string}</option>
                        <option value="halfday">{t("halfDay") as string}</option>
                        <option value="fullday">{t("fullDay") as string}</option>
                      </select>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-primary to-primary/90 p-5 rounded-xl text-white shadow-lg">
                      <h4 className="font-bold text-lg mb-2">{t("totalPrice") as string}</h4>
                      <p className="text-2xl font-bold mb-1">{calculateTotal()} DT</p>
                      <p className="text-sm opacity-90">
                        {getDurationLabel()} • {selectedSpace.type === "formation" || selectedSpace.type === "reunion" 
                          ? t("completeRoom") as string 
                          : t("individualSeat") as string}
                      </p>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary mt-2 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      {t("bookNow") as string}
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-slate-500 font-medium">{t("selectSpacePrompt") as string}</p>
                    <p className="text-sm text-slate-400 mt-2">
                      {t("selectSpaceSubPrompt") as string}
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