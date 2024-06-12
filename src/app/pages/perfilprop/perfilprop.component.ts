import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-perfilprop',
  templateUrl: './perfilprop.component.html',
  styleUrls: ['./perfilprop.component.scss']
})
export class PerfilpropComponent {
  services = [
    { name: 'Corte degrade', time: '01:00', price: '30,00' },
    { name: 'Barba', time: '00:45', price: '25,00' },
    { name: 'Corte Degrade', time: '01:30', price: '30,00' },
    { name: 'Barba', time: '00:45', price: '25,00' }
  ];

  photos: { src: string, alt: string }[] = [
    { src: '../../../assets/Ferramentas.png', alt: 'ferramentas' },
    { src: '../../../assets/Corte.png', alt: 'corte' },
    { src: '../../../assets/Espelhos.png', alt: 'espelhos' }
  ];

  barbeariaPhotos: { src: string, alt: string }[] = [
    { src: '../../../assets/Barbearia.png', alt: 'fotoBarbearia' }
  ];

  perfilBarbeiroPhoto: { src: string, alt: string } = { src: '../../../assets/Barbearia Mari.png', alt: 'fotoBarbeiro' };

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  @ViewChild('editFileInput', { static: false }) editFileInput!: ElementRef;
  @ViewChild('perfilBarbeiroFileInput', { static: false }) perfilBarbeiroFileInput!: ElementRef;
  editIndex: number | null = null;

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  triggerEditFileInput(index: number) {
    this.editIndex = index;
    this.editFileInput.nativeElement.click();
  }

  triggerPerfilBarbeiroFileInput() {
    this.perfilBarbeiroFileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photos.push({ src: e.target.result, alt: file.name });
      };
      reader.readAsDataURL(file);
    }
  }

  onEditFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && this.editIndex !== null) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (this.editIndex !== null) {
          this.barbeariaPhotos[this.editIndex] = { src: e.target.result, alt: file.name };
          this.editIndex = null;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onPerfilBarbeiroFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.perfilBarbeiroPhoto = { src: e.target.result, alt: file.name };
      };
      reader.readAsDataURL(file);
    }
  }

  removePhoto(index: number) {
    this.photos.splice(index, 1);
  }

  removeBarbeariaPhoto(index: number) {
    this.barbeariaPhotos.splice(index, 1);
  }

  addService() {
    const newService = { name: 'Novo Serviço', time: '45 mins', price: '40,00' };
    this.services.push(newService);
  }

  editService(index: number) {
    const updatedService = { name: 'Serviço Editado', time: '30 mins', price: '50,00' };
    this.services[index] = updatedService;
  }

  removeService(index: number) {
    this.services.splice(index, 1);
  }
}
