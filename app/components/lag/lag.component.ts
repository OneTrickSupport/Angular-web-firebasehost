import { Component, OnInit, ViewChild } from '@angular/core';
import {Lagklass} from '../../../models/Lagklass';
import {NgForm} from '@angular/forms';
import {LaglistaService} from '../../services/laglista.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lag',
  templateUrl: './lag.component.html',
  styleUrls: ['./lag.component.css'],
  providers: [LaglistaService]
})
export class LagComponent implements OnInit {
  lagarray: Lagklass[];
  nyttlag: Lagklass = {
    Namn: '',
    Land: '',
    Ranking: null,
    Spelare1: '',
    Spelare2: '',
    Spelare3: '',
    Spelare4: '',
    Spelare5: ''
  };

  @ViewChild('Lagformular') theform: any;

  constructor(private Lagservice: LaglistaService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.Lagservice.getLag().subscribe(l => {
      this.lagarray = l;
      this.lagarray.sort(function(a, b) { return a.Ranking - b.Ranking; });
    });
  }

  addLag() {
    this.lagarray.push(this.nyttlag);
  }
  onSubmit({value, valid}: {value: Lagklass, valid: boolean}) {
    if (!valid) {
      console.log('not valid');
    } else {
      this.Lagservice.addLag(value);
      this.theform.reset();
      console.log('halo');
      alert('Laget har lagts till');
    }
  }

}
