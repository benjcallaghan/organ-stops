import { Component } from '@angular/core';
import licenses from '../../assets/licenses.json';
import { License } from '../license';
import { NgFor, KeyValuePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-acknowledgements',
    templateUrl: './acknowledgements.page.html',
    styleUrls: ['./acknowledgements.page.scss'],
    standalone: true,
    imports: [IonicModule, NgFor, KeyValuePipe]
})
export default class AcknowledgementsPage {
  licenses: { [name: string]: License } = licenses;
}
