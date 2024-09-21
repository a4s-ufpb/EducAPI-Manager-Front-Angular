import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextoService {
  private contextos = [
    { id: 1, name: 'Contexto 1' },
    { id: 2, name: 'Contexto 2' },
  ];

  constructor() { }

  // Retorna todos os contextos
  getContextos() {
    return this.contextos;
  }

  // Adiciona um novo contexto
  addContexto(contexto: any) {
    this.contextos.push(contexto);
  }

  // Edita um contexto existente
  editContexto(id: number, updatedContexto: any) {
    const index = this.contextos.findIndex(contexto => contexto.id === id);
    if (index !== -1) {
      this.contextos[index] = updatedContexto;
    }
  }

  // Remove um contexto
  removeContexto(id: number) {
    this.contextos = this.contextos.filter(contexto => contexto.id !== id);
  }
}

