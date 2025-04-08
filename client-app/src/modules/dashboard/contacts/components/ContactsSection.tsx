// ✅ Archivo: /modules/dashboard/contacts/components/ContactsSection.tsx

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Search, Star } from "lucide-react";
import { AddContactDialog } from "@/modules/dashboard/contacts/components/AddContactDialog";
import { ContactCard } from "./ContactCard";
import { ContactStatsCard } from "@/modules/dashboard/contacts/components/ContactStatsCard";

export function ContactsSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const [contacts] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      accountNumber: "****1234",
      favorite: true,
      image: "",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      accountNumber: "****5678",
      favorite: true,
      image: "",
    },
    {
      id: 3,
      name: "Alex Johnson",
      email: "alex.j@example.com",
      accountNumber: "****9012",
      favorite: false,
      image: "",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      accountNumber: "****3456",
      favorite: false,
      image: "",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.b@example.com",
      accountNumber: "****7890",
      favorite: false,
      image: "",
    },
  ]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const favoriteContacts = filteredContacts.filter((c) => c.favorite);
  const otherContacts = filteredContacts.filter((c) => !c.favorite);

  return (
    <div className="grid gap-6 md:grid-cols-4">
      <Card className="md:col-span-3">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Tus Contactos</CardTitle>
              <CardDescription>
                Administra y transfiere a tus contactos frecuentes.
              </CardDescription>
            </div>
            <AddContactDialog />
          </div>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar contactos..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          {favoriteContacts.length > 0 && (
            <>
              <h3 className="font-medium text-lg mb-2 flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" /> Contactos
                Favoritos
              </h3>
              <div className="grid gap-4 mb-6">
                {favoriteContacts.map((c) => (
                  <ContactCard key={c.id} contact={c} />
                ))}
              </div>
            </>
          )}
          <h3 className="font-medium text-lg mb-2">Todos los Contactos</h3>
          <div className="grid gap-4">
            {otherContacts.length > 0 ? (
              otherContacts.map((c) => <ContactCard key={c.id} contact={c} />)
            ) : (
              <p className="text-center py-4 text-muted-foreground">
                No se encontraron contactos.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <ContactStatsCard contacts={contacts} />
      </div>
    </div>
  );
}
