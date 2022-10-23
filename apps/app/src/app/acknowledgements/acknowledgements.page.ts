import { Component } from '@angular/core';
import licenses from '../../assets/licenses.json';
import { License } from '../license';

@Component({
  selector: 'app-acknowledgements',
  templateUrl: './acknowledgements.page.html',
  styleUrls: ['./acknowledgements.page.scss'],
})
export class AcknowledgementsPage {
  licenses: { [name: string]: License } = licenses;
}
