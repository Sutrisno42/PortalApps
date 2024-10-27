import { Component } from '@angular/core';
import { NgtCanvas,extend } from 'angular-three';
import { SceneGraph } from './scene';
import * as THREE from 'three';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

extend(THREE);
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './about.component.html',
  template: `
    <ngt-canvas [sceneGraph]="sceneGraph" />
  `,
  imports: [NgtCanvas, HttpClientModule, CommonModule, FormsModule],
})

export class AboutComponent {
  protected sceneGraph = SceneGraph;
  articles: any[] = [];
  search: string = ''; 
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getNewsArticles(); 
  }

  getNewsArticles(query: string = 'election') {
    const apiKey = 'rteBHxYZD5b4UTxJMllfenV1s6IHrCPE';
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;
    this.http.get(url).subscribe((response: any) => {
      this.articles = response.response.docs;
    }, (error) => {
      console.error('Error fetching news articles', error);
    });
  }
}