import { Component } from '@angular/core';
import { ObjectsService } from './objects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ObjectsService],
})
export class AppComponent {
  title = 'task-1';
  usersActive: boolean = false;

  constructor(private objectsService: ObjectsService) { }

  activeUsers() {
    this.usersActive = !this.usersActive;
  }

  async ngOnInit(): Promise<void> {
    // this.objects = await this.objectsService.getUsers();
  }
}
