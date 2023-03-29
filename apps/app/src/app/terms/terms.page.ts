import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.page.html',
    styleUrls: ['./terms.page.scss'],
    standalone: true,
    imports: [IonicModule]
})
export default class TermsPage implements OnInit {
  params: Params;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.params = this.route.snapshot.params;
  }
}
