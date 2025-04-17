import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Banknote, PiggyBank } from "lucide-react"

// Datos de ejemplo
const userData = {
  accounts: [
    {
      id: "account1",
      name: "Cuenta Corriente",
      number: "****5678",
      balance: 12345.67,
      currency: "CLP",
    },
    {
      id: "account2",
      name: "Cuenta Ahorro",
      number: "****9012",
      balance: 5432.1,
      currency: "CLP",
    },
  ],
}

const AccountBalance = () => {
  return (
    <Card className="w-full border-primary/20">
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold">Cuentas asociadas</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Tabs defaultValue={userData.accounts[0].id} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            {userData.accounts.map((account) => (
              <TabsTrigger
                key={account.id}
                value={account.id}
                className="tabs-trigger-primary flex items-center gap-1 text-sm"
              >
                {account.name.includes("Ahorro") ? <PiggyBank className="w-4 h-4" /> : <Banknote className="w-4 h-4" />}
                {account.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {userData.accounts.map((account) => (
            <TabsContent key={account.id} value={account.id} className="space-y-4">
              <div className="grid gap-3">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Número de cuenta</p>
                  <p className="font-medium text-sm">{account.number}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Balance disponible</p>
                  <p className="text-2xl font-bold text-primary">
                    {account.balance.toLocaleString("es-CL", {
                      style: "currency",
                      currency: account.currency,
                    })}
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default AccountBalance
