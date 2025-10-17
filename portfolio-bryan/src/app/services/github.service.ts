import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { LatestCommitInfo } from './inicio.component';

@Injectable()
export class GithubService {
  private http = inject(HttpClient);
  private readonly GITHUB_API_URL = 'https://api.github.com';

  getLatestCommitInfo(username: string): Observable<LatestCommitInfo | null> {
    return this.http.get<any[]>(`${this.GITHUB_API_URL}/users/${username}/repos?type=owner&sort=pushed&per_page=1`).pipe(
      switchMap(repos => {
        if (!repos || repos.length === 0) {
          return of(null);
        }
        const latestRepo = repos[0];
        return this.http.get<any[]>(`${this.GITHUB_API_URL}/repos/${username}/${latestRepo.name}/commits?per_page=1`).pipe(
          map(commits => {
            if (!commits || commits.length === 0) {
              return null;
            }
            const latestCommit = commits[0];
            return {
              repo: latestRepo.name,
              message: latestCommit.commit.message
            };
          }),
          catchError(() => of(null))
        );
      }),
      catchError(() => of(null))
    );
  }
}
