import { Component, OnInit } from '@angular/core';
import { ContextoService } from '../contexto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contexto',
  templateUrl: './contexto.component.html',
  styleUrls: ['./contexto.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContextoComponent implements OnInit {
  contextos: any[] = [];
  newContexto: string = '';
  editingContextoId: number | null = null;

  constructor(private contextoService: ContextoService) { }

  ngOnInit(): void {
    this.contextos = this.contextoService.getContextos();
  }

  addContexto() {
    if (this.newContexto.trim()) {
      if (this.editingContextoId !== null) {
        const updatedContexto = { id: this.editingContextoId, name: this.newContexto };
        this.contextoService.editContexto(this.editingContextoId, updatedContexto);
        this.editingContextoId = null;
      } else {
        const newContexto = { id: Date.now(), name: this.newContexto };
        this.contextoService.addContexto(newContexto);
      }
      this.newContexto = ''; 
    }
  }

  removeContexto(id: number) {
    this.contextoService.removeContexto(id);
    this.contextos = this.contextoService.getContextos(); 
  }

  editContexto(contexto: any) {
    this.newContexto = contexto.name;
    this.editingContextoId = contexto.id;
  }
}
