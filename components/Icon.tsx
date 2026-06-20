import {
  Waves, Leaf, Droplets, UtensilsCrossed, Heart,
  GraduationCap, BookOpen, Bot, Globe, Users,
  Headphones, Camera, Mic2, MapPin, Clock,
  Share2, Play, Star, Tag, Mail, Info,
  BookMarked, Users2, Radio, Music2, PlayCircle,
  Sparkles, ArrowRight, ChevronRight,
} from "lucide-react"
import type { LucideProps } from "lucide-react"

const iconMap = {
  Waves, Leaf, Droplets, UtensilsCrossed, Heart,
  GraduationCap, BookOpen, Bot, Globe, Users,
  Headphones, Camera, Mic2, MapPin, Clock,
  Share2, Play, Star, Tag, Mail, Info,
  BookMarked, Users2, Radio, Music2, PlayCircle,
  Sparkles, ArrowRight, ChevronRight,
} as const

export type IconName = keyof typeof iconMap

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = iconMap[name]
  return <LucideIcon {...props} />
}
