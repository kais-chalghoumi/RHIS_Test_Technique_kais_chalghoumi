import {
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { BreadcrumbComponent } from '../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';

interface User {
  name: string;
  role: string;
  avatar: string;
  department: string;
}

interface DepartmentGroup {
  name: string;
  users: User[];
  collapsed: boolean;
}

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    CommonModule,
    ChartComponent,
    BreadcrumbComponent,
    EmployeeNavComponent
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  dropdown: boolean = false;
  private _users: User[] = [
    { name: 'Lydia Bauer', role: 'Responsable cuisine',  avatar: 'assets/images/avatar-6.png', department: 'Responsables' },
    { name: 'Nom Prénom',  role: 'Responsable terrace', avatar: 'assets/images/avatar-5.png', department: 'Responsables' },
    { name: 'Nom Prénom',  role: 'Responsable de service', avatar: 'assets/images/avatar-7.png', department: 'Responsables' },
    { name: 'Nom Prénom',  role: 'Responsable de salle', avatar: 'assets/images/avatar-6.png', department: 'Responsables' },
    { name: 'Nom Prénom',  role: 'Manager', avatar: 'assets/images/avatar-1.png', department: 'Cuisine' },
    { name: 'Nom Prénom',  role: 'Manager', avatar: 'assets/images/avatar-2.png', department: 'Cuisine' },
    { name: 'Nom Prénom',  role: 'Manager', avatar: 'assets/images/avatar-3.png', department: 'Cuisine' },
    { name: 'Nom Prénom',  role: 'Manager', avatar: 'assets/images/avatar-4.png', department: 'Cuisine' }
  ];

  departmentGroups: DepartmentGroup[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.buildGroups();
  }

  /** Regroupe les utilisateurs par département et prépare l’état collapsed */
  private buildGroups(): void {
    const map = new Map<string, User[]>();

    this._users.forEach(u => {
      if (!map.has(u.department)) map.set(u.department, []);
      map.get(u.department)!.push(u);
    });

    // Construit le tableau final (on garde l’ordre d’insertion du Map)
    this.departmentGroups = Array.from(map.entries()).map(([name, users]) => ({
      name,
      users,
      collapsed: false    // ouvert par défaut
    }));
  }

  /** Toggle d’une section */
  toggleDept(group: DepartmentGroup): void {
    group.collapsed = !group.collapsed;
    // Pas indispensable ici, mais si tu modifies en dehors du cycle Angular :
    this.cdr.detectChanges();
  }
}