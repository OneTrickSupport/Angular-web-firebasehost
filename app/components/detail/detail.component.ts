import { Component, OnInit } from '@angular/core';
import {LaglistaService} from '../../services/laglista.service';
import {Lagklass} from '../../../models/Lagklass';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
Lag: Lagklass;

  constructor(private route: ActivatedRoute, private Lagservice: LaglistaService, private router: Router) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.Lagservice.getLagName(name).subscribe(L => this.Lag = L);
    console.log(name);
  }

  deleteLag() {
    const name = this.route.snapshot.paramMap.get('name');
    if (confirm('Är du säker?')) {
      this.Lagservice.tabortLag(name);
      this.router.navigate(['/Lag']);
      alert('Laget har tagits bort');
    }
  }

}
