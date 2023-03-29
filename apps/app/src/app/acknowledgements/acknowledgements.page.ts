import { KeyValuePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import licenses from '../../assets/licenses.json';
import { License } from '../license';

@Component({
  selector: 'app-acknowledgements',
  templateUrl: './acknowledgements.page.html',
  styleUrls: ['./acknowledgements.page.scss'],
  standalone: true,
  imports: [IonicModule, NgFor, KeyValuePipe],
})
export default class AcknowledgementsPage {
  licenses: { [name: string]: License } = licenses;
}
