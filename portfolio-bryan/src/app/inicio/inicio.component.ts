import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

// La interfaz puede ir aquí o en su propio archivo
export interface LatestCommitInfo {
  repo: string;
  message: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  latestCommitInfo: LatestCommitInfo | null = null;
  isLoading = true;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getLatestCommitInfo('bryanjrr').subscribe(info => {
      this.latestCommitInfo = info;
      this.isLoading = false;
    });
  }

  // ngAfterViewInit ya no es necesario, puedes eliminarlo por completo.
}