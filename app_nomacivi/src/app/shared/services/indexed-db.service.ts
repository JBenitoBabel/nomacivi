import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexedDbService {
  private dbName = 'my_database';
  private dbVersion = 1;
  private db: IDBDatabase | null = null;;

  constructor() {
    this.openDatabase();
  }

  public openDatabase() {
    const request = indexedDB.open(this.dbName, this.dbVersion);

    request.onerror = (event) => {
      console.error('Error al abrir la base de datos:', event);
    };

    request.onsuccess = (event: any) => {
      if (event.target) {
        this.db = event.target.result;
        console.log('Base de datos abierta con éxito');
      }
    };

    request.onupgradeneeded = (event: any) => {
      this.db = event.target.result;
      if (this.db) {
        // Define la estructura de la base de datos si es necesario
        const objectStore = this.db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });
        objectStore.createIndex('name', 'name', { unique: false });

        console.log('Base de datos actualizada');
      }
    };
  }

  // Implementa métodos para realizar operaciones CRUD en la base de datos
}
