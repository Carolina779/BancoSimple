"use client"
import Layout from "@/modules/dashboard/common/components/Layout"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Users,
  ShieldAlert,
  Settings,
  FileText,
  TrendingUp,
  AlertTriangle,
  Search,
  Filter,
  Download,
  UserPlus,
  Lock,
  BarChart4,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Layout>
      <section className="container mx-auto py-6 space-y-6">
        {/* Admin Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl p-6 animate-fade-in">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">Panel de Administración</h1>
            <p className="text-muted-foreground mt-1">Gestión y monitoreo del sistema bancario</p>
          </div>
          <div className="flex mt-4 sm:mt-0 gap-2">
            <Button variant="outline" className="button-outline-auto flex items-center gap-2">
              <Download className="w-4 h-4" /> Exportar Datos
            </Button>
            <Button variant="default" className="button-primary-auto flex items-center gap-2">
              <Settings className="w-4 h-4" /> Configuración
            </Button>
          </div>
        </div>

        {/* Admin Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Usuarios Activos"
            value="2,458"
            icon={<Users className="h-4 w-4" />}
            description="+125 desde el mes pasado"
            descriptionIcon={<TrendingUp className="w-3 h-3 mr-1" />}
            descriptionColor="text-green-600"
          />

          <MetricCard
            title="Alertas de Seguridad"
            value="7"
            icon={<ShieldAlert className="h-4 w-4" />}
            description="3 requieren atención"
            descriptionColor="text-red-500"
          />

          <MetricCard
            title="Transacciones Hoy"
            value="1,245"
            icon={<TrendingUp className="h-4 w-4" />}
            description="$1.2M en volumen"
            descriptionColor="text-primary"
          />

          <MetricCard
            title="Reportes Pendientes"
            value="12"
            icon={<FileText className="h-4 w-4" />}
            description="5 de alta prioridad"
            descriptionColor="text-yellow-500"
          />
        </div>

        {/* Admin Tabs */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex mb-6 space-x-2 overflow-x-auto">
            <TabsTrigger value="overview" className="tabs-trigger-primary">
              Resumen
            </TabsTrigger>
            <TabsTrigger value="users" className="tabs-trigger-primary">
              Usuarios
            </TabsTrigger>
            <TabsTrigger value="transactions" className="tabs-trigger-primary">
              Transacciones
            </TabsTrigger>
            <TabsTrigger value="security" className="tabs-trigger-primary">
              Seguridad
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center">
                    <BarChart4 className="h-5 w-5 mr-2 text-primary" /> Actividad del Sistema
                  </CardTitle>
                  <CardDescription>Monitoreo en tiempo real de la actividad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { label: "Carga del Servidor", value: "68%" },
                      { label: "Tiempo de Respuesta", value: "120ms" },
                      { label: "Usuarios Conectados", value: "1,245" },
                      { label: "Transacciones por Minuto", value: "87" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-primary" /> Alertas Recientes
                  </CardTitle>
                  <CardDescription>Alertas de seguridad y sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Intento de acceso no autorizado",
                        time: "Hace 35 minutos",
                        severity: "Alta",
                      },
                      {
                        title: "Actualización de sistema pendiente",
                        time: "Hace 2 horas",
                        severity: "Media",
                      },
                      {
                        title: "Transacción sospechosa detectada",
                        time: "Hace 4 horas",
                        severity: "Alta",
                      },
                      {
                        title: "Backup automático completado",
                        time: "Hace 12 horas",
                        severity: "Baja",
                      },
                    ].map((alert, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">{alert.title}</p>
                          <p className="text-xs text-muted-foreground">{alert.time}</p>
                        </div>
                        <Badge
                          className={`${
                            alert.severity === "Alta"
                              ? "bg-red-500"
                              : alert.severity === "Media"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          } text-white`}
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4">
            <Card className="border-primary/20">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <CardTitle className="text-xl font-semibold flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" /> Gestión de Usuarios
                  </CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Buscar usuarios..." className="input-primary pl-10" />
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button className="button-primary-auto">
                      <UserPlus className="h-4 w-4 mr-1" /> Nuevo Usuario
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Usuario</th>
                        <th className="py-3 px-4 text-left font-medium">Rol</th>
                        <th className="py-3 px-4 text-left font-medium">Estado</th>
                        <th className="py-3 px-4 text-left font-medium">Último Acceso</th>
                        <th className="py-3 px-4 text-left font-medium">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Ana Martínez",
                          role: "Administrador",
                          status: "Activo",
                          lastLogin: "Hoy, 10:45 AM",
                        },
                        {
                          name: "Carlos Rodríguez",
                          role: "Ejecutivo",
                          status: "Activo",
                          lastLogin: "Hoy, 09:30 AM",
                        },
                        {
                          name: "María López",
                          role: "Cliente",
                          status: "Inactivo",
                          lastLogin: "Ayer, 15:20 PM",
                        },
                        {
                          name: "Juan Pérez",
                          role: "Ejecutivo",
                          status: "Activo",
                          lastLogin: "Hoy, 11:15 AM",
                        },
                        {
                          name: "Laura Sánchez",
                          role: "Cliente",
                          status: "Bloqueado",
                          lastLogin: "Hace 3 días",
                        },
                      ].map((user, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4">{user.name}</td>
                          <td className="py-3 px-4">{user.role}</td>
                          <td className="py-3 px-4">
                            <Badge
                              className={`${
                                user.status === "Activo"
                                  ? "bg-green-500"
                                  : user.status === "Inactivo"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              } text-white`}
                            >
                              {user.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">{user.lastLogin}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Editar
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-500 border-red-500">
                                Bloquear
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-4">
            <Card className="border-primary/20">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <CardTitle className="text-xl font-semibold flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-primary" /> Monitoreo de Transacciones
                  </CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Buscar transacciones..." className="input-primary pl-10" />
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button className="button-primary-auto">
                      <Download className="h-4 w-4 mr-1" /> Exportar
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">ID</th>
                        <th className="py-3 px-4 text-left font-medium">Cliente</th>
                        <th className="py-3 px-4 text-left font-medium">Tipo</th>
                        <th className="py-3 px-4 text-left font-medium">Monto</th>
                        <th className="py-3 px-4 text-left font-medium">Estado</th>
                        <th className="py-3 px-4 text-left font-medium">Fecha</th>
                        <th className="py-3 px-4 text-left font-medium">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: "TX-78945",
                          client: "Ana Martínez",
                          type: "Transferencia",
                          amount: "$1,500.00",
                          status: "Completada",
                          date: "Hoy, 10:45 AM",
                        },
                        {
                          id: "TX-78946",
                          client: "Carlos Rodríguez",
                          type: "Depósito",
                          amount: "$2,300.00",
                          status: "Completada",
                          date: "Hoy, 09:30 AM",
                        },
                        {
                          id: "TX-78947",
                          client: "María López",
                          type: "Retiro",
                          amount: "$500.00",
                          status: "Pendiente",
                          date: "Hoy, 11:20 AM",
                        },
                        {
                          id: "TX-78948",
                          client: "Juan Pérez",
                          type: "Transferencia",
                          amount: "$3,200.00",
                          status: "Rechazada",
                          date: "Hoy, 11:15 AM",
                        },
                        {
                          id: "TX-78949",
                          client: "Laura Sánchez",
                          type: "Pago",
                          amount: "$750.00",
                          status: "Completada",
                          date: "Hoy, 12:05 PM",
                        },
                      ].map((tx, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 font-mono text-xs">{tx.id}</td>
                          <td className="py-3 px-4">{tx.client}</td>
                          <td className="py-3 px-4">{tx.type}</td>
                          <td className="py-3 px-4 font-medium">{tx.amount}</td>
                          <td className="py-3 px-4">
                            <Badge
                              className={`${
                                tx.status === "Completada"
                                  ? "bg-green-500"
                                  : tx.status === "Pendiente"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              } text-white`}
                            >
                              {tx.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">{tx.date}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Detalles
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-500 border-red-500">
                                Revertir
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-4">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <ShieldAlert className="h-5 w-5 mr-2 text-primary" /> Configuración de Seguridad
                </CardTitle>
                <CardDescription>Administre la configuración de seguridad del sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Políticas de Acceso</h3>
                      <div className="space-y-2">
                        {[
                          "Autenticación de dos factores",
                          "Bloqueo después de 3 intentos fallidos",
                          "Cambio de contraseña cada 30 días",
                          "Sesiones activas máximas: 2",
                        ].map((policy, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm">{policy}</span>
                            <Button variant="outline" size="sm">
                              Configurar
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Monitoreo de Seguridad</h3>
                      <div className="space-y-2">
                        {[
                          "Detección de actividad sospechosa",
                          "Alertas de inicio de sesión",
                          "Registro de auditoría",
                          "Monitoreo de transacciones",
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm">{feature}</span>
                            <Button variant="outline" size="sm">
                              Configurar
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-medium mb-4">Acciones de Seguridad</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button className="button-primary-auto">
                        <Lock className="h-4 w-4 mr-1" /> Bloquear Todas las Cuentas
                      </Button>
                      <Button className="button-outline-auto">Reiniciar Contraseñas de Administrador</Button>
                      <Button className="button-outline-auto">Ejecutar Auditoría de Seguridad</Button>
                      <Button className="button-outline-auto">Actualizar Certificados SSL</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  )
}

// Subcomponente local
function MetricCard({
  title,
  value,
  icon,
  description,
  descriptionIcon,
  descriptionColor = "text-muted-foreground",
}: {
  title: string
  value: string
  icon: React.ReactNode
  description?: string
  descriptionIcon?: React.ReactNode
  descriptionColor?: string
}) {
  return (
    <div className="dashboard-card hover:border-primary/50 hover:shadow transition-all">
      <div className="flex items-center justify-between pb-2">
        <p className="dashboard-card-title">{title}</p>
        <div className="dashboard-card-icon bg-[var(--color-primary-lighter)] text-white rounded-full">{icon}</div>
      </div>
      <div className="dashboard-card-value">{value}</div>
      {description && (
        <p className={`text-xs mt-1 ${descriptionColor}`}>
          {descriptionIcon && (
            <span className="inline-flex items-center font-medium">
              {descriptionIcon}
              &nbsp;
            </span>
          )}
          {description}
        </p>
      )}
    </div>
  )
}
