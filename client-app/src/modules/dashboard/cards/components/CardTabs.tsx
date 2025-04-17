"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardList } from "./CardList"
import { CardHolders } from "./CardHolders"
import { ChevronLeft } from "lucide-react"

interface CardTabsProps {
  onBack?: () => void
}

export function CardTabs({ onBack }: CardTabsProps) {
  return (
    <Tabs defaultValue="all" className="w-full animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {onBack && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="flex items-center gap-1 text-primary hover:text-primary/80"
            >
              <ChevronLeft className="h-4 w-4" /> Volver
            </Button>
          )}

          <TabsList className="ml-2">
            <TabsTrigger value="all" className="tabs-trigger-primary">
              Todas
            </TabsTrigger>
            <TabsTrigger value="credit" className="tabs-trigger-primary">
              Crédito
            </TabsTrigger>
            <TabsTrigger value="debit" className="tabs-trigger-primary">
              Débito
            </TabsTrigger>
            <TabsTrigger value="prepaid" className="tabs-trigger-primary">
              Prepago
            </TabsTrigger>
            <TabsTrigger value="holders" className="tabs-trigger-primary">
              Titulares
            </TabsTrigger>
          </TabsList>
        </div>
      </div>

      <TabsContent value="all" className="mt-2">
        <CardList type="all" />
      </TabsContent>
      <TabsContent value="credit" className="mt-2">
        <CardList type="credit" />
      </TabsContent>
      <TabsContent value="debit" className="mt-2">
        <CardList type="debit" />
      </TabsContent>
      <TabsContent value="prepaid" className="mt-2">
        <CardList type="prepaid" />
      </TabsContent>
      <TabsContent value="holders" className="mt-2">
        <CardHolders />
      </TabsContent>
    </Tabs>
  )
}
