import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'DashBoard', icono: 'mdi mdi-gauge', subMenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'ProgressBard', url: 'progress' },
        { titulo: 'Graficas', url: 'grafica1' }
      ]
    }
  ];


  constructor() { }
}
