import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';
import { User } from '../models/user-model';
import { ObjectsService } from '../objects.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  objects: Array<User> = [];

  constructor(private objectsService: ObjectsService) { }

  color(user: User) {
    if (user.status == 'Deleted') {
      return 'red';
    } else if (user.status == 'Active') {
      return 'green';
    } else if (user.status == 'Inactive') {
      return 'blue';
    }
    return 'yellow';
  }

  async ngOnInit(): Promise<void> {
    this.objects = await this.objectsService.getUsers();
  }

}
