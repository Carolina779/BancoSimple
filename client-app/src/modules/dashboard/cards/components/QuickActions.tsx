import { Button } from "@/components/ui/button"
import { CreditCard, Lock, AlertTriangle, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function QuickActions() {
  const actions = [
    {
      icon: Lock,
      label: "Bloquear tarjeta",
      color: "text-red-500",
    },
    {
      icon: AlertTriangle,
      label: "Reportar problema",
      color: "text-yellow-500",
    },
    {
      icon: DollarSign,
      label: "Realizar pago",
      color: "text-green-500",
    },
    {
      icon: CreditCard,
      label: "Solicitar adicional",
      color: "text-blue-500",
    },
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold">Acciones rápidas</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="button-outline-auto justify-start h-10 text-sm hover:bg-primary/5"
            >
              <action.icon size={16} className={`mr-2 ${action.color}`} />
              {action.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
