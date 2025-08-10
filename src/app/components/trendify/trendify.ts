import { Component, inject, OnInit } from '@angular/core';
import { Move } from '../../services/move';
import { Imove } from '../../interfaces/imove';
import { Recommendation } from '../recommendation/recommendation';

@Component({
  selector: 'app-trendify',
  imports: [Recommendation],
  templateUrl: './trendify.html',
  styleUrl: './trendify.css',
})
export class Trendify implements OnInit {
  moveProduct: Imove[] = [];

  private readonly move = inject(Move);

  ngOnInit(): void {
    this.getMoveData();
  }

  getMoveData(): void {
    this.move.getMoveApi().subscribe({
      next: (ser) => {
        // console.log(ser.results);
        this.moveProduct = ser.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
