import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      name: "Supermercado XYZ",
      amount: -125.5,
      date: "Hoy, 10:30 AM",
      icon: "🛒",
    },
    {
      id: 2,
      name: "Transferencia recibida",
      amount: 350.0,
      date: "Ayer, 2:45 PM",
      icon: "💸",
    },
    {
      id: 3,
      name: "Restaurante ABC",
      amount: -45.75,
      date: "22/03/2025",
      icon: "🍔",
    },
    {
      id: 4,
      name: "Pago de servicios",
      amount: -89.99,
      date: "20/03/2025",
      icon: "📱",
    },
  ]

  return (
    <Card className="border-primary/20">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Transacciones recientes</CardTitle>
            <CardDescription className="text-xs">Últimos movimientos de tus tarjetas</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="text-primary text-xs h-8 px-2">
            Ver todas
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center gap-3 p-2 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">{transaction.icon}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-none truncate">{transaction.name}</p>
                <p className="text-xs text-muted-foreground">{transaction.date}</p>
              </div>
              <div
                className={
                  transaction.amount > 0 ? "text-green-500 font-medium text-sm" : "text-red-500 font-medium text-sm"
                }
              >
                {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
