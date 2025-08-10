import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Move } from '../../services/move';
import { Imove } from '../../interfaces/imove';

@Component({
  selector: 'app-recommendation',
  imports: [],
  templateUrl: './recommendation.html',
  styleUrl: './recommendation.css',
})
export class Recommendation implements OnInit {
  moveProduct: Imove[] = [];

  private readonly move = inject(Move);

  ngOnInit(): void {
    this.getMoveData();
  }

  getMoveData(): void {
    this.move.getMoveApi().subscribe({
      next: (ser) => {
        // console.log(ser);
        this.moveProduct = ser.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
