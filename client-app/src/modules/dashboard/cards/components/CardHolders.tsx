"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function CardHolders() {
  const [addHolderOpen, setAddHolderOpen] = useState(false)

  const holders = [
    {
      id: 1,
      name: "Denix Rivera",
      email: "tochi@example.com",
      role: "Titular Principal",
      cards: 3,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      id: 2,
      name: "Angela Smith",
      email: "angela.smith@example.com",
      role: "Titular Adicional",
      cards: 1,
      image: "/placeholder.svg?height=48&width=48",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {holders.map((holder) => (
          <Card key={holder.id} className="border-primary/20 hover:border-primary/50 hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center gap-3 p-4">
              <Avatar className="h-10 w-10 border border-primary/20">
                <AvatarImage src={holder.image || "/placeholder.svg"} alt={holder.name} />
                <AvatarFallback className="bg-primary/10 text-primary">{holder.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">{holder.name}</CardTitle>
                <CardDescription className="text-xs">{holder.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Email:</span>
                  <span className="text-xs font-medium">{holder.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Tarjetas:</span>
                  <Badge className="bg-primary text-white text-xs h-5">{holder.cards}</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-2">
              <Button variant="outline" className="button-outline-auto w-full h-8 text-xs">
                Ver tarjetas
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Card className="border-2 border-dashed border-primary/20 hover:border-primary/50 transition-all">
          <CardHeader className="p-0">
            <Button
              variant="ghost"
              className="h-full w-full flex flex-col gap-2 p-6 text-primary hover:text-white hover:bg-primary/90"
              onClick={() => setAddHolderOpen(true)}
            >
              <UserPlus className="h-6 w-6" />
              <span className="text-sm">Agregar titular adicional</span>
            </Button>
          </CardHeader>
        </Card>
      </div>

      <Dialog open={addHolderOpen} onOpenChange={setAddHolderOpen}>
        <DialogContent className="z-[60] bg-background text-foreground popover">
          <DialogHeader>
            <DialogTitle>Agregar titular adicional</DialogTitle>
            <DialogDescription>Ingrese los datos del nuevo titular adicional</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" placeholder="Nombre y apellidos" className="input-primary" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="correo@ejemplo.com" className="input-primary" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="document">Documento de identidad</Label>
              <Input id="document" placeholder="Número de documento" className="input-primary" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" placeholder="Número de teléfono" className="input-primary" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddHolderOpen(false)} className="button-outline-auto">
              Cancelar
            </Button>
            <Button className="button-primary-auto">Agregar titular</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
